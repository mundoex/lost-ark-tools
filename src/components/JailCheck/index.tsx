import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { CLASS_ICON_MAP } from "../../assets/images-src";
import { EncounterData } from "../../common/EncounterData";
import { EntityStats } from "../../common/EntityStats";
import { EntityStatsPlus } from "../../common/EntityStatsPlus";
import { Entity } from "../../common/Entity";
import { GemType } from "../../common/GemType";
import { BASE_LOGS_API_URL, useLogsApiFunctionsForUrl } from "./api";
import { PARTY_COLORS, SUPPORTS_CLASS_NAMES } from "../../common/consts";
import { useDebounce } from "../../common/useDebounce";
import { EntityDataGrid } from "./EntityDataGrid";
import usePersistedState from "@utilityjs/use-persisted-state";
import { SnackbarProvider, useSnackbar } from 'notistack';

const API_URL_SAVE_KEY = "apiUrlSaveKey"

// const I_LVL_HEURISTIC = 6.1;
// const GEM_HEURISTIC_T3_10 = 0.06;
// const GEM_HEURISTIC_T4_8 = 0.04;
// const GEM_HEURISTIC_T4_7 = 0.012;
// const GEM_HEURISTIC_T4_CDR = 0.003;

function getEncounterPlayersStats(encounter: EncounterData): EntityStatsPlus[] {
  const totalDmgByPlayers = encounter.encounterDamageStats.totalDamageDealt;

  const playerEntities = Object.values(encounter.entities).filter(
    (entity: Entity) => entity.entityType === "PLAYER",
  );
  const res: EntityStats[] = [];
  const parties = Object.values(encounter.encounterDamageStats.misc.partyInfo);

  for (let i = 0; i < playerEntities.length; i++) {
    const entity = playerEntities[i];
    const skillsArray = Object.values(entity.skills);
    const gems = skillsArray.reduce((acc, skill) => {
      if (skill.gemTier) {
        if (skill.gemDamage)
          acc.push({
            tier: skill.gemTier,
            lvl: skill.gemDamage,
            type: GemType.DMG,
          });
        if (skill.gemCooldown)
          acc.push({
            tier: skill.gemTier,
            lvl: skill.gemCooldown,
            type: GemType.CDR,
          });
      }
      return acc;
    }, new Array<{ tier: number; lvl: number; type: string }>());

    const obj: EntityStats = {
      id: encounter.id,
      totalPlayers: parties.length * 4,
      raid: encounter.currentBossName,
      party:
        parties.findIndex((partyNames) => partyNames.includes(entity.name)) + 1,
      name: entity.name,
      class: entity.class,
      isSupport: SUPPORTS_CLASS_NAMES.includes(entity.class),
      totalDmg: entity.damageStats.damageDealt,
      dps: entity.damageStats.dps,
      dpsPercent: (entity.damageStats.damageDealt / totalDmgByPlayers) * 100,
      dmgTaken: entity.damageStats.damageTaken,
      ilvl: entity.gearScore,
      gems: gems,
      counters: entity.skillStats.counters,
      deaths: entity.damageStats.deaths,
      dmgBuffedBySupportPercent:
        (entity.damageStats.buffedBySupport / entity.damageStats.damageDealt) *
        100,
      dmgBuffedBySupportIdentityPercent:
        (entity.damageStats.buffedByIdentity / entity.damageStats.damageDealt) *
        100,
      dmgShielded: entity.damageStats.damageAbsorbed,
      dmgShieldedPercent:
        (entity.damageStats.damageAbsorbed / entity.damageStats.damageTaken) *
        100,
    };
    res.push(obj);
  }
  const totalDmgTaken = res.reduce((a, b) => (a += b.dmgTaken), 0);
  const totalDmgAbsorbed = res.reduce((a, b) => (a += b.dmgShielded), 0);
  const res2 = res.map((player) => {
    const playerParty = res.filter((v) => v.party === player.party);
    let totalSuppPercentSum = 0;
    let totalSuppIdentityPercentSum = 0;

    let highestdpsInParty = 0;
    let highestDps = 0;
    // let iLvlAdjustMultiplier=0;
    // let gemsAdjustMultiplier=0;

    let dpsGapPercent = 0;
    //let dpsGapAdjustedPercent_1=0

    if (player.isSupport) {
      totalSuppPercentSum = playerParty.reduce(
        (a, b) => (a += !b.isSupport ? b.dmgBuffedBySupportPercent : 0),
        0,
      );
      totalSuppIdentityPercentSum = playerParty.reduce(
        (a, b) => (a += !b.isSupport ? b.dmgBuffedBySupportIdentityPercent : 0),
        0,
      );
    } else {
      highestdpsInParty = Math.max(...playerParty.map((e) => e.dps));
      highestDps = Math.max(...res.map((e) => e.dps));
      // const highestILvl = Math.max(...res.map((e)=>e.isSupport ? 0 : e.ilvl));
      // const iLvlDiff = highestILvl - player.ilvl;

      dpsGapPercent = (player.dps / highestDps) * 100;

      // iLvlAdjustMultiplier=1+((iLvlDiff*I_LVL_HEURISTIC)/5)/100;

      // gemsAdjustMultiplier = player.gems.length<=11 ? 1-player.gems.reduce((a,gem)=>{
      //     if(gem.tier===3 && gem.lvl === 10 && gem.type===GemType.DMG) return a+=GEM_HEURISTIC_T3_10;
      //     if(gem.tier===4 && gem.lvl >= 8 && gem.type===GemType.DMG) return a+=GEM_HEURISTIC_T4_8;
      //     if(gem.tier===4 && gem.lvl === 7 && gem.type===GemType.DMG) return a+=GEM_HEURISTIC_T4_7;
      //     if(gem.tier===4 && gem.lvl === 7 && gem.type===GemType.DMG) return a+=GEM_HEURISTIC_T4_7;
      //     if(gem.tier===4 && gem.type===GemType.CDR) return a+=GEM_HEURISTIC_T4_CDR;
      //     return a;
      // }, 0) : 1;

      //dpsGapAdjustedPercent_1=((gemsAdjustMultiplier*iLvlAdjustMultiplier*player.dps)/highestDps)*100;
      //dpsGapAdjustedPercent_2=(dpsGapAdjustedPercent_1+dpsGapPercent)/2;
    }

    const obj = {
      ...player,
      dmgTakenPercent: (player.dmgTaken / totalDmgTaken) * 100,
      dmgAbsorbedPercent: (player.dmgShielded / totalDmgAbsorbed) * 100,
      ...(player.isSupport
        ? { avgDmgBuffedBySupportPercent: totalSuppPercentSum / 3 }
        : {}),
      ...(player.isSupport
        ? {
          avgDmgBuffedBySupportIdentityPercent:
            totalSuppIdentityPercentSum / 3,
        }
        : {}),
      ...(!player.isSupport
        ? { dpsPartyGapPercent: (player.dps / highestdpsInParty) * 100 }
        : {}),
      ...(!player.isSupport ? { dpsGapPercent: dpsGapPercent } : {}),
      ...(!player.isSupport
        ? {
          dpsGapAdjustedPercent:
            ((player.dps / highestdpsInParty) * 100 + dpsGapPercent) / 2,
        }
        : {}),
    };
    return obj;
  });
  return res2;
}

// function calculateAverageStats(statsArray: EntityStatsPlus[]) {
//     const averages={
//         avgDmgBuffedBySupportIdentityPercent:0,
//         avgDmgBuffedBySupportPercent:0,
//         counter:0,
//         deaths:0,
//         dmgTakenPercent:0,
//         dpsGapAdjustedPercent:0,
//         dpsPercent:0,
//     }

//     let statsWithoutDeaths = 0;

//     // Sum all numeric properties across all entries in the array
//     statsArray.forEach(stat => {
//         if(stat.deaths>0){
//             averages.deaths+=stat.deaths;
//         }else{
//             statsWithoutDeaths++;
//             averages.avgDmgBuffedBySupportIdentityPercent+=stat.avgDmgBuffedBySupportIdentityPercent ?? 0;
//             averages.avgDmgBuffedBySupportPercent+=stat.avgDmgBuffedBySupportPercent ?? 0;
//             averages.counter+=stat.counters;
//             averages.dmgTakenPercent+=stat.dmgTakenPercent;
//             averages.dpsGapAdjustedPercent+=stat.dpsGapAdjustedPercent ?? 0;
//             averages.dpsPercent+=stat.dpsPercent;
//         }
//     });

//     averages.avgDmgBuffedBySupportIdentityPercent=averages.avgDmgBuffedBySupportIdentityPercent/statsWithoutDeaths;
//     averages.avgDmgBuffedBySupportPercent=averages.avgDmgBuffedBySupportPercent/statsWithoutDeaths;
//     averages.counter=averages.counter/statsWithoutDeaths;
//     averages.dmgTakenPercent=averages.dmgTakenPercent/statsWithoutDeaths;
//     averages.dpsGapAdjustedPercent=averages.dpsGapAdjustedPercent/statsWithoutDeaths;
//     averages.dpsPercent=averages.dpsPercent/statsWithoutDeaths;
//     averages.deaths=averages.deaths/statsArray.length;

//     return averages;
// }

type Parties = [string[], string[], string[], string[]];

export function JailCheckComponent() {
  const { enqueueSnackbar } = useSnackbar();
  const [apiUrl, setApiUrl] = usePersistedState<string>(BASE_LOGS_API_URL, { name: API_URL_SAVE_KEY });
  const [searchTerm, setSearchTerm] = useState<string>();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [searching, setSearching] = useState<string[]>([]);
  const [map, setMap] = useState(new Map<string, EntityStatsPlus[]>());
  const [selectedPlayer, setSelectedPlayer] = useState<string>("");
  const [parties, setParties] = useState<Parties>([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  const { findLogs, getLogData } = useLogsApiFunctionsForUrl(apiUrl);

  const currentSelectedPlayerData = map.get(selectedPlayer) ?? [];

  const onChangePlayerName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    partyIndex: number,
    playerIndex: number,
  ) => {
    const value = e.target.value;
    parties[partyIndex][playerIndex] = value.toLowerCase();
    setParties([...parties]);
  };

  const onClickAvatar = (_: any, partyIndex: number, playerIndex: number) => {
    const name = parties[partyIndex][playerIndex];
    setSelectedPlayer(name);
  };

  const getPlayerByIndexes = (partyIndex: number, playerIndex: number) => {
    const name = parties[partyIndex][playerIndex];
    return map.get(name);
  };

  useEffect(() => {
    if (debouncedSearchTerm?.toLowerCase() && !map.has(debouncedSearchTerm?.toLowerCase())) {
      searching.push(debouncedSearchTerm?.toLowerCase());
      setSearching(Array.from(searching));
      enqueueSnackbar(`Searching for: ${debouncedSearchTerm?.toLowerCase()}`, { variant: 'info' });
      findLogs(debouncedSearchTerm).then((resp) => {
        const logsIds = resp.encounters.map((e) => e.id);
        const getLogsPromises = logsIds.map((id) => getLogData(id));
        return Promise.all(getLogsPromises)
          .then((encountersDataArray) => {
            let arr: EntityStatsPlus[] = [];
            encountersDataArray.forEach((data) => {
              const encounterPlayersData = getEncounterPlayersStats(data.encounter);
              encounterPlayersData.forEach((stats) => {
                if (stats.name === debouncedSearchTerm?.toLowerCase()) {
                  arr.push(stats);
                }
              });
            });
            setMap(map.set(debouncedSearchTerm?.toLowerCase(), arr));
          })
          .catch(() => {
            enqueueSnackbar(`Error for: ${debouncedSearchTerm?.toLowerCase()}`, { variant: 'error' });
            const newSearchingArr = searching.filter((n) => n !== debouncedSearchTerm?.toLowerCase());
            setSearching(newSearchingArr);
          })
          .finally(() => {
            enqueueSnackbar(`Found: ${debouncedSearchTerm?.toLowerCase()}`, { variant: 'success' });
            setSelectedPlayer(debouncedSearchTerm?.toLowerCase());
            const newSearchingArr = searching.filter((n) => n !== debouncedSearchTerm?.toLowerCase());
            setSearching(newSearchingArr);
          });
      }).catch(() => {
        enqueueSnackbar(`Error for: ${debouncedSearchTerm?.toLowerCase()}`, { variant: 'error' });
        const newSearchingArr = searching.filter((n) => n !== debouncedSearchTerm?.toLowerCase());
        setSearching(newSearchingArr);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          width: "800px",
          margin: "0 auto",
          marginTop: "16px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", marginBottom: 1 }}>
          <TextField
            label="API Url"
            variant="outlined"
            size="small"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            sx={{ width: "100%" }}
          />
          <IconButton onClick={() => setApiUrl(BASE_LOGS_API_URL)} aria-label="delete" size="small" sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          {parties.map((party, partyIndex) => (
            <Grid item xs={6} key={partyIndex}>
              <Box
                sx={{
                  padding: 1.5,
                  borderRadius: 1,
                  backgroundColor: "#2b2b2b",
                  borderLeft: `4px solid ${PARTY_COLORS[partyIndex]}`,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={PARTY_COLORS[partyIndex]}
                  sx={{ marginBottom: 1 }}
                >
                  {`Party ${partyIndex + 1}`}
                </Typography>
                <Grid container spacing={1}>
                  {party.map((player, playerIndex) => (
                    <Grid item xs={6} key={playerIndex}>
                      <Box display="flex" alignItems="center" paddingY={0.5}>
                        <Avatar
                          srcSet={
                            CLASS_ICON_MAP[
                            getPlayerByIndexes(
                              partyIndex,
                              playerIndex,
                            )?.[0]?.class.toLowerCase() ?? "player"
                            ]
                          }
                          onClick={(e) =>
                            onClickAvatar(e, partyIndex, playerIndex)
                          }
                          alt={player}
                          sx={{
                            width: 20,
                            height: 20,
                            marginRight: 1,
                            cursor: "pointer",
                          }}
                        />

                        <Box>
                          <TextField
                            variant="outlined"
                            size="small"
                            placeholder={`Player ${playerIndex + 1}`}
                            sx={{ width: "100%" }}
                            onChange={(e) => {
                              onChangePlayerName(e, partyIndex, playerIndex);
                              setSearchTerm(e.target.value);
                            }}
                            value={player}
                          />
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
        {searching?.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
              paddingTop: 2,
              color: "#ffffff",
              width: "fit-content",
              margin: "auto",
            }}
          >
            <CircularProgress size={20} color="primary" />
            <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
              {`Searching for: ${searching.toString()}`}
            </Typography>
          </Box>
        )}
      </Box>
      <EntityDataGrid currentSelectedPlayerData={currentSelectedPlayerData} />
    </>
  );
}

export function JailCheck() {
  return <SnackbarProvider maxSnack={3}>
    <JailCheckComponent />
  </SnackbarProvider>
}
