// https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98/train/javascript/60c0fcf3fcfa030028024ff9

// REFACTORED SOLUTION

function i(word) {
  // declare variable of the number of vowels in the string
  const vowelsInString = word.split(/[aeiou]/gi).length - 1;
  // declare variable of the number of consonants in the string
  const consonantsInString = word.split(/[^aeiou]/gi).length - 1;
  // if the string is empty...
  if (word === ''
  // or if the first letter is lowercase
        || word[0] !== word[0].toUpperCase()
        // or if the first letter is 'I'
        || word[0] === 'I'
        // or if the number of vowels is higher or equal to the number of consonants
        || vowelsInString >= consonantsInString) {
    // return 'Invalid word'
    return 'Invalid word';
  }
  // else return template literal
  return `i${word}`;
}
