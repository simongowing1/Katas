/* eslint-disable default-case */
/* eslint-disable implicit-arrow-linebreak */
// https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/javascript

// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3
// in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations
// (like stack underflow or division by zero).

// CORRECT SOLUTION
// (full disclosure, the pop() and switch statement at the end was something
// that was inspired by another's solution.
// It makes the solution scalable rather than restricted by the complexity of the argument)

function calc(expr) {
  // if the string is empty, return 0
  if (expr === '') return 0;
  // split the string into an array of strings
  const splitString = expr.split(' ')
    // map over the new array
    .map((el) =>
    // if the value of the index is not a number
      (el.isNaN(Number(el))
      // return the value (these are the operators)
        ? el
      // else return the value as a number
        : Number(el)));
    // if the array is only one index long(there is only one number in it), return the number
  if (splitString.length === 1) return splitString[0];

  // define a stack (an array that can only contain numbers)
  const stack = [];
  // loop over the splitString array
  for (let i = 0; i < splitString.length; i += 1) {
    // if the value of the present index is a number, push the value into the stack
    if (typeof splitString[i] === 'number') stack.push(splitString[i]);
    else {
      // take the last index of the stack (the value of the previous index), remove it and
      // store it as the variable 'a'
      const a = stack.pop();
      // then take the previous index of the stack (the value of the previous index),
      // remove it and store it as the variable 'b'
      const b = stack.pop();

      // use a switch statement to check which operator is present in the current index position
      switch (splitString[i]) {
        // if +, then add a and b and push back into the stack
        case '+':
          stack.push(a + b);
          break;
          // if -, subtract a from b and push back into the stack
        case '-':
          stack.push(b - a);
          break;
          // if /, divide a by b and push back into the stack
        case '/':
          stack.push(b / a);
          break;
          // if *, multiply a by b and push back into the stack
        case '*':
          stack.push(a * b);
          break;
      }
    }
  }
  // Once there is only one index, return it
  return stack[0];
}

// ORIGINAL SOLUTION
// (Doesn't pass all tests because it can't handle expressions more complicated than
// <number number operator>)

// function calc (expr) {
//     //split the string into an array, using ' ' as a seperator
//     let splitString = expr.split(' ')
//      //if expr is empty return 0
//     if (expr === '') return 0;
//     //if array is just one index long then parse and return it
//     if (splitString.length === 1) return Number(expr)
//     //return the sum of the string using 'eval'
//   return eval(
//     //take the last index (the operator) and insert it into a string between index 0 and 1
//     splitString[0]
//     + splitString[splitString.length-1]
//     + splitString[1])
//   }

// TESTS

calc('');
// //0, "Should work with empty string");
calc('3');
// //3, "Should parse numbers");
calc('3.5');
// //3.5, "Should parse float numbers");
calc('1 3 +');
// //4, "Should support addition");
calc('1 3 *');
// //3, "Should support multiplication");
calc('1 3 -');
// //-2, "Should support subtraction");
calc('4 2 /');
// //2, "Should support division");
calc('5 1 2 + 4 * + 3 -');
// 14, "Should work with complex expressions"
