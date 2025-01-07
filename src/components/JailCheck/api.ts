import axios from "axios";
import { LogsFilter } from "../../common/Meter/LogsFilter";
import { EncounterData } from "../../common/Meter/EncounterData";
import { EncounterLog } from "../../common/Meter/EncounterLog";

export const BASE_LOGS_API_URL="https://api.snow.xyz/logs"
let LOGS_URL = BASE_LOGS_API_URL;

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
    return axios.post(LOGS_URL, filter).then(d=>d.data);
}

export async function getLogData(logId:number):Promise<{encounter:EncounterData}>{
    return axios.get(`${LOGS_URL}/${logId}`).then(d=>{
        d.data.encounter.id = logId;
        return d.data;
    });
}

export function useLogsApiFunctionsForUrl(url:string){
    LOGS_URL = url;
    return {findLogs, getLogData}
}