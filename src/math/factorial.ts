function validateNumber(index: number): void {
    if (!Number.isInteger(index)) {
        throw new Error('Number must be an integer');
    }
    
    if (index < 0) {
        throw new Error('Number must be non-negative');
    }
}

export function recursiveFactorial(n: number): number {
    validateNumber(n);

    if (n === 1 || n === 0) return 1;

    return n * recursiveFactorial(n - 1)
}

export function iterativeFactorial(n: number): number {
    validateNumber(n);

    if (n === 1 || n === 0) return 1;

    let result = 1;

    for (let i = 2; i <= n; i += 1) {
        result *= i;
    }

    return result;
}