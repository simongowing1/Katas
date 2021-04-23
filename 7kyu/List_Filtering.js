/* eslint-disable implicit-arrow-linebreak */
// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

function filterList(l) {
  // iterate over array using filter
  return l.filter((value) =>
  // only return the value if its type is 'number'
    typeof value === 'number');
}

filterList([1, 2, 'a', 'b']);
// [1,2]
filterList([1, 2, 'a', 'b']);
// [1,2]
filterList([1, 2, 'aasf', '1', '123', 123]);
// [1,2,123]
