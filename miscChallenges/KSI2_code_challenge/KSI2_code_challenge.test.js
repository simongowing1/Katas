import { test, describe, expect } from '@jest/globals';
import { getLastNDataValues, listObject } from './KSI2_code_challenge';

describe('Example Tests', () => {
  test('Return deepest value of data key in object', () => {
    expect(getLastNDataValues(listObject, 1))
      .toEqual(['$']);
  });
  test('Return deepest three values of data key in object', () => {
    expect(getLastNDataValues(listObject, 3))
      .toEqual([199, 'Klarna', '$']);
  });
});
