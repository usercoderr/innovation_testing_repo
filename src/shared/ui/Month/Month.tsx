import { Tooltip as ReactTooltip } from "react-tooltip";
import {DAYS} from "../../const/consts.ts";
import cls from './month.module.css'
import {IDataSchema} from "../../types/types.ts";
import {OneDay} from "../OneDay";


export const Month = ({  data }: IDataSchema) => {
    const generateCalendar = (): { value: number; dayOfMonth: string; dayIndex: number }[][] => {
        const calendar: { value: number; dayOfMonth: string; dayIndex: number }[][] = [];

        for (let i = 0; i < Math.ceil(data.days.length / 7); i++) {
            const week = [];

            for (let j = 0; j < 7; j++) {
                const dayIndex = i * 7 + j;
                const dayValue = data.days[dayIndex]?.value || 0;
                const dayOfMonth = data.days[dayIndex]?.name || "";

                if (+dayIndex < +data.days.length) {
                    week.push({ value: dayValue, dayOfMonth, dayIndex });
                }
            }

            calendar.push(week);
        }

        return calendar;
    };

    const calendar = generateCalendar();

    return (
        <div className={cls.day}>
            <div className={cls.month}>{data.name}</div>
            {DAYS.map((_, index) => (
                <div className={cls.row} key={index}>
                    {calendar.map((week, weekIndex) => {
                        if (!week[index]) return null;
                        const dayOfWeek = week[index];
                        return (
                            <OneDay
                                key={weekIndex}
                                dataTooltipId="my-tooltip"
                                dataTooltipContent={`${dayOfWeek?.value} contributions at ${
                                    dayOfWeek?.dayIndex + 1
                                } ${dayOfWeek?.dayOfMonth}, ${data?.name}`}
                                value={dayOfWeek.value}
                            />
                        );
                    })}
                </div>
            ))}
            <ReactTooltip id="my-tooltip" place="bottom" />
        </div>
    );
};


