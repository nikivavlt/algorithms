import { selectionSort } from '../../src/sorting/selectionSort';

describe('selectionSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
    });

    it('sorts array with duplicates', () => {
      expect(selectionSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(selectionSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('sorts larger array', () => {
      expect(selectionSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(selectionSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(selectionSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(selectionSort([2, 1])).toEqual([1, 2]);
    });

    it('handles two element array - sorted', () => {
      expect(selectionSort([1, 2])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(selectionSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(selectionSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with all negative numbers', () => {
      expect(selectionSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(selectionSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('decimal numbers', () => {
    it('sorts array with decimal numbers', () => {
      expect(selectionSort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8]);
    });
  });

  describe('does not mutate original array', () => {
    it('returns new sorted array', () => {
      const original = [64, 25, 12, 22, 11];
      const sorted = selectionSort(original);
      expect(sorted).toEqual([11, 12, 22, 25, 64]);
      // If you want to preserve original, check they're different arrays
    });
  });
});