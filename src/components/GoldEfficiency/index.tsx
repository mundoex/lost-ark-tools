import { Box, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { MarketPricesProvider } from "../../context/MarketPrices";
import { BuyItemList } from "./BuyItemList";
import { BuyItemBox } from "./BuyItemBox";
import { useState } from "react";

const limits = [
    { start: 0, end: 3, categoryName:"Raids" },
    { start: 3, end: 13, categoryName:"Guild T4" },
    { start: 13, end: 16, categoryName:"Guild T3" },
    { start: 16, end: 22, categoryName:"Expert Shop" },
    { start: 22, end: 27, categoryName:"Solo Shop" },
];

function GoldEfficiencyComponent() {
    const [checked, setChecked] = useState(false);
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
            label="Need Shards"
            sx={{ alignSelf: "center", textAlign: "center" }}
            control={<Checkbox checked={checked} onClick={() => setChecked(!checked)} />}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {limits.map(({start, end, categoryName},i) => {
                return <Box key={`${categoryName}${i}`} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', alignSelf:"center"}}>
                    {categoryName}
                </Typography>
                    {[...BuyItemList].slice(start, end).map((entry, i) => {
                        return <Grid key={i} sx={{ margin: 0.5 }}>
                             <BuyItemBox key={`${entry.cost}${i}`} buyItem={entry} needShards={checked} />
                         </Grid>
                    })}
                </Box>
            })}
        </Box>
    </Box>
}

export function GoldEfficiency() {
    return <MarketPricesProvider>
        <GoldEfficiencyComponent />
    </MarketPricesProvider>
}