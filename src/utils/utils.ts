import { ItemEnum } from "../common/Items/ItemEnum";
import { ItemQuantity } from "../common/Items/ItemQuantity";
import { ItemsList } from "../constants/ItemList";

export function filterObjectByKeys<T extends Record<string, any>>(obj: T, keys: (keyof T)[]): Partial<T> {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Partial<T>);
}

export function formatNumber(num: number): string {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "m"; // millions
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "k"; // thousands
    }
    return num.toString(); // below thousands, return as-is
}

export function isShardFunction(item:ItemEnum){
    return item.toLowerCase().includes("shard");
}

//calculates the multiplier for shard per gold if the player needs it and the item is a shard
export function calculateShardMultiplier(isShard:boolean, needShards:boolean){
    return (isShard && needShards) || (!isShard && !needShards) || (!isShard && needShards) ? 1 : 0;
} 

export function isTier4(item:ItemEnum){
    return ItemsList[item].tier === 4;
}

export function convertToT4(itemQuantityArr:ItemQuantity[]): ItemQuantity[] {
    const conversionTable: { [key in string]: ItemEnum } = {
        [ItemEnum.REFINED_PROTECTION_STONE]: ItemEnum.DESTINY_GUARDIAN_STONE,
        [ItemEnum.PROTECTION_STONE]: ItemEnum.REFINED_PROTECTION_STONE,
        [ItemEnum.CRYSTALLIZED_GUARDIAN_STONE]: ItemEnum.PROTECTION_STONE,

        [ItemEnum.REFINED_OBLITERATION_STONE]: ItemEnum.DESTINY_DESTRUCTION_STONE,
        [ItemEnum.OBLITERATION_STONE]: ItemEnum.REFINED_OBLITERATION_STONE,
        [ItemEnum.CRYSTALLIZED_DESTRUCTION_STONE]: ItemEnum.OBLITERATION_STONE,

        [ItemEnum.RADIANT_HONOR_LEAPSTONE]: ItemEnum.DESTINY_DESTRUCTION_STONE,
        [ItemEnum.MARVELOUS_HONOR_LEAPSTONE]: ItemEnum.RADIANT_HONOR_LEAPSTONE,
        [ItemEnum.GREAT_HONOR_LEAPSTONE]: ItemEnum.MARVELOUS_HONOR_LEAPSTONE,
    }
    let found = false;
    const items = itemQuantityArr.map((item)=>{
        const convertedItem = conversionTable[item.name];
        found = !found ? Boolean(convertedItem) : found;
        if(convertedItem){
            return {name:conversionTable[item.name], quantity:item.quantity/5}
        }else{
            return item;
        }
    });

    return !found ? items : convertToT4(items);
}

export function gemToLvl1s(gemLvl:number):number{
    return Math.pow(3, gemLvl-1)
}

export function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}