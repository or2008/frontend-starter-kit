export function toDashed(str: string) {
    return str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
}