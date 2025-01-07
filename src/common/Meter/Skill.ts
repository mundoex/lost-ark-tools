export interface Skill{
    id: number;
    name: string;
    icon: string;
    totalDamage: number;
    maxDamage: number;
    maxDamageCast: number;
    buffedBy: {
        [key: number]: number;
    };
    debuffedBy: {
        [key: number]: number;
    };
    buffedBySupport: number;
    buffedByIdentity: number;
    buffedByHat: number;
    debuffedBySupport: number;
    casts: number;
    hits: number;
    crits: number;
    critDamage: number;
    backAttacks: number;
    frontAttacks: number;
    backAttackDamage: number;
    frontAttackDamage: number;
    dps: number;
    castLog: number[];
    tripodIndex: {
        first: number;
        second: number;
        third: number;
    };
    tripodLevel: {
        first: number;
        second: number;
        third: number;
    };
    gemCooldown: number;
    gemDamage: number;
    gemTier: number;
}