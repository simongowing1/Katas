import { test, describe, expect } from '@jest/globals';
import { ingredients } from './KG2_code_challenge';

describe('Example Tests', () => {
  test('returns the argument smoothie without the specified ingredients', () => {
    expect(ingredients('Classic,-banana'))
      .toBe('honey,ice,mango,peach,pineapple,strawberry,yogurt');
    expect(ingredients('Greenie,-kiwi,-ice,-spinach'))
      .toBe('apple juice,avocado,green apple,lime');
  });
  test('If no ingredients are specified in the argument, return the full smoothie recipe', () => {
    expect(ingredients('Vegan Delite'))
      .toBe('ice,mango,passion fruit,peach,pineapple,soy milk,strawberry');
  });
  test('If the specified ingredients are not in the original recipe, subtract only the relevent ingredients', () => {
    expect(ingredients('Just Desserts,-strawberry,-peanut'))
      .toBe('banana,cherry,chocolate,ice cream');
  });
});

// TESTS
// ingredients('Classic,-banana');
// 'honey,ice,mango,peach,pineapple,strawberry,yogurt'
// ingredients('Greenie,-kiwi,-ice,-spinach');
// 'apple juice,avocado,green apple,lime'
// ingredients('Vegan Delite');
// 'ice,mango,passion fruit,peach,pineapple,soy milk,strawberry'
// ingredients('Just Desserts,-strawberry');
// it should work when ingredients not originally included are subtracted
// 'banana,cherry,chocolate,ice cream,peanut'
