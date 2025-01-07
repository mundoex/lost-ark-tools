import { createContext, useEffect } from "react";
import usePersistedState from "@utilityjs/use-persisted-state";
import { ItemEnum } from "../common/Items/ItemEnum";
import { MarketPriceData } from "../common/Market/MarketPriceData";
import { BuyItem } from "../common/Market/BuyItem";
import { BuyItemType } from "../common/Market/BuyItemType";
import { calculateShardMultiplier, isShardFunction, isTier4 } from "../utils/utils";
import { ItemQuantity } from "../common/Items/ItemQuantity";
import { SoloShopBuyItemList } from "../components/GoldEfficiency/data";
import { ItemsList } from "../constants/ItemList";

const MARKET_PRICES_SAVE_KEY="marketPricesSaveKey";

interface IMarketPriceContext{
    marketPrices:MarketPriceData[];
    setPrice:(name:string, num:number) => void;
    getPricePerSingle:(name:string, needShards?:boolean) => number;
    calculatePrices:(itemQuantityArr:ItemQuantity[], needShards?:boolean) => number;
    calculateBuyItemGoldPerItemCost:(box: BuyItem, needShards: boolean) => number[];
    calculateSoloTokenAverageGoldValue:() => number;
    calculateBlueCrystalGoldValue:() => number;
    calculateMariPriceVsMarketPrice:(box: BuyItem) => {marisPrice:number, marketPrice:number};
}

const DEFAULT_ITEMS: MarketPriceData[] = [
    {name: ItemEnum.DESTINY_GUARDIAN_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.DESTINY_DESTRUCTION_STONE,  price: 0, bundleSize: 10},
    {name: ItemEnum.DESTINY_LEAPSTONE, price: 0},
    {name: ItemEnum.ABIDOS_FUSION_MATERIAL, price: 0},

    {name: ItemEnum.GLACIERS_BREATH, price: 0},
    {name: ItemEnum.LAVAS_BREATH, price: 0},

    {name: ItemEnum.DESTINY_SHARD_POUCH_S, price: 0},
    {name: ItemEnum.DESTINY_SHARD_POUCH_M, price: 0},
    {name: ItemEnum.DESTINY_SHARD_POUCH_L, price: 0},


    {name: ItemEnum.METALLURGY_HELLFIRE_11_14, price: 0},
    {name: ItemEnum.TAILORING_HELLFIRE_11_14, price: 0},
  
    {name: ItemEnum.REFINED_PROTECTION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.PROTECTION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.CRYSTALLIZED_GUARDIAN_STONE, price: 1, bundleSize: 10},

    {name: ItemEnum.REFINED_OBLITERATION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.OBLITERATION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE, price: 1, bundleSize: 10},

    {name: ItemEnum.RADIANT_HONOR_LEAPSTONE, price: 0},
    {name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, price: 0},
    {name: ItemEnum.GREAT_HONOR_LEAPSTONE, price: 0},

    {name: ItemEnum.PRIME_OREHA_FUSION_MATERIAL, price: 0},
    {name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, price: 0},
    {name: ItemEnum.OREHA_FUSION_MATERIAL, price: 0},

    {name: ItemEnum.SOLAR_GRACE, price: 0},
    {name: ItemEnum.SOLAR_BLESSING, price: 0},
    {name: ItemEnum.SOLAR_PROTECTION, price: 0},

    {name: ItemEnum.HONOR_SHARD_POUCH_S, price: 0},
    {name: ItemEnum.HONOR_SHARD_POUCH_M, price: 0},
    {name: ItemEnum.HONOR_SHARD_POUCH_L, price: 0},

    {name: ItemEnum.METALLURGY_HELLFIRE_11_14, price: 0},
    {name: ItemEnum.TAILORING_HELLFIRE_11_14, price: 0},
    {name: ItemEnum.METALLURGY_DECAY_16_19, price: 0},
    {name: ItemEnum.TAILORING_DECAY_16_19, price: 0},
    {name: ItemEnum.METALLURGY_DECAY_13_15, price: 0},
    {name: ItemEnum.TAILORING_DECAY_13_15, price: 0},

    {name: ItemEnum.BLUE_CRYSTAL, price: 0, bundleSize: 95},
    {name: ItemEnum.RELIC_ENGRAVING, price: 0},
    {name: ItemEnum.LEGENDARY_ENGRAVING, price: 0},
    {name: ItemEnum.GOLD_BAR_BOUND, price: 1000},
    {name: ItemEnum.TRANSCENDENCE_TICKET_ARMOR, price: 825},
    {name: ItemEnum.TRANSCENDENCE_TICKET_WEAPON, price: 2200},
];

export const MarketPricesContext=createContext<IMarketPriceContext>({
    marketPrices: DEFAULT_ITEMS,
    setPrice:(_:string, __:number) => null,
    getPricePerSingle:(_:string, __?:boolean) => 0,
    calculateBuyItemGoldPerItemCost:(_:BuyItem, __?:boolean) => [0],
    calculateSoloTokenAverageGoldValue:() => 0,
    calculateBlueCrystalGoldValue:() => 0,
    calculateMariPriceVsMarketPrice:(_:BuyItem) => {return {marisPrice:0, marketPrice:0};},
    calculatePrices:(_)=>0,
});

function loadMarketPrices() : MarketPriceData[]{
    const save = localStorage.getItem(MARKET_PRICES_SAVE_KEY);
    if(save){
        let parsedSave:MarketPriceData[] = JSON.parse(save).state;
        const allSavedItemNames = parsedSave.map((item)=>item.name);
        const allDefaultItemNames = DEFAULT_ITEMS.map((item)=>item.name);
        const missingItems = DEFAULT_ITEMS.filter((item)=>!allSavedItemNames.includes(item.name));
        missingItems.forEach((item)=>parsedSave.push(item));
        parsedSave = parsedSave.filter((item)=>allDefaultItemNames.includes(item.name));
        return parsedSave;
    }
    return DEFAULT_ITEMS;
}

export function MarketPricesProvider({children}:{children?:JSX.Element|JSX.Element[]}){
    const [marketPrices, setMarketPrices] = usePersistedState<MarketPriceData[]>(DEFAULT_ITEMS, {name: MARKET_PRICES_SAVE_KEY});
    
    useEffect(()=>{
        setMarketPrices(loadMarketPrices());
    },[]);

    const setPrice=(name:string, price:number)=>{
        const index = marketPrices.findIndex((v)=>v.name === name);
        if(index>=0){
            marketPrices[index].price=price;
            setMarketPrices(Array.from(marketPrices));
        }
    }

    const getDestinyShardPricePer1 = ()=>{
        const destinyShardPouchPrice = marketPrices.find((v)=>v.name===ItemEnum.DESTINY_SHARD_POUCH_S)?.price ?? 0;
        return destinyShardPouchPrice / 1000;
    }

    const getPricePerSingle = (name:string, needShards?:boolean)=>{
        if(needShards && isShardFunction(name as ItemEnum) && ItemsList[name as ItemEnum].tier === 4) return getDestinyShardPricePer1();
        const item = marketPrices.find((v) => v.name === name);
        if(item) return item.bundleSize ? item.price / item.bundleSize : item.price;
        return 0;
    };

    function calculateBuyItemGoldPerItemCost(box: BuyItem, needShards: boolean) : number[]{
        const prices = box.rewards.map((entry) => {
            const isShard = isShardFunction(entry.name);
            const shardsMult = calculateShardMultiplier(isShard, needShards);
            const price = getPricePerSingle(entry.name) * entry.quantity * shardsMult;
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
    }
    
    function calculateSoloTokenAverageGoldValue(){
        const bestValuePer1Arr=SoloShopBuyItemList.reduce((acc, cur)=>{
            const items = cur.rewards.map((r)=>r.name);
            const isT4 = items.find((item)=>isTier4(item));
            if(isT4){
                const valuePer1 = calculateBuyItemGoldPerItemCost(cur, false);
                acc.push(valuePer1[valuePer1.length-1]);
            }
            return acc;
        }, new Array<number>());
        return bestValuePer1Arr.reduce((a,b)=>a+b)/bestValuePer1Arr.length;
    }

    function calculateBlueCrystalGoldValue(){
        const BLUE_CRYSTAL_BUNDLE_SIZE = 95;
        const blueCrystal = marketPrices.find((v)=>v.name===ItemEnum.BLUE_CRYSTAL);
        if(blueCrystal){
            return blueCrystal.price /( blueCrystal?.bundleSize ?? BLUE_CRYSTAL_BUNDLE_SIZE);
        }
        return 0;
    }

    function calculateMariPriceVsMarketPrice(box: BuyItem){
        const rewardQuantity = box.rewards[0].quantity;
        const rewardName = box.rewards[0].name;
        const marketPrice = (marketPrices.find((v)=>v.name===rewardName)?.price ?? 0)*rewardQuantity;
        const marisPrice = box.cost.quantity * calculateBlueCrystalGoldValue();
        return {marisPrice, marketPrice};
    }

    function calculatePrices(itemQuantityArr:ItemQuantity[], needShards?:boolean):number{
        return itemQuantityArr.reduce((acc, cur)=>{
            const price = getPricePerSingle(cur.name, needShards) * cur.quantity;
            return acc + price;
        }, 0);
    }

    const exportValue:IMarketPriceContext={
        marketPrices,
        setPrice,
        getPricePerSingle,
        calculateBuyItemGoldPerItemCost,
        calculateSoloTokenAverageGoldValue,
        calculateBlueCrystalGoldValue,
        calculateMariPriceVsMarketPrice,
        calculatePrices
    }

    return <MarketPricesContext.Provider value={exportValue}>
        {children}
    </MarketPricesContext.Provider>;
}
