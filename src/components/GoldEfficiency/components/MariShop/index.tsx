import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { BuyItem } from '../../../../common/Market/BuyItem';
import { useContext } from 'react';
import { MarketPricesContext } from '../../../../context/MarketPrices';
import { ItemAndNumber } from '../ExchangeShopGrid/ItemAndNumber';
import { ItemEnum } from '../../../../common/Items/ItemEnum';
import { MariShopBuyItemList } from '../../data';

const PHEON_QUANTITY=100;
const PHEON_BLUE_CRYSTAL_QUANTITY=850;

export default function MariShop() {
    const { calculateMariPriceVsMarketPrice, calculateBlueCrystalGoldValue } = useContext(MarketPricesContext);
    const blueCrystal1=calculateBlueCrystalGoldValue();
    const rows = MariShopBuyItemList.map((buyItem: BuyItem, i: number) => {
        const result = calculateMariPriceVsMarketPrice(buyItem);
        const reward = buyItem.rewards[0];
        return {
            id: i + 1,
            item: reward.name,
            quantity: reward.quantity,
            blueCrystalCost: buyItem.cost.quantity,
            mariGoldPrice: result.marisPrice,
            marketGoldPrice: result.marketPrice,
            rate: result.marketPrice / result.marisPrice,
        };
    });

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
            field: 'item',
            headerName: 'Item',
            width: 90,
            renderCell: (row) => <ItemAndNumber item={row.row.item} quantity={row.row.quantity} size={40} />
        },
        {
            field: 'blueCrystalCost',
            headerName: 'Crystal Cost',
            type: 'number',
            width: 110,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.BLUE_CRYSTAL} quantity={row.row.blueCrystalCost} size={40} />
        },
        {
            field: 'mariGoldPrice',
            headerName: 'Maris Price',
            type: 'number',
            width: 110,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.mariGoldPrice.toFixed(0)} size={40} />
        },
        {
            field: 'marketGoldPrice',
            headerName: 'Market Price',
            type: 'number',
            width: 110,
            renderCell: (row) => <ItemAndNumber item={ItemEnum.GOLD} quantity={row.row.marketGoldPrice.toFixed(0)} size={40} />
        },
        {
            field: 'rate',
            headerName: 'Rate',
            type: 'number',
            width: 90,
            renderCell: (row) => <div style={{ color: row.row.rate > 1 ? "green" : "red" }}>{(row.row.rate*100).toFixed(1)}%</div>
        },
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: "10px" }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content' }}>
                <ItemAndNumber item={ItemEnum.BLUE_CRYSTAL} quantity={1} size={40} />
                <ItemAndNumber item={ItemEnum.GOLD} quantity={blueCrystal1.toFixed(1)} size={40} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: 'fit-content' }}>
                <ItemAndNumber item={ItemEnum.BLUE_CRYSTAL} quantity={PHEON_BLUE_CRYSTAL_QUANTITY} size={40} />
                <ItemAndNumber item={ItemEnum.PHEON} quantity={PHEON_QUANTITY} size={40} />
                <ItemAndNumber item={ItemEnum.GOLD} quantity={((blueCrystal1*PHEON_BLUE_CRYSTAL_QUANTITY)/PHEON_QUANTITY).toFixed(0)} size={40} />
                <ItemAndNumber item={ItemEnum.PHEON} quantity={1} size={40} />
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: MariShopBuyItemList.length,
                        },
                    },
                }}
                pageSizeOptions={[MariShopBuyItemList.length]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
