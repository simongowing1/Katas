import { describe, expect, it } from '@jest/globals';
import { isPrime } from './Prime_or_not';

describe('isPrime', () => {
  describe('when a number is prime', () => {
    it('returns 1', () => {
      const num = 13;
      const result = isPrime(num);
      expect(result).toEqual(1);
    });
  });
  describe('when a number is not prime', () => {
    it('returns the lowest divisor (larger than 1)', () => {
      const num = 12;
      const result = isPrime(num);
      expect(result).toEqual(2);
    });
    it('returns lowest divisor larger than 1) when number is not even', () => {
      const num = 15;
      const result = isPrime(num);
      expect(result).toEqual(3);
    });
  });
  describe('when number is more than 3 digits', () => {
    it('returns the common directory path', () => {
      const num = 6001;
      const result = isPrime(num);
      expect(result).toEqual(17);
    });
  });
});
