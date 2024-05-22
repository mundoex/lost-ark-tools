import { Material } from "./Material";
import { Reward } from "./Rewards";

export interface Gate{
    itemLevelRequired:number;
    rewards:Reward;
    box:Reward;
    bidBox?:Material[];
}