import { Header } from "./Header";
import { SelectedPlayer } from "./SelectedPlayer";

export interface EncounterLog {
    id: number;
    uploadedBy: string;
    uploadedAt: string;
    header: Header;
    private: boolean;
    hash: string;
    boss: string;
    difficulty: string;
    timestamp: number;
    duration: number;
    version: string;
    localPlayer: string;
    region: string;
    totalDamageDealt: number;
    totalDps: number;
    minGearScore: number;
    maxGearScore: number;
    visibility: number;
    alsoUploadedBy: string | null;
    selectedPlayer: SelectedPlayer;
    playerOverviews: any;
}