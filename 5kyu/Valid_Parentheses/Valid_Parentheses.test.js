import { expect, describe, it } from '@jest/globals';
import { validParentheses } from './Valid_Parentheses';

describe('Valid Parentheses', () => {
  describe('validParentheses', () => {
    it('Takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it is invalid.', () => {
      const string = '())';
      expect(validParentheses(string)).toEqual(false);
    });

    it('Takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it is invalid.', () => {
      const string = '())(()';
      expect(validParentheses(string)).toEqual(false);
    });

    it('Takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it is invalid.', () => {
      const string = '()';
      expect(validParentheses(string)).toEqual(true);
    });
  });
});
