import axios from "axios";
export const env = import.meta.env.MODE;

export const BASE_URL='localhost:3000'

export async function getRosterImportData(charName:string, apiIp:string=BASE_URL){
    const reqResult = await axios.get(`${apiIp}/roster/${charName}`);
    return reqResult.data;
}
