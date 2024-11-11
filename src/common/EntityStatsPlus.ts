export interface EntityStatsPlus{
    id:number;
    party: number;
    raid: string;
    totalPlayers:number;
    name: string;
    class: string; 
    isSupport: boolean;
    totalDmg: number;
    dps: number;
    dpsPercent: number;
    dmgTaken: number; 
    ilvl: number; 
    gems: {tier:number, lvl:number, type:string}[]; 
    counters: number; 
    deaths: number; 
    dmgBuffedBySupportPercent:number;
    dmgBuffedBySupportIdentityPercent:number;
    dmgShielded: number;
    dmgShieldedPercent: number; 
    dmgTakenPercent:number;
    dmgAbsorbedPercent:number;
    avgDmgBuffedBySupportPercent?:number;
    avgDmgBuffedBySupportIdentityPercent?:number;
    dpsPartyGapPercent?:number;
    dpsGapPercent?:number;
    dpsGapAdjustedPercent?:number;
}