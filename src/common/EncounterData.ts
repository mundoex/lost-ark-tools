import { EncounterDamageStats } from "./EncounterDamageStats";
import { Entity } from "./Entity";

export interface EncounterData {
    id:number;
    lastCombatPacket: number;
    fightStart: number;
    localPlayer: string;
    bossOnlyDamage: boolean;
    currentBossName: string;
    difficulty: string;
    duration: number;
    encounterDamageStats: EncounterDamageStats;
    entities:{[key: number]: Entity};
}