export function selectionSort(arr: number[]): number[] {
    if (arr.length < 2) return [...arr];

    const result = [...arr];
    
    for(let i = 0; i < result.length - 1; i += 1){
        let smallestElementIndex = i;

        for(let j = i + 1; j < result.length; j += 1){
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