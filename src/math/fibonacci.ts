function validateIndex(index: number): void {
    if (!Number.isInteger(index)) {
        throw new Error('Index must be an integer');
    }
    
    if (index < 0) {
        throw new Error('Index must be non-negative');
    }
}

export function recursiveFibonacci(index: number): number {
    validateIndex(index);

    if (index < 2) return index;

    return recursiveFibonacci(index - 1) + recursiveFibonacci(index - 2);
}

export function iterativeFibonacci(index: number): number {
    validateIndex(index);

    if (index < 2) return index;

    let first = 0;
    let second = 1;

    for(let i = 2; i <= index; i += 1) {
        [first, second] = [second, first + second]
    }

    return second;
}
