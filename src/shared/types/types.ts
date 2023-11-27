export interface IDayData {
    name: string;
    value: number;
    dayIndex?: number
}

export interface IMonthData {
    name: string;
    days: IDayData[];
}
export interface IDataSchema{
    data: IMonthData
}
