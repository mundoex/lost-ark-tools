import { Gate } from "./Gate";

export interface RaidInfo {
    name: string;
    partySize: number;
    gates: Gate[];
}