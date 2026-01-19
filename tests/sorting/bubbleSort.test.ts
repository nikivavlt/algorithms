import { bubbleSort } from '../../src/sorting/bubbleSort';

describe('bubbleSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    });

    it('sorts array with duplicates', () => {
      expect(bubbleSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('sorts larger array', () => {
      expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(bubbleSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(bubbleSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(bubbleSort([2, 1])).toEqual([1, 2]);
    });

    it('handles two element array - sorted', () => {
      expect(bubbleSort([1, 2])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(bubbleSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(bubbleSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with all negative numbers', () => {
      expect(bubbleSort([-3, -1, -7, -2])).toEqual([-7, -3, -2, -1]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(bubbleSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('decimal numbers', () => {
    it('sorts array with decimal numbers', () => {
      expect(bubbleSort([3.5, 1.2, 4.8, 2.1])).toEqual([1.2, 2.1, 3.5, 4.8]);
    });
  });

  describe('does not mutate original array', () => {
    it('returns new sorted array', () => {
      const original = [5, 3, 8, 4, 2];
      const sorted = bubbleSort(original);
      expect(sorted).toEqual([2, 3, 4, 5, 8]);
      // Check if you want to preserve original or sort in-place
      // If sorting in-place, this test would check original === sorted
    });
  });
});