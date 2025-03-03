import { Fragment, useCallback, useContext } from 'react';
import { Grid, Select, MenuItem, TextField, Typography, Box, Button, Checkbox } from '@mui/material';
import { RAIDS_INFO } from '../../../constants/RaidsInfo';
import DeleteIcon from '@mui/icons-material/Delete';
import { GUARDIANS_RAIDS_INFO } from '../../../constants/GuardianRaidsInfo';
import { PlannerContext } from '../../../context/PlannerContext';
import { DaysOfWeek } from '../../../common/Planner/DaysOfWeek';
import { CLASS_ICON_MAP } from '../../../assets/images-src';
import { RaidPlan } from '../../../common/Planner/RaidPlan';

const raidNames = [...RAIDS_INFO.map((raid) => raid.name), ...GUARDIANS_RAIDS_INFO.map((raid) => raid.name)].filter((name) => !name.includes("Solo"));

interface IRaidNameGridProps {
    raidName: string;
    checked: boolean;
    raidNumber: number;
    onChangeName: Function;
    onChangeNumber: Function;
    onChangeChecked: Function;
    onDelete: Function;
}

function RaidNameGrid(props: IRaidNameGridProps) {
    const raidColors = [
        {name:"Brelshaza Act2", color: "#13959c"},
        {name:"Aegir", color: "#9c6913"},
        {name:"Echidna", color: "#911149"},
        {name:"Behemoth", color: "#173dbd"},
    ];
    const getRaidColor = (raidName:string)=>{
        const colorIndex = raidColors.findIndex((obj)=>raidName.includes(obj.name));
        const color = raidColors[colorIndex]?.color ?? 'inherit';
        return color;
    }

    const onChangeRaidNumberIndex = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value === "" ? "0" : e.target.value;
        const newValue = parseInt(value);
        if (!isNaN(newValue)) {
            props.onChangeNumber(newValue);
        }
    }

    return <Grid container alignItems="center" sx={{ border: "1px solid white", width: "100%" }}>
        <Grid item sx={{ width: "75%" }} >
            <Select
                value={props.raidName}
                onChange={(e) => props.onChangeName(e.target.value)}
                sx={{ height: "30px", width: "100%", backgroundColor: getRaidColor(props.raidName) }}
            >
                {raidNames.map((num) => (
                    <MenuItem key={num} value={num}>
                        {num}
                    </MenuItem>
                ))}
            </Select>
        </Grid>
        <Grid item sx={{ width: "10%" }}>
            <TextField variant="standard"
                InputProps={{
                    disableUnderline: true,
                    sx: {
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        color: 'text.primary',
                        padding: 0,
                        margin: 0,

                    },
                }}
                sx={{
                    '& .MuiInputBase-root': {
                        '&.Mui-focused fieldset': {
                            padding: 0,
                            margin: 0,
                        },
                        border: 'none',
                        height: "25px",
                        background: 'none',
                        padding: 0,
                        margin: 0,
                        marginInline: "4px",
                    },
                }}
                value={`${props.raidNumber}`}
                onChange={(e) => onChangeRaidNumberIndex(e)}
            />
        </Grid>
        <Grid item sx={{ width: "15%",backgroundColor:props.checked ? "#0f6b15" : "#a32317" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Checkbox checked={props.checked} sx={{ padding: 0, borderRadius: 0 }} onChange={(_, checked) => props.onChangeChecked(checked)} />
                <DeleteIcon onClick={() => props.onDelete()} sx={{ color: 'white', cursor: "pointer", padding: 0 }} />
            </Box>

        </Grid>
    </Grid>
}

interface IWeekAndDayGridProps {
    dayOfWeek: DaysOfWeek;
    time: string;
    setDayOfWeek: Function;
    setTime: Function;
}

function WeekAndDayGrid(props: IWeekAndDayGridProps) {
    return <Grid container sx={{ border: "1px solid white" }}>
        <Grid item sx={{ width: '85%' }}>
            <Select
                value={props.dayOfWeek}
                onChange={(e) => props.setDayOfWeek(e.target.value)}
                sx={{ height: "30px", width: "100%" }}
            >
                {Object.values(DaysOfWeek).map((num) => (
                    <MenuItem key={num} value={num}>
                        {num}
                    </MenuItem>
                ))}
            </Select>

        </Grid>
        <Grid item sx={{ width: "15%" }}>
            <TextField variant="standard"
                InputProps={{
                    disableUnderline: true,
                    sx: {
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        color: 'text.primary',
                        padding: 0,
                        margin: 0,
                    },
                }}
                sx={{
                    marginLeft: "8px",
                    '& .MuiInputBase-root': {
                        '&.Mui-focused fieldset': {
                            padding: 0,
                            margin: 0,
                        },
                        border: 'none',
                        height: "30px",
                        background: 'none',
                        padding: 0,
                        margin: 0,
                    },
                }} value={props.time} onChange={(e) => props.setTime(e.target.value)} />
        </Grid>
    </Grid>
}

interface IPlayersGridProps {
    raidName: string;
    plannerIndex: number;
    partyIndex: number;
    players: Array<{ name: string, charName: string }>;
    setPlayer: (partySlotIndex:number, playerName:string) => void;
    setCharacter: (partySlotIndex:number, playerName:string) => void;
}

function PlayersGrid(props: IPlayersGridProps) {
    const context = useContext(PlannerContext);
    const raidInfo = RAIDS_INFO.find((info) => info.name === props.raidName);
    const playersArr = [...props.players, ...Array(Math.max(0, 4 - props.players.length)).fill(null)];
    const playersAlreadyInParty = context.raidsPlannerData.raidPlans[props.plannerIndex].parties.map((party)=>party.map((char)=>char.charName))
        .flat()
        .filter((name, index, self) => name && self.indexOf(name) === index);

    return <Grid container sx={{ border: "1px solid white", minWidth: '380px' }}>
        <Grid item sx={{ width: '100%' }}>
            <Typography sx={{marginInline:"4px"}}>{`Party ${props.partyIndex + 1}`}</Typography>
        </Grid>
        <Grid container alignItems="flex-start" sx={{ border: "1px solid white", minWidth: '380px' }}>
            {playersArr.map((player,i) => {
                const playerChars = context.playerChars(player?.name ?? "");
                const filteredPlayerChars = raidInfo ? playerChars.filter((char) => char.itemLevel >= raidInfo?.gates[0].itemLevelRequired) : playerChars;
                return <Fragment key={player+i}>
                    <Grid item sx={{ width: "35%" }} key={player+i}>
                        <Select
                            value={player?.name ?? "Select player"}
                            onChange={(e) => props.setPlayer(i,e.target.value)}
                            sx={{ height: "30px", width: "100%" }}
                        >
                            {context.playerNames().filter((name=>!playersAlreadyInParty.includes(name))).map((pName) => (
                                <MenuItem key={pName} value={pName}>
                                    {pName}
                                </MenuItem>
                            ))}
                            <MenuItem key={"No Player"} value={""}>{""}</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item sx={{ width: "65%" }}>
                        <Select
                            value={player?.charName ?? ""}
                            onChange={(e: any) => props.setCharacter(i, e.target.value)}
                            sx={{ height: "30px", width: "100%" }}
                            renderValue={(selected) => {
                                const selectedOption = playerChars.find((option) => option.name === selected);
                                if (selectedOption) {
                                    return (
                                        <Box display="flex" alignItems="center">
                                            <Typography sx={{ marginRight: "2px" }}>{selectedOption?.itemLevel.toFixed(0)}</Typography>
                                            <img src={CLASS_ICON_MAP[selectedOption?.class.toLowerCase() ?? ""]} style={{ width: "18px", height: "18px", marginRight: "2px" }}></img>
                                            <Typography>{selectedOption?.name}</Typography>
                                        </Box>)
                                } else {
                                    return (
                                        <Box display="flex" alignItems="center">
                                            <Typography sx={{ marginRight: "2px" }}>{"No characters found"}</Typography>
                                        </Box>)
                                }
                            }}>

                            {filteredPlayerChars.length > 0 && filteredPlayerChars.map((char) => {
                                return <MenuItem key={char.name} value={char.name}>
                                    <Box display="flex" alignItems="center">
                                        <Typography sx={{ marginRight: "2px" }}>{char?.itemLevel.toFixed(0)}</Typography>
                                        <img src={CLASS_ICON_MAP[char?.class?.toLowerCase() ?? ""]} style={{ width: "18px", height: "18px", marginRight: "2px" }}></img>
                                        <Typography>{char?.name}</Typography>
                                    </Box>

                                </MenuItem>
                            }
                            )}
                        </Select>
                    </Grid>
                </Fragment>
            })}
        </Grid>
    </Grid>
}

interface IPlanerRaid {
    raidPlan: RaidPlan;
    plannerIndex: number;
}

function PlannerRaid(props: IPlanerRaid) {
    const context = useContext(PlannerContext);
    const plan = props.raidPlan;
    return <Grid item sx={{ border: "1px solid white", width: "380px" }}>
        <RaidNameGrid raidNumber={plan.raidIndex}
            raidName={plan.raidName}
            checked={plan.checked}
            onChangeNumber={(newRaidIndex: number) => context.changeRaidIndex(props.plannerIndex, newRaidIndex)}
            onChangeName={(newRaidName: string) => context.changeRaidName(props.plannerIndex, newRaidName)}
            onChangeChecked={(newChecked: boolean) => context.changeChecked(props.plannerIndex, newChecked)}
            onDelete={() => context.deleteRaid(props.plannerIndex)}
        />
        <WeekAndDayGrid
            dayOfWeek={plan.dayOfWeek}
            time={plan.time}
            setDayOfWeek={(newDayOfWeek: string) => context.changeDayOfWeek(props.plannerIndex, newDayOfWeek)}
            setTime={(newTime: string) => context.changeTime(props.plannerIndex, newTime)}
        />
        {plan.parties.map((party, i) => {
            return <PlayersGrid
                key={plan.raidName+i}
                raidName={plan.raidName}
                plannerIndex={props.plannerIndex}
                partyIndex={i}
                players={party}
                setPlayer={(partySlotIndex:number, playerName:string) => context.setRaidPlanPlayer(props.plannerIndex, i, partySlotIndex, playerName)}
                setCharacter={(partySlotIndex:number, charName:string) => context.setRaidPlanChar(props.plannerIndex, i, partySlotIndex, charName)}
            />
        })}
    </Grid>
}

export function PlannerRaids() {
    const context = useContext(PlannerContext);
    const raidPlans = context.raidsPlannerData.raidPlans;

    const getGridProps = useCallback((length: number) => {
        if (length === 2) {
            return { xs: 6, sm: 6, md: 6, lg: 6 };
        } else if (length === 3) {
            return { xs: 4, sm: 4, md: 4, lg: 4 };
        } else {
            return { xs: 12, sm: 12, md: 6, lg: 4, xl: 3 };
        }
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center' }}>
                <Button sx={{ marginBottom: "8px", marginInline: "4px" }} variant="outlined" color="primary" onClick={() => context.addRaid()}>
                    Add
                </Button>
                <Button sx={{ marginBottom: "8px", marginInline: "4px" }} variant="outlined" color="primary" onClick={() => context.sortByNumber()}>
                    Sort by Number
                </Button>
                <Button sx={{ marginBottom: "8px", marginInline: "4px" }} variant="outlined" color="primary" onClick={() => context.sortByCompleted()}>
                    Sort by Completed
                </Button>
            </Box>
            <Grid container spacing={4}>
                {raidPlans.map((plan, plannerIndex) => (
                    <Grid item key={plannerIndex} {...getGridProps(raidPlans.length)}>
                        <PlannerRaid plannerIndex={plannerIndex} raidPlan={plan} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

