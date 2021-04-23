/* eslint-disable consistent-return */
// Coding challenge from Hai's interview at SAP
// Given a string of characters find the first character that occurs only once
// e.g., in `supercalifragilisticexpialidocious` it is `f`

function occursOnce(string) {
  // iterate over the string
  for (let i = 0; i < string.length; i += 1) {
    // variable is the value of the current index
    const letter = string.charAt(i);
    // if the index of the current value is also the same as the index of the last example
    // ie it is the only occurance in the string
    if (string.indexOf(letter) === string.lastIndexOf(letter)) {
      // return the value
      return letter;
    }
  }
}

occursOnce('supercalifragilisticexpialidocious');
// 'f'
