import { test, describe, expect } from '@jest/globals';
import { breakChocolate } from './KSI1_code_challenge';

describe('Example Tests', () => {
  test('Return 0 if any of the inputs are invalid', () => {
    expect(breakChocolate(0, 0))
      .toEqual(0);
  });
  test('Function returns correct answer', () => {
    expect(breakChocolate(1, 1))
      .toEqual(0);
    expect(breakChocolate(2, 1))
      .toEqual(1);
    expect(breakChocolate(3, 1))
      .toEqual(2);
    expect(breakChocolate(5, 5))
      .toEqual(24);
    expect(breakChocolate(7, 4))
      .toEqual(27);
  });
});
