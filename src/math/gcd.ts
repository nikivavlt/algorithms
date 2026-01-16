function validateNumbers(a: number, b: number): void {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('Both numbers must be integers');
    }

    if (a === 0 && b === 0) {
        throw new Error('GCD(0, 0) is undefined');
    }
}

export function recursiveGcd(a: number, b: number): number {
    validateNumbers(a, b);

    if (b === 0) return Math.abs(a);

    return recursiveGcd(b, a % b);
}

export function iterativeGcd(a: number, b: number): number {
    validateNumbers(a, b);

    let first = a;
    let second = b;

    while (second !== 0) {
        [first, second] = [second, first % second];
    }

    return Math.abs(first);
}