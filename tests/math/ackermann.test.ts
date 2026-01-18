import { ackermann } from '../../src/math/ackermann';

describe('ackermann', () => {
  describe('base case: m = 0', () => {
    it('returns n + 1 when m = 0', () => {
      expect(ackermann(0, 0)).toBe(1);
      expect(ackermann(0, 1)).toBe(2);
      expect(ackermann(0, 5)).toBe(6);
      expect(ackermann(0, 10)).toBe(11);
      expect(ackermann(0, 100)).toBe(101);
    });
  });

  describe('m = 1', () => {
    it('calculates A(1, 0) = 2', () => {
      expect(ackermann(1, 0)).toBe(2);
    });

    it('calculates A(1, 1) = 3', () => {
      expect(ackermann(1, 1)).toBe(3);
    });

    it('calculates A(1, 2) = 4', () => {
      expect(ackermann(1, 2)).toBe(4);
    });

    it('calculates A(1, 5) = 7', () => {
      expect(ackermann(1, 5)).toBe(7);
    });

    it('calculates A(1, 10) = 12', () => {
      expect(ackermann(1, 10)).toBe(12);
    });
  });

  describe('m = 2', () => {
    it('calculates A(2, 0) = 3', () => {
      expect(ackermann(2, 0)).toBe(3);
    });

    it('calculates A(2, 1) = 5', () => {
      expect(ackermann(2, 1)).toBe(5);
    });

    it('calculates A(2, 2) = 7', () => {
      expect(ackermann(2, 2)).toBe(7);
    });

    it('calculates A(2, 3) = 9', () => {
      expect(ackermann(2, 3)).toBe(9);
    });

    it('calculates A(2, 5) = 13', () => {
      expect(ackermann(2, 5)).toBe(13);
    });

    it('calculates A(2, 10) = 23', () => {
      expect(ackermann(2, 10)).toBe(23);
    });
  });

  describe('m = 3 (computationally intensive)', () => {
    it('calculates A(3, 0) = 5', () => {
      expect(ackermann(3, 0)).toBe(5);
    });

    it('calculates A(3, 1) = 13', () => {
      expect(ackermann(3, 1)).toBe(13);
    });

    it('calculates A(3, 2) = 29', () => {
      expect(ackermann(3, 2)).toBe(29);
    });

    it('calculates A(3, 3) = 61', () => {
      expect(ackermann(3, 3)).toBe(61);
    });

    it('calculates A(3, 4) = 125', () => {
      expect(ackermann(3, 4)).toBe(125);
    });

    it('calculates A(3, 5) = 253', () => {
      expect(ackermann(3, 5)).toBe(253);
    });

    it('calculates A(3, 6) = 509', () => {
      expect(ackermann(3, 6)).toBe(509);
    });
  });

  describe('m = 4 (only safe values)', () => {
    it('calculates A(4, 0) = 13', () => {
      expect(ackermann(4, 0)).toBe(13);
    });
  });

  describe('edge cases', () => {
    it('throws error for negative m', () => {
      expect(() => ackermann(-1, 0)).toThrow('Both arguments must be non-negative integers');
    });

    it('throws error for negative n', () => {
      expect(() => ackermann(0, -1)).toThrow('Both arguments must be non-negative integers');
    });

    it('throws error for non-integer m', () => {
      expect(() => ackermann(1.5, 0)).toThrow('Both arguments must be non-negative integers');
    });

    it('throws error for non-integer n', () => {
      expect(() => ackermann(0, 2.5)).toThrow('Both arguments must be non-negative integers');
    });
  });
});