export function maskDate(date: string): string {
    const noMask = date.replace(/\D/g, '');
    const { length } = noMask;

    if (length <= 2) {
        return noMask.replace(/(\d{2})/, '$1');
    }
    if (length <= 4) {
        return noMask.replace(/(\d{2})(\d)/, '$1/$2');
    }

    return noMask.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
}
