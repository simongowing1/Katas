// https://www.codewars.com/kata/527a6e602a7db3456e000a2b

// You are given a complex object that has many deeply nested variables.
// You don't want to go the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return the value or undefined.

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.',
      },
    },
  },
};

function hash(string) {
  // declare a variable with the object as a value
  let accValue = obj;
  // declare a variable with no value to contain the final value (answer)
  let finalValue;
  // declare a variable of the string split into indivdual arguments
  const argumentArray = string.split('.');
  // iterate through the array
  for (let i = 0; i < argumentArray.length; i += 1) {
    // declare a variable which is the value of the current key in the object
    const currentValue = accValue[argumentArray[i]];
    // if there is a value
    if (currentValue) {
      // set this value to be the finalValue (answer)
      finalValue = currentValue;
      // set this value to be the starting value for the next iteration
      accValue = currentValue;
      // if there is no value
    } else {
      // change finalValue to undefined
      finalValue = undefined;
      // and stop it iterating through the array
      break;
    }
  }
  // Return final valuegit st
  return finalValue;
}

// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined
