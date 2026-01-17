import { recursivePower, iterativePower } from '../../src/math/power';

describe('iterativePower', () => {
  describe('base cases', () => {
    it('returns 1 for any base to power 0', () => {
      expect(iterativePower(5, 0)).toBe(1);
      expect(iterativePower(100, 0)).toBe(1);
      expect(iterativePower(0, 0)).toBe(1);
    });

    it('returns base for exponent 1', () => {
      expect(iterativePower(5, 1)).toBe(5);
      expect(iterativePower(42, 1)).toBe(42);
    });

    it('returns 0 for 0 to any positive power', () => {
      expect(iterativePower(0, 5)).toBe(0);
      expect(iterativePower(0, 100)).toBe(0);
    });
  });

  describe('positive integers', () => {
    it('calculates 2^3 = 8', () => {
      expect(iterativePower(2, 3)).toBe(8);
    });

    it('calculates 5^4 = 625', () => {
      expect(iterativePower(5, 4)).toBe(625);
    });

    it('calculates 3^5 = 243', () => {
      expect(iterativePower(3, 5)).toBe(243);
    });

    it('calculates 10^6 = 1000000', () => {
      expect(iterativePower(10, 6)).toBe(1000000);
    });

    it('calculates 2^10 = 1024', () => {
      expect(iterativePower(2, 10)).toBe(1024);
    });
  });

  describe('negative base', () => {
    it('handles negative base with even exponent', () => {
      expect(iterativePower(-2, 4)).toBe(16);
    });

    it('handles negative base with odd exponent', () => {
      expect(iterativePower(-2, 3)).toBe(-8);
    });
  });

  describe('negative exponent', () => {
    it('calculates 2^(-3) = 0.125', () => {
      expect(iterativePower(2, -3)).toBe(0.125);
    });

    it('calculates 5^(-2) = 0.04', () => {
      expect(iterativePower(5, -2)).toBe(0.04);
    });
  });

  describe('edge cases', () => {
    it('throws error for non-integer exponent', () => {
      expect(() => iterativePower(2, 3.5)).toThrow('Exponent must be an integer');
    });
  });
});

describe('recursivePower', () => {
  describe('base cases', () => {
    it('returns 1 for any base to power 0', () => {
      expect(recursivePower(5, 0)).toBe(1);
      expect(recursivePower(100, 0)).toBe(1);
      expect(recursivePower(0, 0)).toBe(1);
    });

    it('returns base for exponent 1', () => {
      expect(recursivePower(5, 1)).toBe(5);
      expect(recursivePower(42, 1)).toBe(42);
    });

    it('returns 0 for 0 to any positive power', () => {
      expect(recursivePower(0, 5)).toBe(0);
      expect(recursivePower(0, 100)).toBe(0);
    });
  });

  describe('positive integers', () => {
    it('calculates 2^3 = 8', () => {
      expect(recursivePower(2, 3)).toBe(8);
    });

    it('calculates 5^4 = 625', () => {
      expect(recursivePower(5, 4)).toBe(625);
    });

    it('calculates 3^5 = 243', () => {
      expect(recursivePower(3, 5)).toBe(243);
    });

    it('calculates 10^6 = 1000000', () => {
      expect(recursivePower(10, 6)).toBe(1000000);
    });

    it('calculates 2^10 = 1024', () => {
      expect(recursivePower(2, 10)).toBe(1024);
    });
  });

  describe('negative base', () => {
    it('handles negative base with even exponent', () => {
      expect(recursivePower(-2, 4)).toBe(16);
    });

    it('handles negative base with odd exponent', () => {
      expect(recursivePower(-2, 3)).toBe(-8);
    });
  });

  describe('negative exponent', () => {
    it('calculates 2^(-3) = 0.125', () => {
      expect(recursivePower(2, -3)).toBe(0.125);
    });

    it('calculates 5^(-2) = 0.04', () => {
      expect(recursivePower(5, -2)).toBe(0.04);
    });
  });

  describe('edge cases', () => {
    it('throws error for non-integer exponent', () => {
      expect(() => recursivePower(2, 3.5)).toThrow('Exponent must be an integer');
    });
  });

  describe('efficiency test (should handle large exponents)', () => {
    it('calculates 2^20 efficiently', () => {
      expect(recursivePower(2, 20)).toBe(1048576);
    });
  });
});