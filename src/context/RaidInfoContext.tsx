import { createContext } from "react";
import { RaidsInfoTableData } from "../common/RaidsInfoTableData";
import usePersistedState from "@utilityjs/use-persisted-state";

const RAIDS_INFO_PRESETS_SAVE_KEY="raidsInfoPresetsKey";
const RAIDS_INFO_OTHER_SAVE_KEY="raidsInfoOtherKey";

interface RaidsInfoPresetData{
    name:string;
    gateNames:string[];
    disabledG4Brel:boolean;
}

interface IRaidsInfoContext{
    presets:RaidsInfoPresetData[];
    setPresets:(newPresets:RaidsInfoPresetData[]) => void;
    updatePreset:(newData:RaidsInfoPresetData, index:number) => void;
    other:Array<{label:string, gold:number}>;
    setPresetName:(newName:string,index:number) => void;
    setOther:(newOther:{label:string, gold:number}[]) => void;
    getTotalGold:(rows:RaidsInfoTableData[]) => number;
    getCurrentPresetTotalGold:(rows:RaidsInfoTableData[], index:number) => number;
    toggleBrelG4:(index:number) => void;
    addOther:() => void;
    updateOtherName:(newName:string, index:number) => void;
    updateOtherGold:(newGold:number, index:number) => void;
    removeOther:(index:number) => void;
}
 
const DEFAULT_PRESETS:RaidsInfoPresetData[]=[
    { name:"Preset 1", disabledG4Brel: false, gateNames:[] },
    { name:"Preset 2", disabledG4Brel: false, gateNames:[] },
    { name:"Preset 3", disabledG4Brel: false, gateNames:[] },
    { name:"Preset 4", disabledG4Brel: false, gateNames:[] },
    { name:"Preset 5", disabledG4Brel: false, gateNames:[] },
    { name:"Preset 6", disabledG4Brel: false, gateNames:[] },
]

const DEFAULT_OTHER:{label:string, gold:number}[]=[];

export const RaidsInfoContext=createContext<IRaidsInfoContext>({
    presets: DEFAULT_PRESETS,
    other: DEFAULT_OTHER,
    setPresets:(_:RaidsInfoPresetData[]) => null,
    updatePreset:(_:RaidsInfoPresetData, __:number) => null,
    setPresetName:(_:string,__:number) => null,
    getTotalGold:(_:RaidsInfoTableData[]) => 0,
    getCurrentPresetTotalGold:(_:RaidsInfoTableData[], __:number)=>0,
    setOther:()=>null,
    toggleBrelG4:()=>null,
    addOther:() => null,
    updateOtherName:(_:string, __:number) => null,
    updateOtherGold:(_:number, __:number) => null,
    removeOther:(_:number) => null,
});

export function RaidsInfoProvider({children}:{children?:JSX.Element|JSX.Element[]}){
    const [presets, setPresets] = usePersistedState(DEFAULT_PRESETS, {name: RAIDS_INFO_PRESETS_SAVE_KEY});
    const [other, setOther] = usePersistedState(DEFAULT_OTHER, {name: RAIDS_INFO_OTHER_SAVE_KEY});

    const getTotalGold =(rows:RaidsInfoTableData[])=>{
        const raidsGold = presets.reduce((acc,curPreset)=>{
            const presetGold = curPreset.gateNames.reduce((acc,cur)=>{
                const isG4Brel = cur.includes("Brelshaza") && cur.includes("4");
                if(curPreset.disabledG4Brel && isG4Brel) return acc;
                const found = rows.find((row)=>row.name===cur);
                found ? acc+=found.gold : acc+=0;
                return acc;
            },0);
            acc+=presetGold;
            return acc;
        }, 0);

        const otherGold = other.reduce((acc,cur)=>{
            acc+=cur.gold;
            return acc;
        },0);

        return raidsGold + otherGold;
    }

    const getCurrentPresetTotalGold = (rows:RaidsInfoTableData[], index:number)=>{
        const currentPreset = presets[index];
        return currentPreset.gateNames.reduce((acc, cur)=>{
            const foundIndex=rows.findIndex((row)=>row.name===cur);
            if(foundIndex>-1){
                const isG4Brel = cur.includes("Brelshaza") && cur.includes("4");
                if(!(isG4Brel && currentPreset.disabledG4Brel)){
                    acc+=rows[foundIndex].gold;
                }
            }
            return acc;
        },0);
    }

    const updatePreset = (newData:RaidsInfoPresetData, index:number)=>{
        presets[index]=newData;
        setPresets(Array.from(presets));
    }

    const toggleBrelG4 = (index:number)=>{
        presets[index].disabledG4Brel=!presets[index].disabledG4Brel;
        setPresets(Array.from(presets));
    }

    const setPresetName = (newName:string, index:number)=>{
        presets[index].name=newName;
        setPresets(Array.from(presets));
    }

    const addOther=()=>{
        other.push({label:"Default", gold:0});
        setOther(Array.from(other));
    }

    const updateOtherName=(newName:string, index:number)=>{
        other[index].label=newName;
        setOther(Array.from(other));
    }

    const updateOtherGold=(newGold:number, index:number)=>{
        other[index].gold=newGold;
        setOther(Array.from(other));
    }

    const removeOther=(index:number)=>{
        other.splice(index, 1);
        setOther(Array.from(other));
    }

    const exportValue:IRaidsInfoContext={
        presets,
        setPresets,
        updatePreset,
        setPresetName,
        other,
        setOther,
        getTotalGold,
        getCurrentPresetTotalGold,
        toggleBrelG4,
        addOther,
        updateOtherName,
        updateOtherGold,
        removeOther,
    }

    return <RaidsInfoContext.Provider value={exportValue}>
        {children}
    </RaidsInfoContext.Provider>;
}
