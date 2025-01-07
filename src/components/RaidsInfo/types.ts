import { ItemQuantity } from "../../common/Items/ItemQuantity";

export interface RaidsInfoTableData {
    name:string,
    gold:number;
    materials:ItemQuantity[];
    extraRewardsGold:number;
    extraRewardsMaterials:ItemQuantity[];
    bidBox?:ItemQuantity[];
    totalRaidGold?:number;
    itemLevel:number;
}

export interface HeadCell {
    disablePadding: boolean;
    id: string;
    label: string;
    numeric: boolean;
  }