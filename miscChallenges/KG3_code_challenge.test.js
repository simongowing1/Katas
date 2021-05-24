import { test, describe, expect } from '@jest/globals';
import { dirReduc } from './KG3_code_challenge';

describe('Example Tests', () => {
  test('Removes adjacent opposing pairs and returns the remaining directions', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']))
      .toStrictEqual(['WEST']);
    expect(dirReduc(['NORTH', 'SOUTH', 'WEST']))
      .toStrictEqual(['WEST']);
  });
  test('If opposing pairs are not adjacent, return them', () => {
    expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']))
      .toStrictEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
  });
  test('If only opposing pairs are included, return an empty array', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']))
      .toStrictEqual([]);
  });
});

// TESTS

// dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
// // ["WEST"])

// dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);
// // //["NORTH", "WEST", "SOUTH", "EAST"])

// dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);
// // [])

// dirReduc(['NORTH', 'SOUTH', 'WEST']);
// // ['WEST']
