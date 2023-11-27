export function ofCalculatingDaysInAMonth(month: number, year: number):number {
    return new Date(year, month + 1, 0).getDate();
}

export function ofDateFormatting(year: number, month: number, day: number): string {
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}


