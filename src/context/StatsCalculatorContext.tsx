import { createContext, useState } from "react";
import { Accessory } from "../common/Accessory";
import { Stats, sumStats } from "../common/Stats";
import { PET_BUFFS } from "../common/consts";
import { emptyStats, getEmptyStatsCopy, getStartingAccessories } from "../components/StatsCalculator/common";

interface IStatsCalculatorContext{
    petBuff:string,
    setPetBuff:(petBuff:string) => void;
    accessories:Accessory[],
    setAccessories:(accessories:Accessory[]) => void;
    setAccessoryStats:(accessoryLabel:string, stats:Stats) => void,
    getTotalStats:() => Stats,
}

export const StatsCalculatorContext=createContext<IStatsCalculatorContext|null>(null);

export function StatsCalculatorProvider({children}:{children:JSX.Element|JSX.Element[]}){
    const [petBuff, setPetBuff]=useState(PET_BUFFS[0]);
    const [accessories, setAccessories]=useState<Accessory[]>(getStartingAccessories());

    const setAccessoryStats=(accessoryLabel:string, stats:Stats)=>{
        const accessory=accessories.find((acc)=>acc.name===accessoryLabel);
        if(accessory){
            accessory.stats=stats;
        }
        setAccessories(Array.from(accessories));
    }

    const getTotalStats = ()=>{
        const stats=accessories.reduce((acum,cur)=> sumStats(acum,cur.stats), getEmptyStatsCopy());
        if(!stats) return emptyStats;
        for (const [key, value] of Object.entries(stats)) {
            const multiplier = key === petBuff ? 1.1 : 1;
            stats[key as keyof Stats] = Math.round(value * multiplier);
        }
        return stats;
    }

    return <StatsCalculatorContext.Provider
        value={{ petBuff, setPetBuff, accessories, setAccessories, setAccessoryStats, getTotalStats}}>
            {children}
    </StatsCalculatorContext.Provider>;
}
