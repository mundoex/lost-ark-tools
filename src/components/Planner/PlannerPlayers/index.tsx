import { useCallback, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlannerContext } from "../../../context/PlannerContext";
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { HexColorPicker } from "react-colorful";
import { CLASS_ICON_MAP } from "../../../assets/images-src";
import { getRosterImportData } from "../api";
import { formatRosterImportData, getHighestItemLevelCharacter } from "../other";
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowBack } from "@mui/icons-material";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { ClassEnum } from "../../../common/Planner/ClassEnum";
import { PlannerCharacter } from "../../../common/Planner/PlannerCharacter";
import { BASE_URL } from "../../../constants";

export function PlannerPlayers() {
    const theme = useTheme();
    const navigate = useNavigate();
    const params = useParams();

    const plannerContext = useContext(PlannerContext);
    const selectedPlayer = params?.playerName;

    const [playerName, setPlayerName] = useState('');
    const [color, setColor] = useState("#ffffff");
    const [loadingUpdateAllPlayers, setLoadingUpdateAllPlayers] = useState(false);

    const [plannerCharacter, setPlannerCharacter] = useState<PlannerCharacter>({
        name: "",
        class: "" as ClassEnum,
        itemLevel: 0,
    });

    //add player
    const handlePlayerNameChange = (event: any) => setPlayerName(event.target.value);
    const handleAddPlayer = () => plannerContext.addPlayer(playerName, color);

    //add character
    const handleCharacterNameChange = (event: any) => setPlannerCharacter({ ...plannerCharacter, name: event.target.value });
    const handleCharacterItemLevelChange = (event: any) => setPlannerCharacter({ ...plannerCharacter, itemLevel: parseFloat(event.target.value) ?? 0 });
    const handleCharacterClassChange = (event: any) => setPlannerCharacter({ ...plannerCharacter, class: event.target.value as ClassEnum });

    const handleAddCharacter = () => {
        if (selectedPlayer && plannerCharacter?.name !== '' && plannerCharacter?.class !== '' as ClassEnum &&
            plannerCharacter?.itemLevel > 0) {
            plannerContext.addCharacter(selectedPlayer, plannerCharacter);
        }
    };

    const onClickHandleImportRoster = async () => {
        if(selectedPlayer){
            await handleImportRoster(selectedPlayer, plannerCharacter);
        }
    };

    const handleImportRoster = async(playerName:string, plannerCharacterParam:PlannerCharacter) => {
        const nameToUpperStart = capitalizeFirstLetter(plannerCharacterParam.name);
        const data = await getRosterImportData(nameToUpperStart, plannerContext.apiIp);
        const chars = formatRosterImportData(data);
        const charsSortedByIlvl = chars.sort((a, b) => b.itemLevel - a.itemLevel);
        plannerContext.importRoster(playerName, charsSortedByIlvl);
    }

    const handleUpdateAllPlayers = async () => {
        const playerNameAndMainChar = plannerContext.playersPlannerData.players.map((player)=>({ playerName: player.name, plannerCharacter: getHighestItemLevelCharacter(player) }));
        const playersAndRoster=[];
        setLoadingUpdateAllPlayers(true);
        for (let i = 0; i < playerNameAndMainChar.length; i++) {
            const { playerName, plannerCharacter } = playerNameAndMainChar[i];
            if(plannerCharacter){
                const nameToUpperStart = capitalizeFirstLetter(plannerCharacter?.name);
                const data = await getRosterImportData(nameToUpperStart, plannerContext.apiIp);
                await new Promise(resolve => setTimeout(resolve, 1000));
                const chars = formatRosterImportData(data);
                const charsSortedByIlvl = chars.sort((a, b) => b.itemLevel - a.itemLevel);
                playersAndRoster.push({playerName, roster: charsSortedByIlvl});
            }
        }
        setLoadingUpdateAllPlayers(false);
        plannerContext.importAllRosters(playersAndRoster);
    };

    const getGridPropsForPlayers = useCallback((length: number) => {
        if (length === 2) {
            return { xs: 12, sm: 6, md: 6, lg: 6 };
        } else if (length === 1) {
            return { xs: 12, sm: 12, md: 12, lg: 12 };
        } else if (length === 3) {
            return { xs: 12, sm: 4, md: 4, lg: 4, xl: 4 };
        } else {
            return { xs: 12, sm: 4, md: 3, lg: 2, xl: 2 };
        }
    }, []);

    const getGridPropsForChars = useCallback((length: number) => {
        if (length === 2) {
            return { xs: 12, sm: 6, md: 6, lg: 6 };
        } else if (length === 1) {
            return { xs: 12, sm: 12, md: 12, lg: 12 };
        } else if (length === 3) {
            return { xs: 12, sm: 6, md: 4, lg: 4, xl: 4 };
        } else if (length === 4 || length === 5) {
            return { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 };
        } else {
            return { xs: 12, sm: 6, md: 4, lg: 3, xl: 2 };
        }
    }, []);

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button color="primary" variant="outlined" onClick={handleUpdateAllPlayers} sx={{marginBlock:2}}>
            Update All Players
        </Button>
        {loadingUpdateAllPlayers && <CircularProgress size={20}/>}
        {!selectedPlayer && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px", gap: 2 }}>
                    <TextField
                        label="Player Name"
                        variant="outlined"
                        value={playerName}
                        onChange={handlePlayerNameChange}
                        fullWidth
                    />
                    <HexColorPicker color={color} onChange={setColor} style={{ height: "72px" }} />
                    <TextField label="Color" variant="outlined" value={color} onChange={(e) => setColor(e.target.value)} />
                    <Button variant="outlined" color="primary" onClick={handleAddPlayer}>
                        Add
                    </Button>
                </Box>
            </Box>
        )}
        {!selectedPlayer && (
            <Grid container spacing={2} padding={3} justifyContent="flex-start">
                {
                    plannerContext.playersPlannerData.players.map((player, index) => {
                        const mainChar = getHighestItemLevelCharacter(player);
                        return (
                            <Grid item { ...getGridPropsForPlayers(plannerContext.playersPlannerData.players.length)} key={index} display="flex" justifyContent="center">
                                <Card
                                    sx={{
                                        width: 350, // Fixed width
                                        height: 62, // Fixed height
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '2px', // Added padding
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 50, // Image width
                                            height: 50, // Image height
                                            marginRight: "2px",
                                            cursor: 'pointer',
                                        }}
                                        image={mainChar ? CLASS_ICON_MAP[mainChar.class?.toLowerCase()] : `${BASE_URL}helm.png`}
                                        alt={player.name}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/planner/${player.name}`);
                                        }}
                                    />
                                    <CardContent sx={{ flex: 1, paddingInline: '4px', borderLeft: `2px solid ${player.color}` }}>
                                        <Typography variant="subtitle1" fontSize="small">
                                            {player.name}
                                        </Typography>
                                        <Typography variant="subtitle1" fontSize="small">
                                            {mainChar?.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" fontSize="small">
                                            Item Level: {mainChar?.itemLevel.toFixed(2) ?? "????"}
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" sx={{ padding: 0, margin: "2px", minWidth: "10px" }} onClick={(e) => {
                                        plannerContext.deletePlayer(player.name);
                                        e.stopPropagation();
                                    }}>
                                        <DeleteIcon />
                                    </Button>
                                </Card>
                            </Grid>
                        );
                    })
                }
            </Grid>
        )}
        {selectedPlayer && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px", gap: 2 }}>
                    <Button sx={{ minWidth: "82px", background: theme.palette.background.paper }} variant="outlined" onClick={() => navigate('/planner')}>
                        <ArrowBack />
                        Back
                    </Button>
                    <TextField
                        label="Character Name"
                        variant="outlined"
                        value={plannerCharacter?.name}
                        onChange={handleCharacterNameChange}
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="class-select-label">Select Class</InputLabel>
                        <Select
                            labelId="class-select-label"
                            id="class-select"
                            value={plannerCharacter?.class}
                            label="Select Class"
                            onChange={handleCharacterClassChange}
                        >
                            {Object.values(ClassEnum).map((className) => (
                                <MenuItem key={className} value={className}>
                                    {className}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                    <TextField
                        label="Item Level"
                        variant="outlined"
                        type="number"
                        value={plannerCharacter?.itemLevel}
                        onChange={handleCharacterItemLevelChange}
                        fullWidth
                    />
                    <Button color="primary" variant="outlined" onClick={handleAddCharacter}>
                        Add
                    </Button>
                </Box>
            </Box>
        )}
        {selectedPlayer && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 2, gap: 2 }}>
                <TextField
                    label="Character Name"
                    variant="outlined"
                    value={plannerCharacter?.name}
                    onChange={handleCharacterNameChange}
                    fullWidth
                />
                <Button variant="outlined" color="primary" onClick={onClickHandleImportRoster} sx={{ minWidth: '125px' }}>
                    Import Roster from Character Name
                </Button>
                <Typography variant="caption" sx={{ color: 'text.secondary', marginTop: -1 }}>
            {`(Requires API IP setup)`}
        </Typography>
            </Box>
        )}
        {selectedPlayer && (
            <Grid container spacing={2} padding={3} justifyContent="flex-start">
                {plannerContext.playersPlannerData.players.find(p => p.name === selectedPlayer)?.roster.map((character, index) => {
                    const roster = plannerContext.playersPlannerData.players.find(p => p.name === selectedPlayer)?.roster
                    return (
                        <Grid item {...getGridPropsForChars(roster?.length ?? 0)} key={index} display="flex" justifyContent="center">
                            <Card
                                sx={{
                                    minWidth: 250, // Fixed width
                                    height: 72, // Fixed height
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '8px', // Added padding

                                }}
                            >
                                <CardMedia
                                    component="img"
                                    onClick={(e) => {
                                        window.open(`https://uwuowo.mathi.moe/character/CE/${capitalizeFirstLetter(character.name)}`, "_blank")
                                        e.stopPropagation();
                                    }}
                                    sx={{
                                        width: 72, // Image width
                                        height: 72, // Image height
                                        objectFit: 'cover', // Ensure the image fits
                                        cursor: 'pointer',
                                    }}
                                    src={CLASS_ICON_MAP[character.class?.toLowerCase() ?? ""]}
                                />
                                <CardContent sx={{ flex: 1, padding: '8px' }}>
                                    <Typography variant="subtitle1" component="div">
                                        {character.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Level: {character.itemLevel.toFixed(2)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {character.class}
                                    </Typography>
                                </CardContent>
                                <Button size="small" sx={{ padding: 0, margin: "2px", minWidth: "10px" }} onClick={(e) => {
                                    plannerContext.deleteCharacter(character?.name ?? "");
                                    e.stopPropagation();
                                }}>
                                    <DeleteIcon />
                                </Button>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        )}
    </Box>
}