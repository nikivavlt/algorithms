export function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    const midIndex = Math.floor(arr.length / 2);
    
    return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex)));
}
  
function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];

    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(left[leftIndex] <= right[rightIndex] ? left[leftIndex++] : right[rightIndex++]);
    }

    while (leftIndex < left.length) result.push(left[leftIndex++]);
    while (rightIndex < right.length) result.push(right[rightIndex++]);
  
    return result;
}