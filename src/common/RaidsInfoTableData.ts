import { Material } from "./Material";
import { Reward } from "./Rewards";

export interface RaidsInfoTableData {
    name: string,
    gold: number;
    materials: Material[];
    boxes: Reward;
    bidBox?: Material[];
    totalRaidGold?:number;
}