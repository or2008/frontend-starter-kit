export function toDashed(str: string) {
    return str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
}
export async function copyTextToClipboard(text: string): Promise<boolean> {
    if (!navigator.clipboard) return false;

    await navigator.clipboard.writeText(text).catch(() => false);
    return true;
}
