import { Accessory } from "../../common/Accessory";
import { Stats } from "../../common/Stats";

export const emptyStats:Stats={crit:0, specialization:0, domination:0, swiftness:0, endurance:0, expertise:0};
export const baseBonusStats:Stats={crit:65, specialization:64, domination:70, swiftness:63, endurance:66, expertise:66};

export function getEmptyStatsCopy() : Stats {
    return JSON.parse(JSON.stringify(emptyStats));
}

export function getStartingAccessories() : Accessory[]{
    return [
        { name:"Necklace", stats: getEmptyStatsCopy() },
        { name:"Earring1", stats: getEmptyStatsCopy() },
        { name:"Earring2", stats: getEmptyStatsCopy() },
        { name:"Ring1", stats: getEmptyStatsCopy() },
        { name:"Ring2", stats: getEmptyStatsCopy() },
        { name:"Bracelet", stats: getEmptyStatsCopy() },
        { name:"Bonus", stats: baseBonusStats },
    ]
}