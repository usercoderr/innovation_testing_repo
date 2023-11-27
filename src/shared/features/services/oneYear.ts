import {IDayData, IMonthData} from "../../types/types.ts";
import {ofCalculatingDaysInAMonth, ofDateFormatting} from "../lib/calculatings.ts";

export function ofOneYearCalculating(year: number, data: Record<string, number>): IMonthData[] {
    const months: IMonthData[] = [];

    for (let month = 0; month < 12; month++) {
        const monthName = new Date(year, month).toLocaleString("default", {
            month: "long",
        });

        const numDays = ofCalculatingDaysInAMonth(month, year);
        const days: IDayData[] = [];

        for (let day = 1; day <= numDays; day++) {
            const dayName = new Date(year, month, day).toLocaleString("default", {
                weekday: "long",
            });

            const dateKey = ofDateFormatting(year, month + 1, day);

            if (data[dateKey] !== undefined) {
                days.push({ name: dayName, value: data[dateKey] });
            } else {
                days.push({ name: dayName, value: 0 });
            }
        }
        months.push({ name: monthName, days });
    }

    return months;
}
