// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript

function findUniq(arr) {
  // Filter the array
  return arr
    // Only return the values where the index is also the last index
    .filter((number) => arr.indexOf(number) === arr.lastIndexOf(number))[0];
  // return the first and only index in the array
}

findUniq([0, 1, 0]);
// , 1);
findUniq([1, 1, 1, 2, 1, 1]);
// , 2);
findUniq([3, 10, 3, 3, 3]);
// , 10);
