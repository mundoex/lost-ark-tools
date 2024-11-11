export interface LogsFilter{
    page:number;
    pageSize:number;
    search:string;
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