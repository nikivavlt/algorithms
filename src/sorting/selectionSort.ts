export function selectionSort(arr: number[]): number[] {
    const result = [...arr];
    
    for(let i = 0; i < result.length - 1; i += 1){
        let smallestElementIndex = i;

        for(let j = 1 + i; j < result.length; j += 1){
            if (result[smallestElementIndex] > result[j]) {
                smallestElementIndex = j;
            }
        }

        if (smallestElementIndex !== i) {
            [result[i], result[smallestElementIndex]] = [result[smallestElementIndex], result[i]];
        }
    }

    return result;
}