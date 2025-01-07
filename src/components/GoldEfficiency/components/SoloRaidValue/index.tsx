import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext, useMemo } from "react";
import { MarketPricesContext } from "../../../../context/MarketPrices";
import { ItemAndNumber } from "../ExchangeShopGrid/ItemAndNumber";
import { ItemEnum } from "../../../../common/Items/ItemEnum";
import { Box } from "@mui/material";
import { RaidRow } from "./types";
import { RAIDS_INFO } from "../../../../constants/RaidsInfo";
import { convertToT4 } from "../../../../utils/utils";

export function SoloRaidValue({needShards}: {needShards:boolean}) {
    const { calculatePrices, calculateSoloTokenAverageGoldValue } = useContext(MarketPricesContext);
    const soloTokenAvgValue = useMemo(() => calculateSoloTokenAverageGoldValue(), [calculateSoloTokenAverageGoldValue]);
    const defaultValues: RaidRow = {
        id: "", name: "", honingMaterialsValue: 0, soloTokens: 0,
        t4HoningMaterialsValue: 0
    };
    const rows = RAIDS_INFO.filter((raidInfo) => raidInfo.name.includes("Solo")).map((raidInfo) => {
        return raidInfo.gates.reduce((acc, cur) => {
            const honingMatsGoldValue = calculatePrices(cur.extraRewards.honingMatsRewards,needShards);
            const honingMatsT4GoldValue = calculatePrices(convertToT4(cur.extraRewards.honingMatsRewards),needShards);
            acc.id=raidInfo.name;
            acc.t4HoningMaterialsValue+=honingMatsT4GoldValue;
            acc.name=raidInfo.name;
            acc.honingMaterialsValue+=honingMatsGoldValue;
            acc.soloTokens+=cur.rewards.soloTokens ?? 0;
            return acc;
        }, {...defaultValues} as RaidRow);
    });

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'honingMaterialsValue',
            headerName: 'Materials Value',
            type: 'number',
            width: 150,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.honingMaterialsValue.toFixed(0)} size={40} />
        },
        {
            field: 't4HoningMaterialsValue',
            headerName: 'Converted T4 Mats',
            type: 'number',
            width: 150,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.t4HoningMaterialsValue.toFixed(0)} size={40} />
        },
        {
            field: 'soloTokens',
            headerName: 'Solo Tokens',
            type: 'number',
            width: 100,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.SOLO_TOKEN} quantity={row.row.soloTokens} size={40} />
        },
        {
            field: 'fullValueT3',
            headerName: 'Value',
            type: 'number',
            width: 150,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={(row.row.soloTokens*soloTokenAvgValue+row.row.honingMaterialsValue).toFixed(0)} size={40} />
        },
        {
            field: 'fullValueT4',
            headerName: 'Converted To T4',
            type: 'number',
            width: 150,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={(row.row.soloTokens*soloTokenAvgValue+row.row.t4HoningMaterialsValue).toFixed(0)} size={40} />
        },
    ];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content' }}>
                <ItemAndNumber item={ItemEnum.SOLO_TOKEN} quantity={1} size={40} />
                <ItemAndNumber item={ItemEnum.GOLD} quantity={calculateSoloTokenAverageGoldValue().toFixed(1)} size={40} />
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