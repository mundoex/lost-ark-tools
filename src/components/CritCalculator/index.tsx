import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { ARK_PASSIVE_BLUNT_THORN_SRC, ARK_PASSIVE_CRIT_SRC, ARK_PASSIVE_KEEN_SENCE_SRC, ARK_PASSIVE_STRIKE_SRC, ARK_PASSIVE_ZEALOUS_SMITE_SRC, ENGRAVING_ADRENALINE_SRC, ENGRAVING_PRECISE_DAGGER_SRC, T3_ANCIENT_BRACELET_SRC, T4_ANCIENT_BRACELET_SRC, T4_ANCIENT_RING_SRC, T4_ANCIENT_STONE_SRC } from "../../assets/images-src";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useEffect, useState } from 'react';
import { CritSource } from "../../common/CritCalc/CritSource";
import { CritEventType, CritManager } from "./CritManager";

const RARITY_COLORS = ["grey", "#00B5FF", "#CE43FC", "#FE9600"];
const DEFAULT_PET_CRIT_STAT = 160;
const DEFAULT_BASE_CRIT_STAT = 69;

const singleCritSource: CritSource[] = [
    {
        name: 'Master Set',
        isRelicEngraving: false,
        stages: [{ state: 0, value: 7.4 }]
    },
    {
        name: 'Crit Synergy',
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 10 },
            { state: 2, value: 20 }
        ]
    },
    {
        name: 'Back Attack',
        isRelicEngraving: false,
        stages: [{ state: 0, value: 10 }]
    },
];

const arkPassiveCritSource: CritSource[] = [
    {
        name: 'Keen Sense',
        isRelicEngraving: false,
        image: ARK_PASSIVE_KEEN_SENCE_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 4 },
            { state: 2, value: 8 }
        ]
    },
    {
        name: 'Strike',
        isRelicEngraving: false,
        image: ARK_PASSIVE_STRIKE_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 10 },
            { state: 2, value: 20 }
        ]
    },
    {
        name: 'Zealous Smite',
        isRelicEngraving: false,
        image: ARK_PASSIVE_ZEALOUS_SMITE_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 12 },
            { state: 2, value: 24 }
        ]
    },
]

const engravingCritSource: CritSource[] = [
    {
        name: 'Adrenaline',
        isRelicEngraving: false,
        image: ENGRAVING_ADRENALINE_SRC,
        stages: [
            { state: 0, value: 14 },
        ]
    },
    {
        name: 'Adrenaline Relic',
        isRelicEngraving: true,
        image: ENGRAVING_ADRENALINE_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 1.5 },
            { state: 2, value: 3 },
            { state: 3, value: 4.5 },
            { state: 4, value: 6 }
        ]
    },
    {
        name: 'Precise Dagger',
        isRelicEngraving: false,
        image: ENGRAVING_PRECISE_DAGGER_SRC,
        stages: [
            { state: 0, value: 18 },
        ]
    },
    {
        name: 'Precise Dagger Relic',
        isRelicEngraving: true,
        image: ENGRAVING_PRECISE_DAGGER_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 0.75 },
            { state: 2, value: 1.5 },
            { state: 3, value: 2.25 },
            { state: 4, value: 3 }
        ]
    },
    {
        name: 'Precise Dagger Stone',
        isRelicEngraving: false,
        image: T4_ANCIENT_STONE_SRC,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 3 },
            { state: 2, value: 3.75 },
            { state: 3, value: 5.25 },
            { state: 4, value: 6 }
        ]
    },
]

const accessoryCritSource = [
    {
        name: 'Crit Rate Ring1',
        image: T4_ANCIENT_RING_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 0.4 },
            { state: 2, value: 0.95 },
            { state: 3, value: 1.55 }
        ]
    },
    {
        name: 'Crit Rate Ring2',
        image: T4_ANCIENT_RING_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 0.4 },
            { state: 2, value: 0.95 },
            { state: 3, value: 1.55 }
        ]
    },
    {
        name: 'T4 Bracelet Crit Rate',
        image: T4_ANCIENT_BRACELET_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 3.4 },
            { state: 2, value: 4.2 },
            { state: 3, value: 5 }
        ]
    },
    {
        name: 'T3 Bracelet Circulate',
        image: T3_ANCIENT_BRACELET_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 5 },
            { state: 2, value: 6 },
            { state: 3, value: 7 }
        ]
    },
    {
        name: 'T3 Bracelet Precise',
        image: T3_ANCIENT_BRACELET_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 3 },
            { state: 2, value: 4 },
            { state: 3, value: 5 }
        ]
    },
    {
        name: 'Support Bracelet',
        image: T3_ANCIENT_BRACELET_SRC,
        isRelicEngraving: false,
        stages: [
            { state: 0, value: 0 },
            { state: 1, value: 1.8 },
            { state: 2, value: 2.1 },
            { state: 3, value: 2.5 }
        ]
    },
]

interface ICritSourceProps {
    critSource: CritSource;
    onCritChange: (value: number) => void;
}

function CheckBoxCritSource(props: ICritSourceProps) {
    const [checked, setChecked] = useState(false);
    const value = props.critSource.stages[0].value ?? 0;

    const onChangeChecked = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setChecked(checked);
        checked ? props.onCritChange(value) : props.onCritChange(0);
    }

    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content", margin: "4px" }}>
        <Box display={"flex"} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ color: "white" }}>{props.critSource.name}</Typography>
            <Typography sx={{ color: "white" }}>{"("}</Typography>
            <Typography sx={{ color: checked ? "white" : "grey" }}>{`${value}%`}</Typography>
            <Typography sx={{ color: "white" }}>{")"}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "fit-content" }}>
            <img src={props.critSource.image} width={"32px"} style={{ margin: "2px" }}></img>
            <Checkbox checked={checked} onChange={onChangeChecked} sx={{ borderRadius: "2px", margin: 0, padding: 0 }} />
        </Box>
    </Box>
}

function IncrementableCritSource(props: ICritSourceProps) {
    const [stage, setStage] = useState(0);
    const length = props.critSource.stages.length - 1;
    const rarityColorsEnabled = props.critSource.stages.length === 4;
    const value = props.critSource.stages[stage].value;

    useEffect(() => { props.onCritChange(value); }, [stage]);

    const increment = () => stage < length && setStage(stage + 1);
    const decrement = () => stage > 0 && setStage(stage - 1);

    const getColor = (index: number) => {
        if (rarityColorsEnabled) {
            return stage === index ? RARITY_COLORS[index] : RARITY_COLORS[0];
        } else {
            return stage === index ? "white" : "grey";
        }
    }

    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content" }}>
        <Box display={"flex"} sx={{ justifyContent: "center" }}>
            <Typography sx={{ color: "white" }}>{props.critSource.name}</Typography>
            <Typography sx={{ color: "white" }}>{"("}</Typography>
            {props.critSource.stages.reduce((acc, stage, i) => {
                if (i !== 0) {
                    acc.push(<Typography key={stage.value} sx={{ color: getColor(i) }}>{`${stage.value}%`}</Typography>);
                    if (i !== length) acc.push(<Typography key={stage.value + "/"} sx={{ color: "grey" }}>{`/`}</Typography>)
                }
                return acc;
            }, [] as JSX.Element[])}
            <Typography sx={{ color: "white" }}>{")"}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "fit-content" }}>
            <img src={props.critSource.image} width={"32px"} style={{ margin: "2px", marginRight: "6px" }}></img>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyItems: "space-evenly" }}>
                <IconButton sx={{ padding: 0, border: "1px solid white", borderRadius: "2px", width: "20px", height: "20px" }} onClick={decrement}>
                    <RemoveIcon />
                </IconButton>
                <Typography sx={{ marginInline: "3px" }}>
                    {stage}
                </Typography>
                <IconButton sx={{ padding: 0, border: "1px solid white", borderRadius: "2px", width: "20px", height: "20px" }} onClick={increment}>
                    <AddIcon />
                </IconButton>
            </Box>
        </Box>
    </Box>
}

function CritStat(props: { onCritChange: (value: number) => void }) {
    const [count, setCount] = useState(0);
    const maxCount = 30;
    const STAT_PER_1_POINT = 50;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const increment = (e: any) => {
        const mult = e.shiftKey ? 10 : 1;
        count < maxCount && (setCount(clamp(count+mult,0,30)));
    };
    const decrement = (e: any) => {
        const mult = e?.shiftKey ? 10 : 1;
        count > 0 && (setCount(clamp(count-mult,0,30)));
    };

    useEffect(() => { props.onCritChange(count * STAT_PER_1_POINT); }, [count]);

    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content" }}>
        <Typography variant="h6" sx={{ marginInline: "3px", alignSelf: "center" }}>
            Crit
        </Typography>
        <img src={ARK_PASSIVE_CRIT_SRC} width={"64px"} style={{ margin: "4px" }}></img>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyItems: "space-evenly" }}>
            <IconButton sx={{ padding: 0, border: "1px solid white", borderRadius: "2px", width: "18px", height: "18px" }} onClick={decrement}>
                <RemoveIcon />
            </IconButton>
            <Typography variant="body2" sx={{ marginInline: "3px" }}>
                {`${count}/${maxCount}`}
            </Typography>
            <IconButton sx={{ padding: 0, border: "1px solid white", borderRadius: "2px", width: "18px", height: "18px" }} onClick={increment}>
                <AddIcon />
            </IconButton>
        </Box>
    </Box>
}

export function CritCalculator() {
    const [critManager] = useState(new CritManager());
    const [braceletCrit, setBraceletCrit] = useState(0);
    const [baseCrit, setBaseCrit] = useState(DEFAULT_BASE_CRIT_STAT);
    const [otherPercentage, setOtherPercentage] = useState(0);
    const [pet, setPet] = useState(false);

    // State to force re-renders when critManager's values change
    const [totalCritStat, setTotalCritStat] = useState(critManager.totalCritStat);
    const [totalCritChance, setTotalCritChance] = useState(critManager.totalCritChance);

    const handleBraceletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value === "" ? 0 : e.target.value);
        if (!isNaN(value)) {
            setBraceletCrit(value);
            critManager.emitCritStatChange("bracelet", value);
        }
    };

    const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value === "" ? 0 : e.target.value);
        if (!isNaN(value)) {
            setBaseCrit(value);
            critManager.emitCritStatChange("baseCrit", value);
        }
    };

    const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value === "" ? 0 : e.target.value);
        if (!isNaN(value)) {
            setOtherPercentage(value);
            critManager.emitCritChanceChange("otherPercentage", value);
        }
    };

    const handlePetChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setPet(checked);
        checked ? critManager.emitCritStatChange("pet", DEFAULT_PET_CRIT_STAT) : critManager.emitCritStatChange("pet", 0);
    };

    useEffect(() => {
        const updateUI = () => {
            setTotalCritStat(critManager.totalCritStat);
            setTotalCritChance(critManager.totalCritChance);
        };

        critManager.eventer.on(CritEventType.CHANGE, () => updateUI());
        critManager.emitCritStatChange("bracelet", braceletCrit);
        critManager.emitCritStatChange("baseCrit", baseCrit);
        critManager.emitCritChanceChange("otherPercentage", otherPercentage);


    }, [baseCrit, braceletCrit, otherPercentage]);

    return <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "fit-content", margin: 1 }}>
                <TextField
                    label="Bracelet Crit"
                    value={braceletCrit}
                    onChange={handleBraceletChange}
                    sx={{ marginBlock: "8px", width: "100px" }}
                />
                <TextField
                    label="Base Crit"
                    value={baseCrit}
                    onChange={handleBaseChange}
                    sx={{ marginBlock: "8px", width: "100px" }}
                />
                <TextField
                    label="Other Crit %"
                    value={otherPercentage}
                    onChange={handleOtherChange}
                    sx={{ marginBlock: "8px", width: "100px" }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={pet}
                            onChange={handlePetChange}
                            sx={{ borderRadius: '2px', margin: 0, padding: 0 }}
                        />
                    }
                    label="Crit Pet"
                    sx={{ margin: 0, color: 'primary.main', fontSize: '14px' }}
                />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", margin: 1 }}>
                <Typography variant="h2">{`Total Crit Stat: ${totalCritStat}`}</Typography>
                <Typography variant="h2">{`Total Crit Chance: ${totalCritChance.toFixed(2)}%`} </Typography>
                <CritStat onCritChange={(num: number) => critManager.emitCritStatChange("arkPassive", num)} />

            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", margin: 1 }}>
                <Typography variant="h2">{`Blunt Thorn: ${Math.max(0,totalCritChance-80).toFixed(2)}/70% Evo Dmg`}</Typography>
                <img src={ARK_PASSIVE_BLUNT_THORN_SRC} width={"64px"} height={"64px"} style={{ margin: "2px" }}></img>
            </Box>
        </Box>
        <Box>
            <Box sx={{ display: "flex", flexDirection: "row", width: "fit-content", margin: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "fit-content", marginRight: 2 }}>
                    {[...arkPassiveCritSource, ...engravingCritSource].map((critSource) => {
                        const onCritChange = (num: number) => critManager.emitCritChanceChange(critSource.name, num);
                        if (critSource.stages.length === 1) {
                            return <CheckBoxCritSource key={critSource.name} critSource={critSource} onCritChange={onCritChange} />
                        } else {
                            return <IncrementableCritSource key={critSource.name} critSource={critSource} onCritChange={onCritChange} />
                        }
                    })}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "fit-content" }}>
                    {[...accessoryCritSource, ...singleCritSource].map((critSource) => {
                        const onCritChange = (num: number) => critManager.emitCritChanceChange(critSource.name, num);
                        if (critSource.stages.length === 1) {
                            return <CheckBoxCritSource key={critSource.name} critSource={critSource} onCritChange={onCritChange} />
                        } else {
                            return <IncrementableCritSource key={critSource.name} critSource={critSource} onCritChange={onCritChange} />
                        }
                    })}
                </Box>
            </Box>
        </Box>
    </Box>
}