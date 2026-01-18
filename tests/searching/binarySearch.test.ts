import { iterativeBinarySearch, recursiveBinarySearch } from '../../src/searching/binarySearch';

describe('iterativeBinarySearch', () => {
  describe('basic cases', () => {
    it('finds element in middle of array', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    it('finds element at start of array', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
    });

    it('finds element at end of array', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    });

    it('finds element in larger array', () => {
      expect(iterativeBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
    });
  });

  describe('element not found', () => {
    it('returns -1 when element not in array', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it('returns -1 when element smaller than all elements', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 0)).toBe(-1);
    });

    it('returns -1 when element larger than all elements', () => {
      expect(iterativeBinarySearch([1, 3, 5, 7, 9], 10)).toBe(-1);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(iterativeBinarySearch([], 5)).toBe(-1);
    });

    it('handles single element array - found', () => {
      expect(iterativeBinarySearch([5], 5)).toBe(0);
    });

    it('handles single element array - not found', () => {
      expect(iterativeBinarySearch([5], 3)).toBe(-1);
    });

    it('handles two element array - first', () => {
      expect(iterativeBinarySearch([3, 7], 3)).toBe(0);
    });

    it('handles two element array - second', () => {
      expect(iterativeBinarySearch([3, 7], 7)).toBe(1);
    });
  });

  describe('duplicate elements', () => {
    it('finds one occurrence of duplicate element', () => {
      const result = iterativeBinarySearch([1, 3, 5, 5, 5, 7, 9], 5);
      expect(result).toBeGreaterThanOrEqual(2);
      expect(result).toBeLessThanOrEqual(4);
    });
  });

  describe('negative numbers', () => {
    it('handles negative numbers', () => {
      expect(iterativeBinarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    });

    it('handles all negative numbers', () => {
      expect(iterativeBinarySearch([-20, -15, -10, -5], -10)).toBe(2);
    });
  });
});

describe('recursiveBinarySearch', () => {
  describe('basic cases', () => {
    it('finds element in middle of array', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    it('finds element at start of array', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
    });

    it('finds element at end of array', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    });

    it('finds element in larger array', () => {
      expect(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
    });
  });

  describe('element not found', () => {
    it('returns -1 when element not in array', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    });

    it('returns -1 when element smaller than all elements', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 0)).toBe(-1);
    });

    it('returns -1 when element larger than all elements', () => {
      expect(recursiveBinarySearch([1, 3, 5, 7, 9], 10)).toBe(-1);
    });
  });

  describe('edge cases', () => {
    it('handles empty array', () => {
      expect(recursiveBinarySearch([], 5)).toBe(-1);
    });

    it('handles single element array - found', () => {
      expect(recursiveBinarySearch([5], 5)).toBe(0);
    });

    it('handles single element array - not found', () => {
      expect(recursiveBinarySearch([5], 3)).toBe(-1);
    });

    it('handles two element array - first', () => {
      expect(recursiveBinarySearch([3, 7], 3)).toBe(0);
    });

    it('handles two element array - second', () => {
      expect(recursiveBinarySearch([3, 7], 7)).toBe(1);
    });
  });

  describe('duplicate elements', () => {
    it('finds one occurrence of duplicate element', () => {
      const result = recursiveBinarySearch([1, 3, 5, 5, 5, 7, 9], 5);
      expect(result).toBeGreaterThanOrEqual(2);
      expect(result).toBeLessThanOrEqual(4);
    });
  });

  describe('negative numbers', () => {
    it('handles negative numbers', () => {
      expect(recursiveBinarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    });

    it('handles all negative numbers', () => {
      expect(recursiveBinarySearch([-20, -15, -10, -5], -10)).toBe(2);
    });
  });
});