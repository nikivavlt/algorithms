export function ackermann(m: number, n: number): number {
    if (!Number.isInteger(m) || !Number.isInteger(n) || m < 0 || n < 0) {
        throw new Error('Both arguments must be non-negative integers');
    }

    if (m === 0) return n + 1;

    if (n === 0) return ackermann(m - 1, 1);

    return ackermann(m - 1, ackermann(m, n - 1));
}