import { Box, Grid, Typography, Avatar } from "@mui/material";
import { CLASS_ICON_MAP } from "../../../assets/images-src";
import { formatNumber } from "../../../utils/utils";
import { TierColorGrade } from "../TierColorGrade";
import { TIER_COLORS } from "../../../common/consts";
import { EntityStatsPlus } from "../../../common/EntityStatsPlus";

//A B C D E
const gapTier=[55, 65, 75, 85, 95];

const dpsTier=[12, 14, 16.25, 18.25, 21];

const buffTier=[55, 63, 72, 83, 90];

const identityTier=[18, 22, 27, 33, 42];

function getColorTier(arr:number[], value:number, totalPlayers?:number) : string{
    const adjustedValue = totalPlayers === undefined ? value : totalPlayers === 4 ? value/2 : totalPlayers === 16 ? value*2 : value;
    for (let i = 0; i < arr.length - 1; i++) {
        const lowerBound = arr[i-1] ?? 0;
        const upperBound = arr[i] ;
    
        if (adjustedValue >= lowerBound && adjustedValue < upperBound) {
          return TIER_COLORS[i];
        }
      }
      
      return TIER_COLORS[TIER_COLORS.length - 1];
}

export function EntityDataGrid({currentSelectedPlayerData}:{currentSelectedPlayerData:EntityStatsPlus[]}) {
  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
        padding: 2,
        borderRadius: 1,
        width: "1000px",
        margin: "0 auto",
        marginTop: "16px",
      }}
    >
      <TierColorGrade />
      {/* Header Row */}
      <Grid
        container
        sx={{
          backgroundColor: "rgb(24,24,27)",
          color: "#aaa",
          padding: "2px 0",
          fontWeight: "bold",
        }}
      >
        <Grid item xs={3}>
          <Typography variant="body2">Name</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Raid</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Dps</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Dps%</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Gap</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Tank%</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Buff%</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Ident%</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Deaths</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body2">Counters</Typography>
        </Grid>
      </Grid>

      {/* Data Rows */}
      {currentSelectedPlayerData?.map((row, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "column", marginBottom: 1 }}
        >
          <Grid
            container
            sx={{ padding: "4px 0", backgroundColor: "#333", color: "#ffffff" }}
          >
            <Grid item xs={3}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    marginRight: 1,
                    cursor: "pointer",
                  }}
                  srcSet={row.class && CLASS_ICON_MAP[row.class.toLowerCase()]}
                  onClick={() =>
                    window.open(
                      `https://logs.snow.xyz/logs/${row.id}`,
                      "_blank",
                    )
                  }
                />
                <Typography variant="body2">{`${row.ilvl.toFixed(2)} ${row.name}`}</Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{row.raid}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{formatNumber(row.dps)}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="body2"
                color={getColorTier(dpsTier, row.dpsPercent ?? 0, row.totalPlayers)}
              >
                {row.dpsPercent.toFixed(2)}%
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                variant="body2"
                color={getColorTier(gapTier, row.dpsGapPercent ?? 0)}
              >
                {row.dpsGapPercent?.toFixed(2) ?? "N/A"}%
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">
                {row.dmgTakenPercent.toFixed(2)}%
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" 
                color={getColorTier(buffTier, (row.isSupport? row.avgDmgBuffedBySupportPercent: row.dmgBuffedBySupportPercent) ?? 0)}
                >
                {row.isSupport
                  ? row.avgDmgBuffedBySupportPercent?.toFixed(2)
                  : row.dmgBuffedBySupportPercent.toFixed(2)}
                %
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" 
                color={getColorTier(identityTier, (row.isSupport? row.avgDmgBuffedBySupportIdentityPercent: row.dmgBuffedBySupportIdentityPercent) ?? 0)}
                >
                {row.isSupport
                  ? row.avgDmgBuffedBySupportIdentityPercent?.toFixed(2)
                  : row.dmgBuffedBySupportIdentityPercent.toFixed(2)}
                %
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{row.deaths}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2">{row.counters}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
