import { useContext } from "react";
import { Stats } from "../../../common/Stats";
import { StatsCalculatorContext } from "../../../context/StatsCalculatorContext";
import { Box, InputLabel } from "@mui/material";
import { CustomTextField } from "../styles";

interface StatsLineProps{
    label:string;
    stats:Stats;
    disabled:boolean;
}

export function StatsLine({ label, stats, disabled=false } : StatsLineProps){
    const statNames=Object.keys(stats);
    const context = useContext(StatsCalculatorContext);

    const onChange = (e:any, statName:string)=>{
        const keyTyped = statName as keyof typeof stats;
        stats[keyTyped] = parseInt(e.target.value);
        context?.setAccessoryStats(label, stats);
    }

    return <Box component="div" display="flex" flexDirection="column" sx={{'& .MuiTextField-root': { m: 1, width: '130px', maxWidth:"400px" }}}>
        <InputLabel>{label}</InputLabel>
        {statNames.map((statName:string)=>{
            const keyTyped = statName as keyof typeof stats;
            return <CustomTextField 
                key={label+statName} size="small" disabled={disabled} fullWidth={true}
                label={keyTyped} value={stats[keyTyped]} onChange={(e)=>onChange(e, keyTyped)}
            />
        })}
    </Box>
}
