import { ClassEnum } from "../../common/Planner/ClassEnum";
import { PlannerCharacter } from "../../common/Planner/PlannerCharacter";
import { PlannerPlayer } from "../../common/Planner/PlannerPlayer";

export function formatRosterImportData(data: any) {
    const map = {
        "berserker": ClassEnum.BERSERKER,
        "holyknight": ClassEnum.PALADIN,
        "warlord": ClassEnum.GUNLANCER,
        "destroyer": ClassEnum.DESTROYER,

        "berserker_female": ClassEnum.SLAYER,

        "battle_master": ClassEnum.WARDANCER,
        "lance_master": ClassEnum.GLAIVIER,
        "force_master": ClassEnum.SOULFIST,
        "infighter": ClassEnum.SCRAPPER,
        "infighter_male": ClassEnum.BREAKER,
        "battle_master_male": ClassEnum.STRIKER,

        "reaper": ClassEnum.REAPER,
        "demonic": ClassEnum.SHADOWHUNTER,
        "soul_eater": ClassEnum.SOULEATER,
        "blade": ClassEnum.DEATHBLADE,

        "elemental_master": ClassEnum.SORCERESS,
        "summoner": ClassEnum.SUMMONER,
        "arcana": ClassEnum.ARCANIST,
        "bard": ClassEnum.BARD,

        "yinyangshi": ClassEnum.ARTIST,
        "weather_artist": ClassEnum.AEROMANCER,
        "wildsoul": ClassEnum.WILDSOUL,

        "hawk_eye": ClassEnum.SHARPSHOOTER,
        "devil_hunter": ClassEnum.DEADEYE,
        "blaster": ClassEnum.ARTILLERIST,
        "scouter": ClassEnum.MACHINIST,
        "devil_hunter_female": ClassEnum.GUNSLINGER,
    }

    const dataNode = data.nodes.find((node: any) => node.type === 'data') as { data: any[] };
    const chars: PlannerCharacter[] = [];
    const starts: any[] = dataNode.data[1];
    starts.forEach((startIndex) => {
        const charDataIndexes = dataNode.data[startIndex] as { name: number, class: string, ilvl: number };
        const char: PlannerCharacter = {
            name: dataNode.data[charDataIndexes.name],
            class: map[dataNode.data[charDataIndexes.class]],
            itemLevel: dataNode.data[charDataIndexes.ilvl],
        };
        chars.push(char);
    });

    return chars;
}

export function getHighestItemLevelCharacter(player: PlannerPlayer) {
    let char: PlannerCharacter | null = null;
    for (let i = 0; i < player.roster.length; i++) {
        const curChar: PlannerCharacter = player.roster[i];
        if (curChar.itemLevel !== undefined && (char?.itemLevel ?? 0) < curChar.itemLevel) {
            char = curChar;
        }
    }
    return char;
} 