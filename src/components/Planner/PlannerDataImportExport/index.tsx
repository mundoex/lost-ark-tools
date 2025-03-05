import { useContext, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { PlannerContext } from "../../../context/PlannerContext";

export function PlannerDataImportExport() {
    const plannerContext = useContext(PlannerContext);
    const [playerDataString, setPlayerDataString] = useState('');
    const [raidPlansDataString, setRaidPlansDataString] = useState('');

    const handlePlayerDataStringChange = (event: any) => setPlayerDataString(event.target.value);
    const handleRaidPlansDataStringChange = (event: any) => setRaidPlansDataString(event.target.value);
    const handleImportPlayerData = () => {
        plannerContext.importPlayerData(playerDataString);
        alert('Players Data imported');
    };
    const handleImportRaidPlansData = () => {
        plannerContext.importRaidsPlansData(raidPlansDataString);
        alert('Raid Plans Data imported');
    };

    const handleCopyPlayersDataToClipboard = () => {
        const playerDataString = JSON.stringify(plannerContext.playersPlannerData);
        navigator.clipboard.writeText(playerDataString).then(() => {
            alert('Data copied to clipboard');
        }).catch((err: Error) => {
            alert('Failed to copy player data: ' + err.message);
        });
    };

    const handleCopyRaidsPlansDataToClipboard = () => {
        const raidPlansDataString = JSON.stringify(plannerContext.raidsPlannerData);
        navigator.clipboard.writeText(raidPlansDataString).then(() => {
            alert('Data copied to clipboard');
        }).catch((err: Error) => {
            alert('Failed to copy player data: ' + err.message);
        });
    };

    return (<Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px", gap: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px", gap: 2 }}>
            <TextField
                label="Player Data"
                variant="outlined"
                value={playerDataString}
                onChange={handlePlayerDataStringChange}
                fullWidth
                multiline // Enables multiline input (textarea behavior)
                rows={4} // Number of visible rows
            />
            <Button variant="outlined" color="primary" onClick={handleImportPlayerData} sx={{ minWidth: '125px' }}>
                Import Player Data
            </Button>
            <Button variant="outlined" color="primary" onClick={handleCopyPlayersDataToClipboard} sx={{ minWidth: '150px' }}>
                Copy Player Data Export to Clipboard
            </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content', marginTop: "10px", gap: 2 }}>
            <TextField
                label="Plans Data"
                variant="outlined"
                value={raidPlansDataString}
                onChange={handleRaidPlansDataStringChange}
                fullWidth
                multiline // Enables multiline input (textarea behavior)
                rows={4} // Number of visible rows
            />
            <Button variant="outlined" color="primary" onClick={handleImportRaidPlansData} sx={{ minWidth: '125px' }}>
                Import Plans Data
            </Button>
            <Button variant="outlined" color="primary" onClick={handleCopyRaidsPlansDataToClipboard} sx={{ minWidth: '150px' }}>
                Copy Plans Data Export to Clipboard
            </Button>
        </Box>
        <TextField
            label="API Link"
            variant="outlined"
            value={plannerContext.apiIp}
            onChange={(e) => plannerContext.setApiIp(e.target.value)}
        />
        <Typography variant="caption" sx={{ color: 'text.secondary', marginTop: -1 }}>
            {`(Required for import roster)`}
        </Typography>
    </Box>)
}