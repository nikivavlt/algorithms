import { recursiveFibonacci, iterativeFibonacci } from '../../src/math/fibonacci';

describe('recursiveFibonacci', () => {
    describe('base cases', () => {
      it('returns 0 for n = 0', () => {
        expect(recursiveFibonacci(0)).toBe(0);
      });
  
      it('returns 1 for n = 1', () => {
        expect(recursiveFibonacci(1)).toBe(1);
      });
    });
  
    describe('small numbers', () => {
      it('returns 1 for n = 2', () => {
        expect(recursiveFibonacci(2)).toBe(1);
      });
  
      it('returns 2 for n = 3', () => {
        expect(recursiveFibonacci(3)).toBe(2);
      });
  
      it('returns 3 for n = 4', () => {
        expect(recursiveFibonacci(4)).toBe(3);
      });
  
      it('returns 5 for n = 5', () => {
        expect(recursiveFibonacci(5)).toBe(5);
      });
    });
  
    describe('larger numbers', () => {
      it('returns 8 for n = 6', () => {
        expect(recursiveFibonacci(6)).toBe(8);
      });
  
      it('returns 21 for n = 8', () => {
        expect(recursiveFibonacci(8)).toBe(21);
      });
  
      it('returns 55 for n = 10', () => {
        expect(recursiveFibonacci(10)).toBe(55);
      });
  
      it('returns 6765 for n = 20', () => {
        expect(recursiveFibonacci(20)).toBe(6765);
      });
    });
  
    describe('edge cases', () => {
      it('handles negative input', () => {
        expect(() => recursiveFibonacci(-1)).toThrow('Index must be non-negative');
      });
  
      it('handles non-integer input', () => {
        expect(() => recursiveFibonacci(3.5)).toThrow('Index must be an integer');
      });
    });
});

describe('iterativeFibonacci', () => {
  describe('base cases', () => {
    it('returns 0 for n = 0', () => {
      expect(iterativeFibonacci(0)).toBe(0);
    });

    it('returns 1 for n = 1', () => {
      expect(iterativeFibonacci(1)).toBe(1);
    });
  });

  describe('small numbers', () => {
    it('returns 1 for n = 2', () => {
      expect(iterativeFibonacci(2)).toBe(1);
    });

    it('returns 2 for n = 3', () => {
      expect(iterativeFibonacci(3)).toBe(2);
    });

    it('returns 3 for n = 4', () => {
      expect(iterativeFibonacci(4)).toBe(3);
    });

    it('returns 5 for n = 5', () => {
      expect(iterativeFibonacci(5)).toBe(5);
    });
  });

  describe('larger numbers', () => {
    it('returns 8 for n = 6', () => {
      expect(iterativeFibonacci(6)).toBe(8);
    });

    it('returns 21 for n = 8', () => {
      expect(iterativeFibonacci(8)).toBe(21);
    });

    it('returns 55 for n = 10', () => {
      expect(iterativeFibonacci(10)).toBe(55);
    });

    it('returns 6765 for n = 20', () => {
      expect(iterativeFibonacci(20)).toBe(6765);
    });
  });

  describe('edge cases', () => {
    it('handles negative input', () => {
      expect(() => iterativeFibonacci(-1)).toThrow('Index must be non-negative');
    });

    it('handles non-integer input', () => {
      expect(() => iterativeFibonacci(3.5)).toThrow('Index must be an integer');
    });
  });
});