import { test, describe, expect } from '@jest/globals';
import { getLastNDataValues, list } from './KSI2_code_challenge';

describe('Example Tests', () => {
  test('Return deepest value of data key in object', () => {
    expect(getLastNDataValues(list, 1))
      .toEqual(['$']);
  });
  test('Return deepest three values of data key in object', () => {
    expect(getLastNDataValues(list, 3))
      .toEqual([199, 'Klarna', '$']);
  });
});
