import { ItemQuantity } from "../../../../common/Items/ItemQuantity";
import { BuyItem } from "../../../../common/Market/BuyItem";
import { BuyItemType } from "../../../../common/Market/BuyItemType";

export type BuyItemArray = { type: BuyItemType; cost: ItemQuantity; rewards: ItemQuantity[]; bidBoxQuantity?: number; id: number; }[];

export interface BasedExchangeShopProps {
    columnStructureData: Array<{columnType:string, width?:number}>;
    buyItemData:BuyItem[];
    needShards:boolean;
}