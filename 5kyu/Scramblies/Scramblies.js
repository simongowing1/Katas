/* eslint-disable import/prefer-default-export */
// MY ORIGINAL SOLUTION
// the problem is that this does not work with very long numbers
// it times-out while looping over the given arguments
// so I need to find a new solution...
export function scramble(str1, str2) {
  const scrambledArray = str1.split('');
  const wordArray = str2.split('');
  const lettersInArray = [];
  wordArray.forEach((letter) => {
    if (scrambledArray.includes(letter)) {
      scrambledArray.splice(scrambledArray.indexOf(letter), 1);
      lettersInArray.push(letter);
    }
  });
  if (lettersInArray.join('') === wordArray.join('')) {
    return true;
  } return false;
}

// export function scramble(str1, str2) {
//   const str1Index = {};
//   const str2Index = {};
//   for (let i = 0; i < str1.length; i += 1) {
//     if (!str1Index[str1[i]]) {
//       str1Index[str1[i]] = 1;
//     } else {
//       str1Index[str1[i]] = str1Index[str1[i]] + 1;
//     }
//   }
//   for (let i = 0; i < str2.length; i += 1) {
//     if (!str2Index[str2[i]]) {
//       str2Index[str2[i]] = 1;
//     } else {
//       str2Index[str2[i]] = str2Index[str2[i]] += 1;
//     }
//   }
//   for (char in str2Index) {
//     if (str1Index[char] < str2Index[char] || str1Index[char] === undefined) {
//       return false;
//     }
//   }
//   return true;
// }
