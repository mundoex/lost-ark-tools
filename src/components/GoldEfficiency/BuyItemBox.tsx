import { useContext } from "react";
import { MarketPricesContext } from "../../context/MarketPrices";
import { ItemEnum } from "../../common/ItemEnum";
import { BuyItem } from "../../common/BuyItem";
import { Box, Typography } from "@mui/material";
import { ItemAndNumber } from "./ItemAndNumber";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { BuyItemType } from "../../common/BuyItemType";

function isShardFunction(item:ItemEnum){
    return item.includes("Shard");
}

function calculateShardMultiplier(isShard:boolean, needShards:boolean){
    return (isShard && needShards) || (!isShard && !needShards) || (!isShard && needShards) ? 1 : 0;
} 

interface BuyItemBoxProps{
    buyItem:BuyItem;
    needShards:boolean;
}

export function BuyItemBox(props:BuyItemBoxProps){
    const { getPricePerSingle } = useContext(MarketPricesContext);

    const calculateBuyItemGoldPerItemCost = (box: BuyItem, needShards: boolean) : number[] =>  {
        const prices = box.rewards.map((entry) => {
            const isShard = isShardFunction(entry.item);
            const shardsMult = calculateShardMultiplier(isShard, needShards);
            const price = getPricePerSingle(entry.item) * entry.quantity * shardsMult;
            return price;
        });

        const pricesSum = prices.reduce((a, b) => a + b, 0);
        switch(box.type){
            case BuyItemType.CHANCE:
                return [(pricesSum / prices.length) / box.cost.quantity];
            case BuyItemType.SELECTOR:
                return prices.map((p)=>p/box.cost.quantity);
            case BuyItemType.NORMAL:
            default:
                return [pricesSum / box.cost.quantity];
        }
    };

    const valuePer1 = calculateBuyItemGoldPerItemCost(props.buyItem, props.needShards);
    return <Box sx={{
                display: 'flex',
                flexDirection:"column",
                width:"fit-content",
                alignItems: 'flex-start',
                backgroundColor: '#1e1e1e',
                borderRadius: 1,
                color: '#ffffff',
              }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', background:"#717171a1", width:"100%"}}>
                    {props.buyItem.type===BuyItemType.CHANCE ? "Chance of items" : null}
                    {props.buyItem.type===BuyItemType.NORMAL ? "Items" : null}
                    {props.buyItem.type===BuyItemType.SELECTOR ? "Selector" : null}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection:'row',
                    justifyItems:'flex-start',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#1e1e1e',
                    padding: 0.5,
                }}>
                    <ItemAndNumber item={props.buyItem.cost.item} quantity={props.buyItem.cost.quantity}/>
                    <ArrowRightAltIcon/>
                    {props.buyItem.rewards.map((r,i)=> <ItemAndNumber key={`${r.item}${i}`} item={r.item} quantity={r.quantity} marginLeft={-0.5} />)}
                </Box>
                <Box sx={{ display: 'flex', flexDirection:'row', padding: 0.5,}}>
                    <ItemAndNumber item={props.buyItem.cost.item} quantity={1}/>
                    <ArrowRightAltIcon/>
                    {valuePer1.map((v)=><ItemAndNumber item={ItemEnum.GOLD} quantity={v.toFixed(2)}/>)}
                </Box>
                {props.buyItem?.bidBoxQuantity && <Box sx={{display: 'flex', flexDirection:'row', padding: 0.5,}}>
                    <ItemAndNumber item={props.buyItem.cost.item} quantity={props.buyItem.bidBoxQuantity}/>
                    <ArrowRightAltIcon/>
                    {valuePer1.map((v)=><ItemAndNumber item={ItemEnum.GOLD} quantity={(v*(props?.buyItem?.bidBoxQuantity ?? 0)).toFixed(2)}/>)}
                </Box>}
                {props.buyItem?.type===BuyItemType.SELECTOR && <Box sx={{display: 'flex', flexDirection:'row', padding: 0.5}}>
                    <ItemAndNumber item={props.buyItem.cost.item} quantity={props.buyItem.cost.quantity}/>
                    <ArrowRightAltIcon/>
                    {valuePer1.map((v)=><ItemAndNumber item={ItemEnum.GOLD} quantity={(v*props?.buyItem.cost.quantity).toFixed(2)}/>)}
                </Box>}
          </Box> 
}