import { DaysOfWeek } from "./DaysOfWeek";

export interface RaidPlan{
    raidName:string;
    raidIndex:number;
    dayOfWeek:DaysOfWeek;
    time:string,
    parties: {name:string, charName:string}[][];
    checked:boolean;
}
