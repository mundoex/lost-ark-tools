import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { MarketPricesContext } from "../../../../context/MarketPrices";
import { ItemAndNumber } from "../ExchangeShopGrid/ItemAndNumber";
import { ItemEnum } from "../../../../common/Items/ItemEnum";
import { Box, Typography } from "@mui/material";
import { GUARDIANS_RAIDS_INFO } from "../../../../constants/GuardianRaidsInfo";

export function GuardianValue() {
    const { calculatePrices } = useContext(MarketPricesContext);

    const rows = GUARDIANS_RAIDS_INFO.map((raidInfo) => {
        return raidInfo.gates.reduce((acc, cur) => {
            acc.id=raidInfo.name;
            acc.name=raidInfo.name;
            acc.gold+=calculatePrices(cur.rewards.honingMatsRewards);
            return acc;
        }, {id: "", name: "", gold: 0});
    });

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 90,
        },
        {
            field: 'gold',
            headerName: 'Daily',
            type: 'number',
            width: 100,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.gold.toFixed(0)} size={40} />
        },
        {
            field: 'goldOnlyRested',
            headerName: 'Every Rested',
            type: 'number',
            width: 130,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={(row.row.gold*(2/3)).toFixed(0)} size={40} />
        },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography variant="h6" alignSelf={"center"}>Calculated gold value per day when doing guardians</Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: rows.length,
                        },
                    },
                }}
                pageSizeOptions={[rows.length]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}