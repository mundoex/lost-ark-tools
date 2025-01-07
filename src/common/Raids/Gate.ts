import { ItemQuantity } from "../Items/ItemQuantity";
import { Rewards } from "./Rewards";

export interface Gate{
    itemLevelRequired:number;
    rewards:Rewards;
    extraRewards:Rewards;
    bidBox?:ItemQuantity[];
}