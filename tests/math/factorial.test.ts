import { recursiveFactorial, iterativeFactorial } from '../../src/math/factorial';

describe('recursiveFactorial', () => {
  describe('base cases', () => {
    it('returns 1 for n = 0', () => {
      expect(recursiveFactorial(0)).toBe(1);
    });

    it('returns 1 for n = 1', () => {
      expect(recursiveFactorial(1)).toBe(1);
    });
  });

  describe('small numbers', () => {
    it('returns 2 for n = 2', () => {
      expect(recursiveFactorial(2)).toBe(2);
    });

    it('returns 6 for n = 3', () => {
      expect(recursiveFactorial(3)).toBe(6);
    });

    it('returns 24 for n = 4', () => {
      expect(recursiveFactorial(4)).toBe(24);
    });

    it('returns 120 for n = 5', () => {
      expect(recursiveFactorial(5)).toBe(120);
    });
  });

  describe('larger numbers', () => {
    it('returns 720 for n = 6', () => {
      expect(recursiveFactorial(6)).toBe(720);
    });

    it('returns 40320 for n = 8', () => {
      expect(recursiveFactorial(8)).toBe(40320);
    });

    it('returns 3628800 for n = 10', () => {
      expect(recursiveFactorial(10)).toBe(3628800);
    });
  });

  describe('edge cases', () => {
    it('throws error for negative input', () => {
      expect(() => recursiveFactorial(-1)).toThrow('Number must be non-negative');
    });

    it('throws error for non-integer input', () => {
      expect(() => recursiveFactorial(3.5)).toThrow('Number must be an integer');
    });
  });
});

describe('iterativeFactorial', () => {
  describe('base cases', () => {
    it('returns 1 for n = 0', () => {
      expect(iterativeFactorial(0)).toBe(1);
    });

    it('returns 1 for n = 1', () => {
      expect(iterativeFactorial(1)).toBe(1);
    });
  });

  describe('small numbers', () => {
    it('returns 2 for n = 2', () => {
      expect(iterativeFactorial(2)).toBe(2);
    });

    it('returns 6 for n = 3', () => {
      expect(iterativeFactorial(3)).toBe(6);
    });

    it('returns 24 for n = 4', () => {
      expect(iterativeFactorial(4)).toBe(24);
    });

    it('returns 120 for n = 5', () => {
      expect(iterativeFactorial(5)).toBe(120);
    });
  });

  describe('larger numbers', () => {
    it('returns 720 for n = 6', () => {
      expect(iterativeFactorial(6)).toBe(720);
    });

    it('returns 40320 for n = 8', () => {
      expect(iterativeFactorial(8)).toBe(40320);
    });

    it('returns 3628800 for n = 10', () => {
      expect(iterativeFactorial(10)).toBe(3628800);
    });
  });

  describe('edge cases', () => {
    it('throws error for negative input', () => {
      expect(() => iterativeFactorial(-1)).toThrow('Number must be non-negative');
    });

    it('throws error for non-integer input', () => {
      expect(() => iterativeFactorial(3.5)).toThrow('Number must be an integer');
    });
  });
});