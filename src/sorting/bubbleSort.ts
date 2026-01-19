export function bubbleSort(arr: number[]): number[] {
    const result = [...arr];

    for (let i = 0; i < result.length - 1; i += 1) {
        let isSorted = true;

        for (let j = 0; j < result.length - 1 - i; j += 1) {
            if (result[j] > result[j + 1]) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                isSorted = false;
            }
        }

        if (isSorted) break;
    }

    return result;
}