import { PlannerCharacter } from "./PlannerCharacter";

export interface PlannerPlayer{
    name:string;
    color:string;
    roster:PlannerCharacter[];
}
