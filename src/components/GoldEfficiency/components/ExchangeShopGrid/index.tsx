import { useContext, useMemo } from "react";
import { MarketPricesContext } from "../../../../context/MarketPrices";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BuyItem } from "../../../../common/Market/BuyItem";
import { Box } from "@mui/material";
import { ItemEnum } from "../../../../common/Items/ItemEnum";
import { ItemAndNumber } from "./ItemAndNumber";
import { ItemQuantity } from "../../../../common/Items/ItemQuantity";
import { BasedExchangeShopProps, BuyItemArray } from "./types";
import { RaidsBuyItemList, GuildBuyItemList, SoloShopBuyItemList, ExpertShopBuyItemList } from "../../data";

const DEFAULT_SIZE = 80;
const DEFAULT_MARGIN = 20;

function BasedExchangeShopGrid(props: BasedExchangeShopProps) {
    const { calculateBuyItemGoldPerItemCost } = useContext(MarketPricesContext);
    const rows = useMemo(() => props.buyItemData.map((b: BuyItem, i: number) => ({ id: i, ...b })), []);

    const column_item: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'cost.name',
        headerName: 'Item',
        minWidth: DEFAULT_SIZE + DEFAULT_MARGIN,
        renderCell: (row) => <ItemAndNumber item={row.row.cost.name} quantity={row.row.cost.quantity} size={40} />
    }), [props.needShards]);

    const column_goldPerQuantity: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'column_goldPerQuantity',
        headerName: 'Value',
        minWidth: DEFAULT_SIZE + DEFAULT_MARGIN,
        valueGetter: (_, row) => calculateBuyItemGoldPerItemCost(row, props.needShards)[0].toFixed(1),
        renderCell: (row) => {
            const goldValues = calculateBuyItemGoldPerItemCost(row.row, props.needShards);
            return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                {goldValues.map((goldValue: number, i: number) => <ItemAndNumber key={i} item={ItemEnum.GOLD} quantity={(row.row.cost.quantity * goldValue).toFixed(1)} size={40} />)}
            </Box>
        }
    }), [props.needShards]);

    const column_goldPer1: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: '',
        headerName: 'Value / 1',
        minWidth: DEFAULT_SIZE + DEFAULT_MARGIN,
        type: "number",
        valueGetter: (_, row) => calculateBuyItemGoldPerItemCost(row, props.needShards)[0].toFixed(1),
        renderCell: (row) => {
            const valuePer1 = calculateBuyItemGoldPerItemCost(row.row, props.needShards);
            return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                {valuePer1.map((goldValue: number, i: number) => <ItemAndNumber key={i} item={ItemEnum.GOLD} quantity={goldValue.toFixed(2)} size={40} />)}
            </Box>
        }
    }), [props.needShards]);

    const column_type: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'type',
        headerName: 'Type',
        minWidth: DEFAULT_SIZE + DEFAULT_MARGIN,
    }), [props.needShards]);

    const column_boxGoldCost: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'goldCost',
        headerName: 'Box Bid Value',
        minWidth: DEFAULT_SIZE + DEFAULT_MARGIN,
        renderCell: (row) => {
            const valuePer1 = calculateBuyItemGoldPerItemCost(row.row, props.needShards);
            return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                {valuePer1.map((goldValue: number, i: number) =>
                    <ItemAndNumber key={i} item={ItemEnum.GOLD} quantity={(goldValue * (row.row?.bidBoxQuantity ?? 0)).toFixed(1)} size={40} />
                )}
            </Box>
        }
    }), [props.needShards]);

    const column_rewards: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'rewards',
        headerName: 'Rewards',
        minWidth: DEFAULT_SIZE * 3 + DEFAULT_MARGIN,
        renderCell: (row) => {
            const formattedValue: ItemQuantity[] = row.formattedValue;
            return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                {formattedValue.map((item: ItemQuantity, i: number) => <ItemAndNumber key={i} item={item.name} quantity={item.quantity} size={40} />)}
            </Box>
        }
    }), [props.needShards]);

    const column_gold_values: GridColDef<(BuyItemArray)[number]> = useMemo(() => ({
        field: 'gold_values',
        headerName: 'Gold Values per Token',
        minWidth: DEFAULT_SIZE * 3 + DEFAULT_MARGIN,
        renderCell: (row) => {
            const valuePer1 = calculateBuyItemGoldPerItemCost(row.row, props.needShards);
            return <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                {valuePer1.map((goldValue: number, i: number) => <ItemAndNumber key={i} item={ItemEnum.GOLD} quantity={goldValue.toFixed(1)} size={40} />)}
            </Box>
        }
    }), [props.needShards]);

    const ColumnDataStructureMap: Record<string, { column: GridColDef<(BuyItemArray)[number]> }> = {
        ["ITEM"]: { column: column_item },
        ["GOLD_PER_QUANTITY"]: { column: column_goldPerQuantity },
        ["GOLD_PER_1"]: { column: column_goldPer1 },
        ["TYPE"]: { column: column_type },
        ["BOX_GOLD_COST"]: { column: column_boxGoldCost },
        ["REWARDS"]: { column: column_rewards },
        ["GOLD_VALUES"]: { column: column_gold_values },
    };

    const generatedColumns = props.columnStructureData.map((columnData) => columnData.width ? { width: columnData.width, ...ColumnDataStructureMap[columnData.columnType].column } : ColumnDataStructureMap[columnData.columnType].column);

    return <DataGrid
        rows={rows}
        columns={generatedColumns}
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: props.buyItemData.length,
                },
            },
        }}
        pageSizeOptions={[props.buyItemData.length]}
        checkboxSelection
        disableRowSelectionOnClick
    />
}

export function RaidExchangeShopGrid({ needShards }: { needShards: boolean }) {
    const columnStructureData: Array<{ columnType: string, width?: number }> = [
        { columnType: "ITEM" },
        { columnType: "GOLD_PER_QUANTITY" },
        { columnType: "BOX_GOLD_COST" },
        { columnType: "TYPE" },
        { columnType: "REWARDS", width: DEFAULT_SIZE * 6 },
        { columnType: "GOLD_PER_1" },
    ];

    return <BasedExchangeShopGrid buyItemData={RaidsBuyItemList} columnStructureData={columnStructureData} needShards={needShards} />
}

export function GuildExchangeShopGrid({ needShards }: { needShards: boolean }) {
    const columnStructureData: Array<{ columnType: string, width?: number }> = [
        { columnType: "ITEM" },
        { columnType: "GOLD_PER_QUANTITY" },
        { columnType: "TYPE" },
        { columnType: "REWARDS", width: DEFAULT_SIZE * 3 },
        { columnType: "GOLD_PER_1" },
    ];

    return <BasedExchangeShopGrid buyItemData={GuildBuyItemList} columnStructureData={columnStructureData} needShards={needShards} />
}

export function SoloShopExchangeShopGrid({ needShards }: { needShards: boolean }) {
    const columnStructureData: Array<{ columnType: string, width?: number }> = [
        { columnType: "ITEM" },
        { columnType: "GOLD_PER_QUANTITY", width: 270 },
        { columnType: "TYPE" },
        { columnType: "REWARDS", width: DEFAULT_SIZE * 3 },
        { columnType: "GOLD_VALUES" },
    ];

    return <BasedExchangeShopGrid buyItemData={SoloShopBuyItemList} columnStructureData={columnStructureData} needShards={needShards} />
}

export function ExpertShopExchangeShopGrid({ needShards }: { needShards: boolean }) {
    const columnStructureData: Array<{ columnType: string, width?: number }> = [
        { columnType: "ITEM" },
        { columnType: "GOLD_PER_QUANTITY", width: 400 },
        { columnType: "TYPE" },
        { columnType: "REWARDS", width: 350 },
        { columnType: "GOLD_VALUES", width: 420 },
    ];

    return <BasedExchangeShopGrid buyItemData={ExpertShopBuyItemList} columnStructureData={columnStructureData} needShards={needShards} />
}
