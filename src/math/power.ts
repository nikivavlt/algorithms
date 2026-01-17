function validateExponent(exponent: number): void {
    if (!Number.isInteger(exponent)) {
        throw new Error('Exponent must be an integer');
    }
}

export function recursivePower(base: number, exponent: number): number {
    validateExponent(exponent);
    
    if (exponent === 0) return 1;

    if (exponent < 0) {
        return 1 / (recursivePower(base, -exponent));
    }

    const part = recursivePower(base, Math.floor(exponent / 2));

    if (exponent % 2 === 0) {
        return part * part;
    } else {
        return base * part * part;
    }
}

export function iterativePower(base: number, exponent: number): number {
    validateExponent(exponent);

    let result = 1;

    for (let i = 0; i < Math.abs(exponent); i += 1) {
        result *= base;
    }

    return exponent < 0 ? (1 / result) : result;
}
