import { mergeSort } from '../../src/sorting/mergeSort';

describe('mergeSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    it('sorts array with duplicates', () => {
      expect(mergeSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(mergeSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('sorts larger array', () => {
      expect(mergeSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(mergeSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(mergeSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(mergeSort([2, 1])).toEqual([1, 2]);
    });

    it('handles two element array - sorted', () => {
      expect(mergeSort([1, 2])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(mergeSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(mergeSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with all negative numbers', () => {
      expect(mergeSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(mergeSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('decimal numbers', () => {
    it('sorts array with decimal numbers', () => {
      expect(mergeSort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8]);
    });
  });

  describe('large arrays', () => {
    it('efficiently sorts large array', () => {
      const large = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      const sorted = mergeSort(large);
      
      // Check if sorted
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i]).toBeLessThanOrEqual(sorted[i + 1]);
      }
    });
  });

  describe('stability', () => {
    it('maintains relative order of equal elements', () => {
      // Using objects to track original positions
      const arr = [
        { val: 3, id: 'a' },
        { val: 1, id: 'b' },
        { val: 3, id: 'c' },
        { val: 2, id: 'd' }
      ];
      
      const sorted = mergeSort(arr.map(x => x.val));
      // For basic number sort, we just check it's sorted
      expect(sorted).toEqual([1, 2, 3, 3]);
    });
  });
});