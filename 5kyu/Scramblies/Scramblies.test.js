import { test, describe, expect } from '@jest/globals';
import { scramble } from './Scramblies';

describe('Example Tests', () => {
  test('returns true if the word is included in the scrambled string', () => {
    expect(scramble('rkqodlw', 'world'))
      .toBe(true);
    expect(scramble('cedewaraaossoqqyt', 'codewars'))
      .toBe(true);
    expect(scramble('scriptjava', 'javascript'))
      .toBe(true);
    expect(scramble('scriptingjava', 'javascript'))
      .toBe(true);
    expect(scramble('scriptsjava', 'javascripts'))
      .toBe(true);
    expect(scramble('aabbcamaomsccdd', 'commas'))
      .toBe(true);
  });
  test('returns false if the word is included in the scrambled string', () => {
    expect(scramble('katas', 'steak'))
      .toBe(false);
    expect(scramble('jscripts', 'javascript'))
      .toBe(false);
  });
});

// CODEWARS TESTS
//   Test.assertEquals(scramble('cedewaraaossoqqyt', 'codewars'), true);
//   Test.assertEquals(scramble('katas', 'steak'), false);
//   Test.assertEquals(scramble('scriptjava', 'javascript'), true);
//   Test.assertEquals(scramble('scriptingjava', 'javascript'), true);
//   Test.assertEquals(scramble('scriptsjava', 'javascripts'), true);
//   Test.assertEquals(scramble('jscripts', 'javascript'), false);
//   Test.assertEquals(scramble('aabbcamaomsccdd', 'commas'), true);
