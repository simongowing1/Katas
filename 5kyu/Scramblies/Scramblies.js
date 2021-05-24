/* eslint-disable import/prefer-default-export */

// MY ORIGINAL SOLUTION

// the problem is that this does not work with very long numbers
// it times-out while looping over the given arguments
// so I need to find a new solution...

// export function scramble(str1, str2) {
//   const scrambledArray = str1.split('');
//   const wordArray = str2.split('');
//   const lettersInArray = [];
//   wordArray.forEach((letter) => {
//     if (scrambledArray.includes(letter)) {
//       scrambledArray.splice(scrambledArray.indexOf(letter), 1);
//       lettersInArray.push(letter);
//     }
//   });
//   if (lettersInArray.join('') === wordArray.join('')) {
//     return true;
//   } return false;
// }

// REVISED SOLUTION

export function scramble(str1, str2) {
  // declare empty object
  const str1Object = {};
  // declare array of each letter in the str2 argument
  const str2Array = str2.split('');
  // declare empty array to contain the letters in common
  const lettersInStr1 = [];
  // add each letter in str1 to str1Object as a key
  // value is the frequency of its occurance
  str1.split('').forEach((letter) => {
    // ie if the letter is not in the object already...
    if (!str1Object[letter]) {
      // set it's value to 1
      str1Object[letter] = 1;
      // if it does already exist in the object, add one to the value
    } else { str1Object[letter] += 1; }
  });
  // iterate over str2Array
  str2Array.forEach((letter) => {
    // for each letter in the array we check whether its value in the object
    // if the value is more than 0
    if (str1Object[letter] > 0) {
    // add the letter to the end of the lettersInStr1 array
      lettersInStr1.push(letter);
      // and remove one from the value in the object
      str1Object[letter] -= 1;
    }
  });
  // if the array joined into a string equals the str2 argument, then return true
  // else return false
  return lettersInStr1.join('') === str2;
}
