// create smoothie as a data structure:
// smoothie is an object of arrays
// the name of the smoothie is the key, with an array of ingredients
// each ingredient is a string value contained within the array
const smoothie = {
  Classic: ['strawberry', 'banana', 'pineapple', 'mango', 'peach', 'honey', 'ice', 'yogurt'],
  'Forest Berry': ['strawberry', 'raspberry', 'blueberry', 'honey', 'ice', 'yogurt'],
  Freezie: ['blackberry', 'blueberry', 'black currant', 'grape juice', 'frozen yogurt'],
  Greenie: ['green apple', 'kiwi', 'lime', 'avocado', 'spinach', 'ice', 'apple juice'],
  'Vegan Delite': ['strawberry', 'passion fruit', 'pineapple', 'mango', 'peach', 'ice', 'soy milk'],
  'Just Desserts': ['banana', 'ice cream', 'chocolate', 'peanut', 'cherry'],
};

function ingredients(order) {
  // create a constant array by splitting the argument string
  // index 0 is the name of the smoothie, followed by the ingredients to be removed
  const smoothieOrder = order.split(',-');
  // declare the name of the smoothie as a constant (it is index 0 of the new array)
  const smoothieName = smoothieOrder[0];
  // declare a variable of the final ingredients of the smoothie
  // the ingredients are accessed through calling smoothieName as the key
  const finalIngredients = smoothie[smoothieName]
  // filter through the ingredients in the smoothie
  // only return the ingredients that are not included in the smoothieOrder array
    .filter((ingredient) => !smoothieOrder.includes(ingredient));
    // return the finalIngredients array in alphabetical order using .sort()
    // join the array into a string separated by commas
  return finalIngredients.sort().join(',');
}

// TESTS
ingredients('Classic,-banana');
// 'honey,ice,mango,peach,pineapple,strawberry,yogurt'
ingredients('Greenie,-kiwi,-ice,-spinach');
// 'apple juice,avocado,green apple,lime'
ingredients('Vegan Delite');
// 'ice,mango,passion fruit,peach,pineapple,soy milk,strawberry'
ingredients('Just Desserts,-strawberry');
// it should work when ingredients not originally included are subtracted
// 'banana,cherry,chocolate,ice cream,peanut'
