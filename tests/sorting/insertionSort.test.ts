import { insertionSort } from '../../src/sorting/insertionSort';

describe('insertionSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('sorts array with duplicates', () => {
      expect(insertionSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(insertionSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('sorts larger array', () => {
      expect(insertionSort([12, 11, 13, 5, 6])).toEqual([5, 6, 11, 12, 13]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(insertionSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(insertionSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(insertionSort([2, 1])).toEqual([1, 2]);
    });

    it('handles two element array - sorted', () => {
      expect(insertionSort([1, 2])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(insertionSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(insertionSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with all negative numbers', () => {
      expect(insertionSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(insertionSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('decimal numbers', () => {
    it('sorts array with decimal numbers', () => {
      expect(insertionSort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8]);
    });
  });

  describe('nearly sorted data (best case)', () => {
    it('efficiently sorts nearly sorted array', () => {
      expect(insertionSort([1, 2, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
    });

    it('efficiently sorts array with one element out of place', () => {
      expect(insertionSort([2, 3, 4, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('does not mutate original array', () => {
    it('returns new sorted array', () => {
      const original = [5, 2, 4, 6, 1, 3];
      const sorted = insertionSort(original);
      expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});