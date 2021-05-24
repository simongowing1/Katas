import { expect, describe, it } from '@jest/globals';
import { pigIt } from './Simple_Pig_Latin';

describe('Simple Pig Latin', () => {
  describe('pigIt', () => {
    it('correctly adds ay to the end of a word', () => {
      const text = 'foo';
      expect(pigIt(text)).toEqual('oofay');
    });

    describe('when the text ends with a punctuation point', () => {
      it('does not affect the punctuation point', () => {
        const text = 'O tempora o mores !';
        const result = 'Oay emporatay oay oresmay !';

        expect(pigIt(text)).toEqual(result);
      });
    });
  });
});
