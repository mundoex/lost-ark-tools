import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { PlannerProvider } from "../../context/PlannerContext";
import { PlannerPlayers } from "./PlannerPlayers";
import { PlannerDataImportExport } from "./PlannerDataImportExport";
import { PlannerRaids } from "./PlannerRaids";

const TabsData = [
    {label:"Roster", component: <PlannerPlayers/>},
    {label:"Planner", component: <PlannerRaids/>},
    {label: "Data Import/Export", component: <PlannerDataImportExport/>},
];

function PlannerComponent() {
    const [currentTab, setCurrentTab] = useState(0);

    return <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs value={currentTab} onChange={(_, value) => setCurrentTab(value)}>
            {TabsData.map(({ label }, i) => <Tab key={`${label}${i}`} label={label} />)}
        </Tabs>
        {TabsData[currentTab].component}
    </Box>
}

export function Planner() {
    return <PlannerProvider>
        <PlannerComponent />
    </PlannerProvider>
}