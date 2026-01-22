export function functionalQuickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];
  
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...functionalQuickSort(left), pivot, ...functionalQuickSort(right)];
}

export function inPlaceQuickSort(arr: number[]): number[] {
    const result = [...arr];

    quickSortHelper(result, 0, result.length - 1);

    return result;
}

function quickSortHelper(arr: number[], low: number, high: number): void {
    if (low < high) {
        const p = partition(arr, low, high);
        quickSortHelper(arr, low, p - 1);
        quickSortHelper(arr, p + 1, high);
    }
}
  
function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j += 1) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}