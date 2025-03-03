import { PlannerPlayer } from "./PlannerPlayer";
import { RaidPlan } from "./RaidPlan";

export interface PlannerPlayersData{
    players:PlannerPlayer[];
    lastEditedAt:number;
}

export interface PlannerRaidsData{
    raidPlans:RaidPlan[];
    lastEditedAt:number;
}
