import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext, useState } from "react";
import { MarketPricesContext } from "../../../../context/MarketPrices";
import { ItemAndNumber } from "../ExchangeShopGrid/ItemAndNumber";
import { ItemEnum } from "../../../../common/Items/ItemEnum";
import { Box, TextField, Typography } from "@mui/material";
import { RAIDS_INFO } from "../../../../constants/RaidsInfo";

const DEFAULT_ITEM_LEVEL = 1620;

export function RaidsExtraRewards({needShards}: {needShards:boolean}) {
    const { calculatePrices } = useContext(MarketPricesContext);
    const [itemLevel, setItemLevel] = useState(DEFAULT_ITEM_LEVEL);

    const rows = RAIDS_INFO.filter((raidInfo) => raidInfo.gates[0].itemLevelRequired >= itemLevel).map((raidInfo) => {
        return raidInfo.gates.map((gate, i) => {
            const honingMatsGoldValue = calculatePrices(gate.extraRewards.honingMatsRewards,needShards);
            return {
                id: `${raidInfo.name} Gate ${i + 1}`,
                name: `${raidInfo.name} Gate ${i + 1}`,
                honingMaterialsValue: honingMatsGoldValue,
                cost: gate.extraRewards.gold,
                rate: honingMatsGoldValue / gate.extraRewards.gold,
            }
        })
    }).flat();

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'cost',
            headerName: 'Cost',
            type: 'number',
            width: 110,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.cost} size={40} />
        },
        {
            field: 'honingMaterialsValue',
            headerName: 'Materials Value',
            type: 'number',
            width: 110,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.honingMaterialsValue.toFixed(0)} size={40} />
        },
        {
            field: 'rate',
            headerName: 'Rate',
            type: 'number',
            width: 90,
            renderCell: (row) => <div style={{ color: row.row.rate > 1 ? "green" : "red" }}>{(row.row.rate * 100).toFixed(1)}%</div>
        },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h6">Item Level Filter</Typography>
                <TextField
                    variant="outlined"
                    size="small"
                    value={itemLevel}
                    onChange={(e) => setItemLevel(parseInt(e.target.value))}
                    sx={{
                        width: 70,
                        minWidth: 50,
                    }}
                />
            </Box>
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