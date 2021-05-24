const smoothie = {
  Classic: ['strawberry', 'banana', 'pineapple', 'mango', 'peach', 'honey', 'ice', 'yogurt'],
  'Forest Berry': ['strawberry', 'raspberry', 'blueberry', 'honey', 'ice', 'yogurt'],
  Freezie: ['blackberry', 'blueberry', 'black currant', 'grape juice', 'frozen yogurt'],
  Greenie: ['green apple', 'kiwi', 'lime', 'avocado', 'spinach', 'ice', 'apple juice'],
  'Vegan Delite': ['strawberry', 'passion fruit', 'pineapple', 'mango', 'peach', 'ice', 'soy milk'],
  'Just Desserts': ['banana', 'ice cream', 'chocolate', 'peanut', 'cherry'],
};

function ingredients(order) {
  const smoothieOrder = order.split(',-');
  const smoothieName = smoothieOrder[0];
  const finalIngredients = smoothie[smoothieName].filter((ingredient) => !smoothieOrder.includes(ingredient));
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
