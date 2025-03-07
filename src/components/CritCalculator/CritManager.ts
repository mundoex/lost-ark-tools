import { EventEmitter } from 'events';
import { critStatToCritPercentage } from '../../utils/utils';

export type CritChangeEvent = { source: string, value: number };

export enum CritEventType {
    CHANGE = "change",
    CRIT_CHANCE = "critChange",
    CRIT_STAT_CHANGE = "critStatChange"
}

export class CritManager{
    critMap:Map<string,number>;
    critStatMap:Map<string,number>;
    eventer:EventEmitter;

    constructor(){
        this.critMap=new Map<string,number>();
        this.critStatMap=new Map<string,number>();
        this.eventer=new EventEmitter();

        this.eventer.on(CritEventType.CRIT_CHANCE, (e:CritChangeEvent)=>this.critMap.set(e.source, e.value));
        this.eventer.on(CritEventType.CRIT_STAT_CHANGE, (e:CritChangeEvent)=>this.critStatMap.set(e.source, e.value));
    }

    emitCritChanceChange(source: string, value: number) {
        this.eventer.emit(CritEventType.CRIT_CHANCE, { source, value });
        this.eventer.emit(CritEventType.CHANGE);
    }

    emitCritStatChange(source: string, value: number) {
        this.eventer.emit(CritEventType.CRIT_STAT_CHANGE, { source, value });
        this.eventer.emit(CritEventType.CHANGE);
    }

    get totalCritStat() : number{
        return Array.from(this.critStatMap.values()).reduce((acc, value) => acc + value, 0);
    }

    private get totalCritStatChance() : number{
        return critStatToCritPercentage(this.totalCritStat);
    }

    get totalCritChance() : number{
        return this.totalCritStatChance + Array.from(this.critMap.values()).reduce((acc, value) => acc + value, 0);
    }
}
