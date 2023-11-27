import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../shared/api/BASE_URL.ts";
import {ofOneYearCalculating} from "../../shared/features/services/oneYear.ts";
import {COLOR_DESCRIPTION, DAYS} from "../../shared/const/consts.ts";
import {IMonthData} from "../../shared/types/types.ts";
import {Month} from "../../shared/ui/Month";
import cls from './Contribution.module.css'

const days = (
    <div className={cls.table}>
        {DAYS.map((day, index) => (
            <div key={index}>{day}</div>
        ))}
    </div>
)
const infoSchema = (
    <>
     <span className={cls.infoText}>
                   Меньше
                </span>
        {COLOR_DESCRIPTION.map((color) => {
            return <div style={{width: "15px", height: "15px", backgroundColor: `${color.color}`}}
                        key={color.color} color={color.color}/>;
        })}
        <span className={cls.infoText}>
                    Больше
                </span>
    </>
)

export const Contribution = () => {
    const [contributions, setContributions] = useState<IMonthData[]>([]);

    useEffect(() => {
        const getContributions = async () => {
            try {
                const {data} = await axios.get(`${BASE_URL}`);
                const currentYear = new Date().getFullYear();
                const yearData = ofOneYearCalculating(currentYear, data);
                setContributions(yearData);
                console.log(yearData, "data");
            } catch (e) {
                console.log(e)
            }
        };
        getContributions();
    }, []);

    const month = (
        <div className={cls.month}>
            {contributions.map((item) => {
                return <Month key={item.name} data={item}/>;
            })}
        </div>
    )

    return (
        <main className={cls.mainContainer}>
            <div className={cls.mainDiv}>
                <div className={cls.df}>
                    {days}
                    {month}
                </div>
            </div>
            <div className={cls.infoSchema}>
                {infoSchema}
            </div>
        </main>
    );
}

