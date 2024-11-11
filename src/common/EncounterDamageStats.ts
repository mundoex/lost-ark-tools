export interface EncounterDamageStats {
    dps: number;
    misc: {
        region: string;
        version: string;
        raidClear: boolean;
        ntpFightStart: number;
        manualSave: boolean;
        partyInfo: {
            [key: string]: string[];
        }
    };
    topDamageDealt: number;
    topDamageTaken: number;
    totalDamageDealt: number;
    totalDamageTaken: number;
    totalEffectiveShielding: number;
    totalShielding: number;
}