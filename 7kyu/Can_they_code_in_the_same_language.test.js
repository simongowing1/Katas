import { test, describe, expect } from '@jest/globals';
import { isSameLanguage } from './Can_they_code_in_the_same_language';

const list1 = [
  {
    firstName: 'Daniel',
    lastName: 'J.',
    country: 'Aruba',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Hanna',
    lastName: 'L.',
    country: 'Hungary',
    continent: 'Europe',
    age: 65,
    language: 'JavaScript',
  },
];

const list2 = [
  {
    firstName: 'Mariami',
    lastName: 'G.',
    country: 'Georgia',
    continent: 'Europe',
    age: 29,
    language: 'Python',
  },
  {
    firstName: 'Mia',
    lastName: 'H.',
    country: 'Germany',
    continent: 'Europe',
    age: 39,
    language: 'Ruby',
  },
  {
    firstName: 'Maria',
    lastName: 'I.',
    country: 'Greece',
    continent: 'Europe',
    age: 32,
    language: 'C',
  },
];

describe('Example Tests', () => {
  test('Return true if all languages are the same', () => {
    expect(isSameLanguage(list1))
      .toEqual(true);
  });
  test('Return false if not all languages are the same', () => {
    expect(isSameLanguage(list2))
      .toEqual(false);
  });
});
