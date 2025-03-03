import { createContext } from "react";
import usePersistedState from "@utilityjs/use-persisted-state";
import { PlannerPlayersData, PlannerRaidsData } from "../common/Planner/PlannerData";
import { DaysOfWeek } from "../common/Planner/DaysOfWeek";
import { RAIDS_INFO } from "../constants/RaidsInfo";
import { GUARDIANS_RAIDS_INFO } from "../constants/GuardianRaidsInfo";
import { PlannerCharacter } from "../common/Planner/PlannerCharacter";
import { PlannerPlayer } from "../common/Planner/PlannerPlayer";
import { RaidPlan } from "../common/Planner/RaidPlan";

const PLANNER_RAIDS_SAVE_KEY="plannerRaidsSaveKey";
const PLANNER_PLAYERS_SAVE_KEY="plannerPlayersSaveKey";
const PLANNER_API_IP_SAVE_KEY="plannerApiIpSaveKey";

interface IPlannerContext{
    playersPlannerData:PlannerPlayersData;
    raidsPlannerData:PlannerRaidsData;
    apiIp:string;

    //players & chars
    addPlayer:(name:string, color:string) => void;
    addCharacter:(playerName:string, playerCharacter:PlannerCharacter) => void;
    deletePlayer: (name: string) => void;
    deleteCharacter: (characterId: string) => void;

    //data import/export & API Ip
    importPlayerData:(dataString:string) => void;
    importRaidsPlansData:(dataString:string) => void;
    importRoster:(playerName:string, roster:PlannerCharacter[]) => void;
    setApiIp:(apiIp:string)=>void;

    //helper functions
    playerNames:() => string[],
    playerChars:(playerName:string) => PlannerCharacter[],

    //raid planning
    addRaid:()=>void;
    sortByNumber:()=>void;
    sortByCompleted:()=>void;
    changeRaidName:(index:number, newRaidName:string)=>void;
    changeRaidIndex:(index:number, newIndex:number)=>void;
    changeChecked:(index:number, newChecked:boolean)=>void;
    deleteRaid:(index:number)=>void;
    changeDayOfWeek:(index:number, newDayOfWeek:string)=>void;
    changeTime:(index:number, newTime:string)=>void;
    setRaidPlanPlayer:(planIndex:number, partyIndex:number, partySlotIndex:number, playerName:string)=>void;
    setRaidPlanChar:(planIndex:number, partyIndex:number, partySlotIndex:number, playerChar:string)=>void;
}

export const PlannerContext=createContext<IPlannerContext>({
    playersPlannerData: {
        players: [],
        lastEditedAt: 0,

    },
    raidsPlannerData: {
        raidPlans: [],
        lastEditedAt: 0
    },
    apiIp:"",
    addPlayer: (_: string, __: string) => { },
    addCharacter: (_: string, __: PlannerCharacter) => { },
    deletePlayer: (_: string) => { },
    deleteCharacter: (_: string) => { },
    importPlayerData: (_: string) => { },
    importRaidsPlansData: (_: string) => { },
    importRoster: (_: string, __: PlannerCharacter[]) => { },
    playerNames: () => [] as string[],
    playerChars: (_: string) => [] as PlannerCharacter[],
    setApiIp: (_: string) => { },
    addRaid: () => {},
    deleteRaid:(_:number)=> {},
    sortByNumber:() => {},
    sortByCompleted:() => {},
    changeRaidName:(_:number,__:string)=> {},
    changeRaidIndex:(_:number,__:number)=> {},
    changeChecked:(_:number,__:boolean)=> {},
    changeDayOfWeek:(_:number,__:string)=> {},
    changeTime:(_:number,__:string)=> {},
    setRaidPlanPlayer:(_:number, __:number, ___:number, ____:string)=>{},
    setRaidPlanChar:(_:number, __:number, ___:number, ____:string)=>{},
});

export function PlannerProvider({children}:{children?:JSX.Element|JSX.Element[]}){
    const [playersPlannerData, setPlayersPlannerData] = usePersistedState<PlannerPlayersData>({
        players: [],
        lastEditedAt: 0
    }, {name: PLANNER_PLAYERS_SAVE_KEY});

    const [raidsPlannerData, setRaidsPlannerData] = usePersistedState<PlannerRaidsData>({
        raidPlans: [],
        lastEditedAt: 0
    }, {name: PLANNER_RAIDS_SAVE_KEY});

    const [apiIp, setApiIp]=usePersistedState<string>("", {name: PLANNER_API_IP_SAVE_KEY});

    const addPlayer = (name: string, color:string) => {
        if (playersPlannerData.players.find(player => player.name === name)) return;
        const newPlayer: PlannerPlayer = {
            name,
            color,
            roster:[],
        };
        setPlayersPlannerData(prevData => ({
            ...prevData,
            players: [...prevData.players, newPlayer],
            lastEditedAt: Date.now()
        }));
    };

    const addCharacter = (playerName:string, playerCharacter: PlannerCharacter) => {
        if (playersPlannerData.players.some(player => player.roster.some(character => character.name === playerCharacter.name))) return;
        const playerIndex = playersPlannerData.players.findIndex(player => player.name === playerName);
        if (playerIndex === -1) return;

        const updatedPlayers = [...playersPlannerData.players];
        updatedPlayers[playerIndex] = {
            ...updatedPlayers[playerIndex],
            roster: [...updatedPlayers[playerIndex].roster, playerCharacter]
        };

        setPlayersPlannerData(prevData => ({
            ...prevData,
            players: updatedPlayers,
            lastEditedAt: Date.now()
        }));
    };

    const deletePlayer = (name: string) => {
        setPlayersPlannerData(prevData => ({
            ...prevData,
            players: prevData.players.filter(player => player.name !== name),
            lastEditedAt: Date.now()
        }));
    };

    const deleteCharacter = (characterName: string) => {
        setPlayersPlannerData(prevData => ({
            ...prevData,
            players: prevData.players.map(player => ({
            ...player,
            roster: player.roster.filter(character => character.name !== characterName)
            })),
            lastEditedAt: Date.now()
        }));
    };

    const importPlayerData = (dataString: string) =>  setPlayersPlannerData(JSON.parse(dataString));
    const importRaidsPlansData = (dataString: string) =>  setRaidsPlannerData(JSON.parse(dataString));

    const importRoster = (playerName:string, roster: PlannerCharacter[]) => {
        const playerIndex = playersPlannerData.players.findIndex(player => player.name === playerName);
        if (playerIndex === -1) return;

        const updatedPlayers = [...playersPlannerData.players];
        updatedPlayers[playerIndex] = {
            ...updatedPlayers[playerIndex],
            roster
        };

        setPlayersPlannerData(prevData => ({
            ...prevData,
            players: updatedPlayers,
            lastEditedAt: Date.now()
        }));
    };

    const playerNames = ()=> playersPlannerData.players.map((p)=>p.name);
    const playerChars = (playerName:string)=> playersPlannerData.players.find((p)=>p.name===playerName)?.roster ?? [];
    const addRaid = ()=> {
        const dummyData:RaidPlan = {
            raidName: "",
            raidIndex: raidsPlannerData.raidPlans.length+1,
            dayOfWeek: DaysOfWeek.WEDNESDAY,
            time: "11:00",
            checked:false,
            parties: [
                [{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                }],
                [{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                },{
                    name: "",
                    charName: ""
                }],
            ]
        };
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...prevData.raidPlans, dummyData],
            lastEditedAt: Date.now()
        }));
    }

    const deleteRaid = (index:number)=>{
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: prevData.raidPlans.filter((_, i) => i !== index),
            lastEditedAt: Date.now()
        }));
    }

    const sortByNumber = ()=>{
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...prevData.raidPlans.sort((a, b) => a.raidIndex - b.raidIndex)],
            lastEditedAt: Date.now()
        }));
    }

    const sortByCompleted = ()=>{
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...prevData.raidPlans.sort((a, b) => Number(b.checked) - Number(a.checked))],
            lastEditedAt: Date.now()
        }));
    }

    const changeRaidName = (index:number, newRaidName:string)=>{
        const matchingRaidInfo = [...RAIDS_INFO, ...GUARDIANS_RAIDS_INFO].find((raidInfo)=>raidInfo.name===newRaidName);
        const newRaidNumberOfParties = (matchingRaidInfo?.partySize ?? 0)/4;

        const updatedRaids = [...raidsPlannerData.raidPlans];
        const oldRaidNumberOfParties = updatedRaids[index].parties.length;

        //changing to a bigger new raid
        if(newRaidNumberOfParties>oldRaidNumberOfParties){
            const requiredPartiesToAdd = newRaidNumberOfParties-oldRaidNumberOfParties;
            for (let i = 0; i < requiredPartiesToAdd; i++) {
                updatedRaids[index].parties.push([]);
            }
        }

        //changing to a smaller new raid
        if(newRaidNumberOfParties<oldRaidNumberOfParties){
            updatedRaids[index].parties = updatedRaids[index].parties.slice(0, newRaidNumberOfParties);
        }

        if (updatedRaids[index]) {
            updatedRaids[index] = {
                ...updatedRaids[index],
                raidName: newRaidName,
            };
            setRaidsPlannerData(prevData => ({
                ...prevData,
                raidPlans: updatedRaids,
                lastEditedAt: Date.now()
            }));
        }
    }

    const changeRaidIndex = (index:number, newRaidIndex:number)=>{
        const raidPlan = raidsPlannerData.raidPlans[index];
        raidPlan.raidIndex = newRaidIndex;

        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const changeChecked=(index:number, newChecked:boolean)=>{
        const raidPlan = raidsPlannerData.raidPlans[index];
        raidPlan.checked = newChecked;

        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const changeDayOfWeek=(index:number, newDayOfWeek:string)=>{
        const raidPlan = raidsPlannerData.raidPlans[index];
        raidPlan.dayOfWeek = newDayOfWeek as DaysOfWeek;

        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const changeTime=(index:number, newTime:string)=>{
        const raidPlan = raidsPlannerData.raidPlans[index];
        raidPlan.time=newTime;

        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const setRaidPlanPlayer=(planIndex:number, partyIndex:number, partySlotIndex:number, playerName:string)=>{
        raidsPlannerData.raidPlans[planIndex].parties[partyIndex][partySlotIndex].name=playerName;
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const setRaidPlanChar=(planIndex:number, partyIndex:number, partySlotIndex:number, charName:string)=>{
        raidsPlannerData.raidPlans[planIndex].parties[partyIndex][partySlotIndex].charName=charName;
        setRaidsPlannerData(prevData => ({
            ...prevData,
            raidPlans: [...raidsPlannerData.raidPlans],
            lastEditedAt: Date.now()
        }));
    }

    const exportValue: IPlannerContext = {
        playersPlannerData,
        raidsPlannerData,
        apiIp,
        setApiIp,
        playerNames,
        playerChars,
        addPlayer,
        addCharacter,
        deletePlayer,
        deleteCharacter,
        importPlayerData,
        importRaidsPlansData,
        importRoster,
        addRaid,
        deleteRaid,
        sortByNumber,
        sortByCompleted,
        changeRaidName,
        changeRaidIndex,
        changeChecked,
        changeDayOfWeek,
        changeTime,
        setRaidPlanPlayer,
        setRaidPlanChar,

    };

    return <PlannerContext.Provider value={exportValue}>
        {children}
    </PlannerContext.Provider>;
}
