import { Skill } from "./Skill";

export interface Entity {
    arkPassiveActive: boolean;
    arkPassiveData: any;
    characterId: number;
    class: string;
    classId: number;
    currentHp: number;
    damageStats: DamageStats;
    engravingData:string[];
    entityType:string;
    gearScore:number;
    id:number;
    isDead:boolean;
    maxHp:number;
    name:string;
    npcId:number;
    skillStats:{ backAttacks:number, casts: number, counters:number, crits:number, frontAttacks:number, hits:number}
    skills:{[key: number]: Skill};
    spec:string;
}