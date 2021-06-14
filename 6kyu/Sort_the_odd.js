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
    // return the next value from the odd Array
    // splice also removes that number from the array
    // 'Number()' turns it into a number rather than a single value array
    return Number(oddArray.splice(0, 1));
  });
  // return sortedArray
  return sortedArray;
}
