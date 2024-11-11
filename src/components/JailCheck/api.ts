import axios from "axios";
import { LogsFilter } from "../../common/LogsFilter";
import { EncounterLog } from "../../common/EncounterLog";
import { EncounterData } from "../../common/EncounterData";

export async function findLogs(name:string, page:number=1, pageSize:number=10):Promise<{encounters:Array<EncounterLog>, totalEncounters:number, isSupport:boolean}>{
    const filter:LogsFilter={
        page,
        pageSize,
        search: name,
        filter:{
            bosses: [],
            classes: [],
            difficulty: "",
            sort: "id",
            order: 2,
            myEncounters: false,
            regions: [],
        },
    }
    return axios.post("https://api.snow.xyz/logs", filter).then(d=>d.data);
}

export async function getLogData(logId:number):Promise<{encounter:EncounterData}>{
    return axios.get(`https://api.snow.xyz/logs/${logId}`).then(d=>{
        d.data.encounter.id = logId;
        return d.data;
    });
}