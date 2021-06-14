// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/

function sortArray(array) {
  if (array === []) return [];
  // create array of odd numbers
  const oddArray = array.filter((number) => number % 2 !== 0)
    // and sort it
    .sort((a, b) => a - b);
  // declare a new variable
  // map through the original array
  const sortedArray = array.map((number) => {
    // if the number is even
    if (number % 2 === 0) {
      // return the same value
      return number;
    }
    // if the number is odd
    // return index[0] from the odd Array
    // shift also removes the first index in prep for the next iteration
    return oddArray.shift();
  });
  // return sortedArray
  return sortedArray;
}
