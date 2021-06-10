// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/solutions/javascript

// REFACTORED SOLUTION

function well(x) {
  // declare an empty array
  const justGoods = [];
  // iterate through the argument to create one array of all the reviews called 'allReviews'
  x.forEach((subArray) =>
  // filter each subarray and push only the values that include 'good' into the new array
    justGoods.push(...subArray.filter((value) =>
    // make values into strings
      value.toString()
      // make lowercase inorder to compare to 'good'
        .toLowerCase() === 'good')));
  if (justGoods.length === 0) return 'Fail!';
  if (justGoods.length <= 2) return 'Publish!';
  if (justGoods.length > 2) return 'I smell a series!';
}

// ORIGINAL SOLUTION
// function well(x) {
//   // declare an empty array
//   const allReviews = [];
//   // iterate through the argument to create one array of all the reviews called 'allReviews'
//   x.forEach((subArray) =>
//   // push all subarrays into the new array using the spread operator
//     allReviews.push(...subArray));
//   // declare a new array of filtered values
//   const justGoods = allReviews.filter((value) =>
//   // make all values into strings
//     value.toString()
//     // make all values into lowercase
//       .toLowerCase() === 'good');
//   if (justGoods.length === 0) return 'Fail!';
//   if (justGoods.length <= 2) return 'Publish!';
//   if (justGoods.length > 2) return 'I smell a series!';
//   // filter the nested arrays to contain only 'good'
//   // if it contains less than two good
// }
