export interface SelectedPlayer {
    encounter: number;
    name: string;
    class: string;
    spec: string;
    dead: boolean;
    deaths: number;
    dps: number;
    gearScore: number;
    rating: number | null;
    characterId: number;
    bossName: string;
    engravings: string | null;
    arkPassiveActive: boolean;
    arkPassiveData: string | null;
}