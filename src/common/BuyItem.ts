import { BuyItemType } from "./BuyItemType";
import { ItemEnum } from "./ItemEnum";

export interface BuyItem{
    type:BuyItemType;
    cost:{item:ItemEnum, quantity:number};
    rewards:Array<{item:ItemEnum, quantity:number}>;
    bidBoxQuantity?:number;
}