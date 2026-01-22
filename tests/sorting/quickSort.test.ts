import { inPlaceQuickSort, functionalQuickSort } from '../../src/sorting/quickSort';

describe('inPlaceQuickSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(inPlaceQuickSort([10, 80, 30, 90, 40, 50, 70])).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });

    it('sorts array with duplicates', () => {
      expect(inPlaceQuickSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(inPlaceQuickSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(inPlaceQuickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(inPlaceQuickSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(inPlaceQuickSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(inPlaceQuickSort([2, 1])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(inPlaceQuickSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(inPlaceQuickSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(inPlaceQuickSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('does not mutate original array', () => {
    it('returns new sorted array', () => {
      const original = [10, 80, 30, 90, 40];
      const sorted = inPlaceQuickSort(original);
      expect(sorted).toEqual([10, 30, 40, 80, 90]);
      expect(original).toEqual([10, 80, 30, 90, 40]); // Original unchanged
    });
  });
});

describe('functionalQuickSort', () => {
  describe('basic sorting', () => {
    it('sorts an unsorted array', () => {
      expect(functionalQuickSort([10, 80, 30, 90, 40, 50, 70])).toEqual([10, 30, 40, 50, 70, 80, 90]);
    });

    it('sorts array with duplicates', () => {
      expect(functionalQuickSort([5, 2, 8, 2, 9, 1])).toEqual([1, 2, 2, 5, 8, 9]);
    });

    it('sorts reverse sorted array', () => {
      expect(functionalQuickSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
    });

    it('handles already sorted array', () => {
      expect(functionalQuickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(functionalQuickSort([])).toEqual([]);
    });

    it('handles single element array', () => {
      expect(functionalQuickSort([42])).toEqual([42]);
    });

    it('handles two element array - unsorted', () => {
      expect(functionalQuickSort([2, 1])).toEqual([1, 2]);
    });

    it('handles all identical elements', () => {
      expect(functionalQuickSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    });
  });

  describe('negative numbers', () => {
    it('sorts array with negative numbers', () => {
      expect(functionalQuickSort([3, -1, 4, -5, 2])).toEqual([-5, -1, 2, 3, 4]);
    });

    it('sorts array with negative, zero, and positive', () => {
      expect(functionalQuickSort([-3, 0, 3, -1, 1])).toEqual([-3, -1, 0, 1, 3]);
    });
  });

  describe('does not mutate original array', () => {
    it('returns new sorted array', () => {
      const original = [10, 80, 30, 90, 40];
      const sorted = functionalQuickSort(original);
      expect(sorted).toEqual([10, 30, 40, 80, 90]);
      expect(original).toEqual([10, 80, 30, 90, 40]); // Original unchanged
    });
  });
});

describe('Performance comparison', () => {
  it('both produce same results', () => {
    const testArray = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50, 23, 36];
    expect(inPlaceQuickSort(testArray)).toEqual(functionalQuickSort(testArray));
  });

  it('both handle large arrays', () => {
    const large = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
    const result1 = inPlaceQuickSort([...large]);
    const result2 = functionalQuickSort([...large]);
    expect(result1).toEqual(result2);
  });
});