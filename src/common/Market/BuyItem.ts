import { ItemQuantity } from "../Items/ItemQuantity";
import { BuyItemType } from "./BuyItemType";

export interface BuyItem{
    type:BuyItemType;
    cost:ItemQuantity;
    rewards:ItemQuantity[];
    bidBoxQuantity?:number;
}