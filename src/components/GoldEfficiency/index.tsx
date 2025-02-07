import { useState } from "react";
import { Box, Checkbox, FormControlLabel, Tab, Tabs } from "@mui/material";
import {  MarketPricesProvider } from "../../context/MarketPrices";
import { GuildExchangeShopGrid, RaidExchangeShopGrid, SoloShopExchangeShopGrid } from "./components/ExchangeShopGrid";
import { MarketPrices } from "./components/MarketPrices";
import MariShop from "./components/MariShop";
import { RaidsExtraRewards } from "./components/RaidExtraRewards";
import { SoloRaidValue } from "./components/SoloRaidValue";
import { GuardianValue } from "./components/GuardianValue";

function GoldEfficiencyComponent() {
    const [checked, setChecked] = useState(false);
    const [currentTab, setCurrentTab] = useState(0);

    const TabsData = [
        {label:"Market Prices", component: <MarketPrices/>},
        {label:"Raids Exchange", component: <RaidExchangeShopGrid needShards={checked}/>},
        {label: "Guild Exchange", component: <GuildExchangeShopGrid needShards={checked}/>},
        {label: "Solo Exchange", component: <SoloShopExchangeShopGrid needShards={checked}/>},
        // {label: "Expert Shop", component: <ExpertShopExchangeShopGrid needShards={checked}/>},
        {label: "Mari's Shop", component: <MariShop/>},
        {label: "Extra Rewards", component: <RaidsExtraRewards needShards={checked}/>},
        {label: "Solo Raid Value", component: <SoloRaidValue needShards={checked}/>},
        {label: "Guardian Value", component: <GuardianValue/>},
    ];

    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <FormControlLabel
            label="Need Shards"
            sx={{ alignSelf: "center", textAlign: "center" }}
            control={<Checkbox checked={checked} onClick={() => setChecked(!checked)} />}
        />
        <Tabs value={currentTab} onChange={(_, value) => setCurrentTab(value)}>
            {TabsData.map(({ label }, i) => <Tab key={`${label}${i}`} label={label} />)}
        </Tabs>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px" }}>
            {TabsData[currentTab].component}
        </Box>
    </Box>
}

export function GoldEfficiency() {
    return <MarketPricesProvider>
        <GoldEfficiencyComponent />
    </MarketPricesProvider>
}