export function iterativeBinarySearch(arr: number[], target: number): number {
    let first = 0;
    let last = arr.length - 1;
    
    while(first <= last) {
        const mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) return mid;

        if (target < arr[mid]) last = mid - 1;
        else {
            first = mid + 1;
        }
    }

    return -1;
}
  
export function recursiveBinarySearch(arr: number[], target: number): number {
    const recursiveHelper = (first: number, last: number) => {
        if (first > last) return -1;
        
        const mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) return mid;

        if (target < arr[mid]) return recursiveHelper(first, mid -1);
        else {
            return recursiveHelper(mid + 1, last);
        }
    };

    return recursiveHelper(0, arr.length - 1);
}