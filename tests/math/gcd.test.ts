import { recursiveGcd, iterativeGcd } from '../../src/math/gcd';

describe('recursiveGcd', () => {
  describe('basic cases', () => {
    it('returns 4 for GCD(12, 8)', () => {
      expect(recursiveGcd(12, 8)).toBe(4);
    });

    it('returns 6 for GCD(54, 24)', () => {
      expect(recursiveGcd(54, 24)).toBe(6);
    });

    it('returns 1 for GCD(17, 19)', () => {
      expect(recursiveGcd(17, 19)).toBe(1);
    });

    it('returns 21 for GCD(105, 84)', () => {
      expect(recursiveGcd(105, 84)).toBe(21);
    });
  });

  describe('special cases', () => {
    it('returns n for GCD(n, n)', () => {
      expect(recursiveGcd(15, 15)).toBe(15);
    });

    it('returns smaller number when one divides the other', () => {
      expect(recursiveGcd(100, 50)).toBe(50);
    });

    it('returns 1 for coprime numbers', () => {
      expect(recursiveGcd(13, 7)).toBe(1);
    });

    it('returns n for GCD(n, 0)', () => {
      expect(recursiveGcd(5, 0)).toBe(5);
    });

    it('returns n for GCD(0, n)', () => {
      expect(recursiveGcd(0, 5)).toBe(5);
    });
  });

  describe('negative numbers', () => {
    it('handles negative first number', () => {
      expect(recursiveGcd(-12, 8)).toBe(4);
    });

    it('handles negative second number', () => {
      expect(recursiveGcd(12, -8)).toBe(4);
    });

    it('handles both negative numbers', () => {
      expect(recursiveGcd(-12, -8)).toBe(4);
    });
  });

  describe('edge cases', () => {
    it('throws error for GCD(0, 0)', () => {
      expect(() => recursiveGcd(0, 0)).toThrow('GCD(0, 0) is undefined');
    });

    it('throws error for non-integer first number', () => {
      expect(() => recursiveGcd(3.5, 2)).toThrow('Both numbers must be integers');
    });

    it('throws error for non-integer second number', () => {
      expect(() => recursiveGcd(3, 2.5)).toThrow('Both numbers must be integers');
    });
  });
});

describe('iterativeGcd', () => {
  describe('basic cases', () => {
    it('returns 4 for GCD(12, 8)', () => {
      expect(iterativeGcd(12, 8)).toBe(4);
    });

    it('returns 6 for GCD(54, 24)', () => {
      expect(iterativeGcd(54, 24)).toBe(6);
    });

    it('returns 1 for GCD(17, 19)', () => {
      expect(iterativeGcd(17, 19)).toBe(1);
    });

    it('returns 21 for GCD(105, 84)', () => {
      expect(iterativeGcd(105, 84)).toBe(21);
    });
  });

  describe('special cases', () => {
    it('returns n for GCD(n, n)', () => {
      expect(iterativeGcd(15, 15)).toBe(15);
    });

    it('returns smaller number when one divides the other', () => {
      expect(iterativeGcd(100, 50)).toBe(50);
    });

    it('returns 1 for coprime numbers', () => {
      expect(iterativeGcd(13, 7)).toBe(1);
    });

    it('returns n for GCD(n, 0)', () => {
      expect(iterativeGcd(5, 0)).toBe(5);
    });

    it('returns n for GCD(0, n)', () => {
      expect(iterativeGcd(0, 5)).toBe(5);
    });
  });

  describe('negative numbers', () => {
    it('handles negative first number', () => {
      expect(iterativeGcd(-12, 8)).toBe(4);
    });

    it('handles negative second number', () => {
      expect(iterativeGcd(12, -8)).toBe(4);
    });

    it('handles both negative numbers', () => {
      expect(iterativeGcd(-12, -8)).toBe(4);
    });
  });

  describe('edge cases', () => {
    it('throws error for GCD(0, 0)', () => {
      expect(() => iterativeGcd(0, 0)).toThrow('GCD(0, 0) is undefined');
    });

    it('throws error for non-integer first number', () => {
      expect(() => iterativeGcd(3.5, 2)).toThrow('Both numbers must be integers');
    });

    it('throws error for non-integer second number', () => {
      expect(() => iterativeGcd(3, 2.5)).toThrow('Both numbers must be integers');
    });
  });
});