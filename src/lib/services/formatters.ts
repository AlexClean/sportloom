export function formatDate(date?: string) {
    if (!date) return "Sportloom guide";

    return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(date));
}
