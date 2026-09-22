function formatMonthYear(date: Date): string {
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

export function formatDateRange(start: Date, end: Date | null): string {
    return `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : "Present"}`
}
