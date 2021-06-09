// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript

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
