// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript

// REFACTORED SOLUTION
// In this solution the use of Array(n) solves my original problem
// by creating an array of length 'n' for each substring and then filling it with the map function.
function scale(strng, k, n) {
  // if the string is empty, return an empty string
  if (strng === '') return '';
  // split the string using '\n' as the seperator
  return strng.split('\n')
  // map through the split array creating an array of length 'n' for each of them
    .map((substring) => Array(n)
    // fill each value of this array with the substring using the spread operator
      .fill([...substring]
        // map through each element of the array
        // split into letters and repeat each letter 'k' times
        .map((letter) => letter.repeat(k))
        // join repeated letters back into the substring string
        .join(''))
    // join the substrings together using '\n' as the seperator
      .join('\n'))
  // join each value of the array into a string using '\n' as the seperator
    .join('\n');
}

// ORIGINAL SOLUTION
// I was hitting a wall with this solution because I could not figure out how to
// replicate the values of the array 'k' times.
// In the end I put together a less than satisfactory solution using template literals
// and concatenation. Not ideal.

function scale(strng, k, n) {
  // if the string is empty, return an empty string
  if (strng === '') return '';
  // declare empty array for the answer
  const answer = [];
  // split into seperate sections by using '/n' as seperator
  strng.split('\n')
    // loop through the array
    .forEach((substring) => {
      // declare variable of all the letters in each substring repeated k times
      // this is done by splitting the substring into letters
      const repeatedLetterString = substring.split('')
      // then mapping through the array of letters and repeating each letter k times
        .map((letter) => letter.repeat(k))
      // then joining the resultant array into a string with no spaces
        .join('');
      // concat the repeated letter string with a repetition of that string
      // (starting with a new line) n-1 times
      // push into the answer array
      answer.push(repeatedLetterString + (`\n${repeatedLetterString}`).repeat(n - 1));
    });
  // join the elements of the answer array into a string using '\n' as the seperator
  return answer.join('\n');
}
