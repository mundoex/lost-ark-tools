export interface CritSource {
    name: string;
    isRelicEngraving: boolean;
    image?:string;
    stages: { state: number, value: number }[];
}