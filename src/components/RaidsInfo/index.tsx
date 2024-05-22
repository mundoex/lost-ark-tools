import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { MaterialsEnum, RAIDS_INFO } from '../../common/consts';
import InfoIcon from '@mui/icons-material/Info';
import { GoldImage, InputElement, MaterialImage } from './styles';
import { ARGOS_BLOOD_SRC, COVETOUS_WING_SRC, DEMON_BEAST_BONE_SRC, EMPYREAN_CONTEMPLATION_SRC, EYE_OF_DECAY_SRC, GOLD_IMAGE_SRC, LIGHTS_TRIAL_SRC, MAYHEM_HORN_SRC, PHANTOM_INTENTION_SRC, SUNSET_SCALE_SRC } from '../../assets/images-src';
import { FormControlLabel, FormGroup, IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { RaidsInfoTableData } from '../../common/RaidsInfoTableData';
import { RaidsInfoContext, RaidsInfoProvider } from '../../context/RaidInfoContext';
import { useContext, useState } from 'react';

const IMAGES_NAME_MAP = {
    [MaterialsEnum.SUNSET_SCALE]: { src: SUNSET_SCALE_SRC },
    [MaterialsEnum.ARGOS_BLOOD]: { src: ARGOS_BLOOD_SRC },
    [MaterialsEnum.DEMON_BEAST_BONE]: { src: DEMON_BEAST_BONE_SRC },
    [MaterialsEnum.COVETOUS_WING]: { src: COVETOUS_WING_SRC },
    [MaterialsEnum.MAYHEM_HORN]: { src: MAYHEM_HORN_SRC },
    [MaterialsEnum.PHANTOM_INTENTION]: { src: PHANTOM_INTENTION_SRC },
    [MaterialsEnum.LIGHTS_TRIAL]: { src: LIGHTS_TRIAL_SRC },
    [MaterialsEnum.EMPYREAN_CONTEMPLATION]: { src: EMPYREAN_CONTEMPLATION_SRC },
    [MaterialsEnum.EYE_OF_DECAY]: { src: EYE_OF_DECAY_SRC },
};

interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'Name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'Gold',
        numeric: false,
        disablePadding: true,
        label: 'Gold',
    },
    {
        id: 'Rewards',
        numeric: true,
        disablePadding: false,
        label: 'Rewards',
    },
    {
        id: 'Box',
        numeric: true,
        disablePadding: false,
        label: 'Box',
    },
    {
        id: 'Bid Box',
        numeric: true,
        disablePadding: false,
        label: 'Bid Box',
    },
];

const rows: RaidsInfoTableData[] = RAIDS_INFO.reduce((acc, cur) => {
    cur.gates.forEach((gateInfo, i) => {
        const d: RaidsInfoTableData = {
            name: `${cur.name} Gate ${i+1}`,
            gold: gateInfo.rewards.gold,
            materials:  gateInfo.rewards.materials,
            boxes: gateInfo.box,
            bidBox: gateInfo?.bidBox,
            totalRaidGold: cur.gates.reduce((acc2,cur2)=>acc2+=cur2.rewards.gold,0)
        }
        acc.push(d);
    })
    return acc;
}, new Array<RaidsInfoTableData>());

function EnhancedTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding={'normal'}
                    >
                        <TableSortLabel active={false} hideSortIcon>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export function RaidsInfo(){
    return <RaidsInfoProvider>
        <RaidInfoComponent/>
    </RaidsInfoProvider>
}

function RaidInfoComponent(){
    const context=useContext(RaidsInfoContext);
    const [currentTab, setCurrentTab]=useState(0);

    const currentSelectedPreset = context.presets[currentTab];
    const isOtherTab = currentTab>5;
    const totalGold = context.getTotalGold(rows);

    const onChangeTab = (_: React.SyntheticEvent, newValue: number) => setCurrentTab(newValue);
    const onChangeBrelBox = (_: React.SyntheticEvent) => context.toggleBrelG4(currentTab);
    const onChangePresetName = (e: React.ChangeEvent<HTMLInputElement>) => context.setPresetName(e.target.value, currentTab);

    return <>
        <Box display="flex" margin="4px" marginBottom="10px" flexDirection="column" justifyContent="space-evenly">
            <Box display="flex" flexDirection="row" justifyContent="center">
                <Tabs value={currentTab} onChange={onChangeTab}>
                    {context.presets.map((preset,i)=> <Tab key={`tab${i}`} label={preset.name}/>)}
                    <Tab label="Other"/>
                    <Tab disabled 
                        label={totalGold} 
                        icon={<GoldImage src={GOLD_IMAGE_SRC} alt="Gold" />} 
                        iconPosition="end" style={{color:"#1976d2"}}>
                    </Tab>
                </Tabs>
            </Box>
            {!isOtherTab && <Box display="flex" flexDirection="row" justifyContent="space-evenly" margin="10px">
                <InputElement placeholder='Preset Name' value={currentSelectedPreset.name} onChange={onChangePresetName}/>
                <div style={{ color: "#1976d2", alignSelf:"center" }}>
                    {context.getCurrentPresetTotalGold(rows, currentTab)}<GoldImage src={GOLD_IMAGE_SRC} alt="Gold"/>
                </div>
                <FormGroup>
                    <FormControlLabel 
                        label="Disable G4 Brel"
                        control={<Checkbox checked={currentSelectedPreset.disabledG4Brel} onChange={onChangeBrelBox}/>}
                    />
                </FormGroup>
            </Box>}
            {!isOtherTab && 
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <RaidsTable currentTabIndex={currentTab}/>
                </Box>
            }
            {isOtherTab && 
                <Box display="flex" flexDirection="column" justifyContent="center">
                    <IconButton aria-label="Add" style={{width:"fit-content", alignSelf:"end"}} onClick={()=>context.addOther()}>
                        <AddCircleIcon/>
                    </IconButton>
                    {context.other.map((other,i)=>{
                        return <Box key={other.label} display="flex" flexDirection="row" justifyContent="center">
                        <InputElement placeholder='Name' value={other.label} onChange={(e)=>context.updateOtherName(e.target.value,i)} style={{margin:"2px"}}/>
                        <InputElement placeholder='Gold' value={other.gold} onChange={(e)=>context.updateOtherGold(parseInt(e.target.value), i)} style={{margin:"2px"}}/>
                        <IconButton aria-label="Add" style={{width:"fit-content", alignSelf:"center"}} onClick={()=>context.removeOther(i)}>
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                    })}
                </Box>
            }
        </Box>
    </>
}

interface TotalGoldTooltipProps{
    totalGold?:number;
}

function TotalGoldTooltip(props:TotalGoldTooltipProps){
    return <Box display="flex" flexDirection="row" alignSelf="center" alignItems="center">
        {props.totalGold}
        <GoldImage src={GOLD_IMAGE_SRC} alt="Gold" />
    </Box>
}

interface RaidsTableProps{
    currentTabIndex?:number;
}

function RaidsTable(props:RaidsTableProps) {
    const context = useContext(RaidsInfoContext);
    const currentPreset = context.presets[props.currentTabIndex ?? 0];
    const selectedGates = currentPreset?.gateNames ?? [];
    const isSelected = (name: string) => selectedGates?.indexOf(name) !== -1;

    const handleClick = (_: React.MouseEvent<unknown>, name: string) => {

        const selectedIndex = selectedGates?.indexOf(name);
        let newSelected:string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedGates, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedGates.slice(1));
        } else if (selectedIndex === selectedGates.length - 1) {
            newSelected = newSelected.concat(selectedGates.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedGates.slice(0, selectedIndex),
                selectedGates.slice(selectedIndex + 1),
            );
        }
        context?.updatePreset({...currentPreset, gateNames:newSelected}, props.currentTabIndex ?? 0);
    };

    return (
        <>
        <Box sx={{ width: '70%',display:"inline-flex" }}>
            
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 800 }}
                        aria-labelledby="tableTitle"
                        size={"small"}
                    >
                        <EnhancedTableHead />
                        <TableBody>
                            {rows.map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        

                                        <Tooltip title={row.name.includes("1") && <TotalGoldTooltip totalGold={row.totalRaidGold}/>}>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                                style={{textAlign:"center"}}
                                            >
                                                <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                                    {row.name}
                                                    {row.name.includes("1") && <InfoIcon fontSize='inherit' color='primary'/>}
                                                </Box>
                                            </TableCell>
                                        </Tooltip>               
                                            
                                        <TableCell align="right" style={{ color: "#1976d2", textAlign:"center" }}>
                                            {row.gold}
                                            <GoldImage src={GOLD_IMAGE_SRC} alt="Gold" />
                                        </TableCell>
                                        <TableCell align="right">
                                            <div style={{display:"flex",flexDirection:"row", justifyContent:"center",textAlign:"center"}}>
                                                {row.materials.map((mat,i) => {
                                                    const key=mat.name as keyof typeof IMAGES_NAME_MAP;
    
                                                    return <div key={`rewards${row.name}${key}${i}`}>
                                                        <MaterialImage src={IMAGES_NAME_MAP[key]?.src} alt={mat.name}/> 
                                                        x{mat.quantity}
                                                    </div>
                                                })}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div style={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
                                                <div style={{ color: "#fb0000c4" }}>
                                                    -{row.boxes.gold}<GoldImage src={GOLD_IMAGE_SRC} alt="Gold" />
                                                </div>
                                                {row.boxes.materials.map((mat,i) => {
                                                    const key=mat.name as keyof typeof IMAGES_NAME_MAP;
    
                                                    return <div key={`Box${row.name}${key}${i}`}>
                                                        <MaterialImage src={IMAGES_NAME_MAP[key]?.src} alt={mat.name}/> 
                                                        x{mat.quantity}
                                                    </div>
                                                })}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div style={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
                                                {row?.bidBox?.map((mat,i) => {
                                                    const key=mat.name as keyof typeof IMAGES_NAME_MAP;
                                                    return <div key={`bidbox${row.name}${key}${i}`}>
                                                        <MaterialImage src={IMAGES_NAME_MAP[key]?.src} alt={mat.name}/> 
                                                        x{mat.quantity}
                                                    </div>
                                                })}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
        </>
    );
}