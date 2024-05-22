import { Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import { useContext,  } from "react";
import { StatsCalculatorContext, StatsCalculatorProvider } from "../../context/StatsCalculatorContext";
import { StatsLine } from "./StatsLine";
import { PET_BUFFS } from "../../common/consts";
import { emptyStats } from "./common";

function StatsCalculatorComp(){
    const context=useContext(StatsCalculatorContext);

    const onChangePetBuff=(e:any)=> context?.setPetBuff(e.target.value);
    
    return <>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>Pet Buff</InputLabel>
                <Select key={context?.petBuff} value={context?.petBuff} label="Pet Buff" onChange={onChangePetBuff}>
                    {PET_BUFFS.map((petBuff)=> <MenuItem key={petBuff} value={petBuff}>{petBuff}</MenuItem>)}
                </Select>
            </FormControl>
        <Box component="div" display="flex" flexDirection="row" sx={{'& .MuiTextField-root': { m: 1, width: '20chch' }}}> 
            {context?.accessories.map((acc)=>{
                return <StatsLine key={acc.name} label={acc.name} stats={acc.stats} disabled={false}/>
            })}
            <StatsLine disabled={true} label={"Total"} stats={context?.getTotalStats() ?? emptyStats}/>
        </Box>
    </>
}

export function StatsCalculator(){
    return <StatsCalculatorProvider>
        <StatsCalculatorComp/>
    </StatsCalculatorProvider>
}

