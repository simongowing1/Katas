import { test, describe, expect } from '@jest/globals';
import { maskify } from './KG1_code_challenge';

describe('Example Tests', () => {
  test('correctly masks the central section of a string of digits', () => {
    expect(maskify('5512103073210694'))
      .toBe('5###########0694');
  });
  test('for strings shorter than 6 digits, the original string is returned', () => {
    expect(maskify('54321'))
      .toBe('54321');
  });
  test('does not mask non-digit values in the string', () => {
    expect(maskify('3456JOEEXOTICxxx59'))
      .toBe('3###JOEEXOTICxxx59');
    expect(maskify('5512-1030-7321-0694'))
      .toBe('5###-####-####-0694');
  });
});

// TESTS
// maskify('5512103073210694');
// '5###########0694'
// maskify('54321');
// '54321'
// maskify('3456JOEEXOTICxxx59');
// '3###JOEEXOTICxxx59'
// maskify('5512-1030-7321-0694');
// '5###-####-####-0694'
