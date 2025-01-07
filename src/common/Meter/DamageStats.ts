interface DamageStats {
    backAttackDamage: number;
    buffByHat: any;
    buffedBy: { [key: number]: number[] };
    buffedByIdentity: number;
    buffedBySupport: number;
    critDamage:number;
    damageAbsorbed:number;
    damageAbsorbedBy: { [key: number]: number[] };
    damageAbsorbedOnOthers:number;
    damageAbsorbedOnOthersBy:{ [key: number]: number[] };
    damageDealt:number;
    damageTaken:number;
    deahtTime:number;
    deaths:number;
    debuffedBy:{ [key: number]: number[] };
    debuffedBySupport:number;
    dps:number;
    dpsAverage:number[];
    dpsRolling10sAvg:number[];
    frontAttackDamage:number;
    hyperAwakeningDamage:number;
    shieldsGiven:number;
    shieldsGivenBy:{ [key: number]: number[] };
    shieldsReceived:number;
    shieldsReceivedBy:{ [key: number]: number[] };
}