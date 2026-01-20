export function insertionSort(arr: number[]): number[] {
    const result = [...arr];

    for (let i = 1; i < result.length; i += 1){
        const current = result[i];

        let j = i - 1;

        while(j >= 0 && result[j] > current){
            result[j + 1] = result[j];
            j -= 1;
        }

        result[j + 1] = current;
    }

    return result;
}