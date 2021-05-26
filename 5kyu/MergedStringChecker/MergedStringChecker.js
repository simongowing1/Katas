/* eslint-disable import/prefer-default-export */

// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript

// ORIGINAL SOLUTION

// This passes the first tests but throws the following problems,
// with the following inputs:

// 'can handle empty parts'
// s: 'codewars', part1: 'codewars', part2: ''
// 'Unspecified AssertionError'

// 'can handle extra characters'
// s: 'codewars', part1: 'code', part2: 'warss'
// 'codewars !== code + warss'

// 'can handle characters in wrong order'
// s: 'codewars', part1: 'code', part2: 'wasr'
// 'codewars can't be created from code and wasr'

export function isMerge(s, part1, part2) {
  // declare array containing both arguments part 1 and part 2
  const lettersIndex = [...part1, ...part2];
  // declare empty object to contain the letters in the arguments
  const lettersIndexObject = {};
  // declare empty array to contain the matched letters
  const lettersInString = [];
  // iterated over the index of letters
  lettersIndex.forEach((letter) => {
    // if the object doesn't already contain the letter as a key,
    if (!lettersIndexObject[letter]) {
      // add the letter as a key with a value of 1
      lettersIndexObject[letter] = 1;
      // else (if the letter does already exist as a value)
    } else {
      // add one to the value of the letter
      lettersIndexObject[letter] += 1;
    }
  });
  // iterate over the string split into an array
  s.split('').forEach((letter) => {
    // if the object contains the letter
    if (lettersIndexObject[letter] > 0) {
      // push the letter into the empty array
      lettersInString.push(letter);
      // and remove one from the value in the object
      lettersIndexObject[letter] -= 1;
    }
  });
  // if the array of letters, joined, is the same as the argument string,
  // return true
  return lettersInString.join('') === s;
  // else return false
}
