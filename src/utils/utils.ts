export function filterObjectByKeys<T extends Record<string, any>>(obj: T, keys: (keyof T)[]): Partial<T> {
    return keys.reduce((acc, key) => {
        if (key in obj) {
            acc[key] = obj[key];
        }
        return acc;
    }, {} as Partial<T>);
}

export function formatNumber(num: number): string {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "m"; // millions
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "k"; // thousands
    }
    return num.toString(); // below thousands, return as-is
}

export function removeAccents(input: string): string {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}