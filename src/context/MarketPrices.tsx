import { createContext, useEffect } from "react";
import usePersistedState from "@utilityjs/use-persisted-state";
import { ItemEnum } from "../common/ItemEnum";
import { MarketPriceData } from "../common/MarketPriceData";

const MARKET_PRICES_SAVE_KEY="marketPricesSaveKey";

interface IMarketPriceContext{
    marketPrices:MarketPriceData[];
    setPrice:(name:string, num:number)=>void;
    getPricePerSingle:(name:string) => number;
}

const DEFAULT_ITEMS: MarketPriceData[] = [
    {name: ItemEnum.DESTINY_GUARDIAN_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.DESTINY_DESTRUCTION_STONE,  price: 0, bundleSize: 10},
    {name: ItemEnum.DESTINY_LEAPSTONE, price: 0},
    {name: ItemEnum.DESTINY_SHARD_POUCH_S, price: 0},
    {name: ItemEnum.DESTINY_SHARD_POUCH_M, price: 0},
    {name: ItemEnum.DESTINY_SHARD_POUCH_L, price: 0},
    {name: ItemEnum.GLACIERS_BREATH, price: 0},
    {name: ItemEnum.LAVAS_BREATH, price: 0},
    {name: ItemEnum.ABIDOS_FUSION_MATERIAL, price: 0},
    {name: ItemEnum.METALLURGY_HELLFIRE_11_14, price: 0},
    {name: ItemEnum.TAILORING_HELLFIRE_11_14, price: 0},
  
    {name: ItemEnum.REFINED_PROTECTION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.REFINED_OBLITERATION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.RADIANT_HONOR_LEAPSTONE, price: 0},
    {name: ItemEnum.HONOR_SHARD_POUCH_S, price: 0},
    {name: ItemEnum.HONOR_SHARD_POUCH_M, price: 0},
    {name: ItemEnum.HONOR_SHARD_POUCH_L, price: 0},
    {name: ItemEnum.PRIME_OREHA_FUSION_MATERIAL, price: 0},
    {name: ItemEnum.SOLAR_GRACE, price: 0},
    {name: ItemEnum.SOLAR_BLESSING, price: 0},
    {name: ItemEnum.SOLAR_PROTECTION, price: 0},
    {name: ItemEnum.METALLURGY_DECAY_16_19, price: 0},
    {name: ItemEnum.TAILORING_DECAY_16_19, price: 0},
    {name: ItemEnum.METALLURGY_DECAY_13_15, price: 0},
    {name: ItemEnum.TAILORING_DECAY_13_15, price: 0},
  
    {name: ItemEnum.PROTECTION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.OBLITERATION_STONE, price: 0, bundleSize: 10},
    {name: ItemEnum.MARVELOUS_HONOR_LEAPSTONE, price: 0},
    {name: ItemEnum.SUPERIOR_OREHA_FUSION_MATERIAL, price: 0},
  
    {name: ItemEnum.BLUE_CRYSTAL, price: 0, bundleSize: 95},
    {name: ItemEnum.RELIC_ENGRAVING, price: 0},
    {name: ItemEnum.LEGENDARY_ENGRAVING, price: 0},
    {name: ItemEnum.GOLD_BAR_BOUND, price: 1000},
];

export const MarketPricesContext=createContext<IMarketPriceContext>({
    marketPrices: DEFAULT_ITEMS,
    setPrice:(_:string, __:number) => null,
    getPricePerSingle:(_:string) => 0,
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

    const getPricePerSingle = (name:string)=>{
        const item = marketPrices.find((v) => v.name === name);
        if(item){
            return item.bundleSize ? item.price / item.bundleSize : item.price;
        }
        return 0;
    };

    const exportValue:IMarketPriceContext={
        marketPrices,
        setPrice,
        getPricePerSingle,
    }

    return <MarketPricesContext.Provider value={exportValue}>
        {children}
    </MarketPricesContext.Provider>;
}
