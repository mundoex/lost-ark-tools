import { ItemQuantity } from "../Items/ItemQuantity";

export interface Rewards {
    gold:number;
    soloTokens?:number;
    honingMatsRewards:ItemQuantity[];
    materialRewards:ItemQuantity[];
}