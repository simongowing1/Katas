function dirReduc(arr) {
  // declare new stack, which is an empty array
  const stack = [];
  // iterate over the direction array (each current value is 'direction')
  arr.forEach((direction) => {
    // declare variable which is the last element of the stack
    const last = stack.pop();
    // if there is a last element of the stack (ie the value is not undefined)
    if (last !== undefined) {
      // check what that last element of the stack is
      switch (last) {
        // if last is NORTH
        case 'NORTH':
          // and the current value in the array is not SOUTH
          if (direction !== 'SOUTH') {
            // push last into the stack
            stack.push(last);
            // push the direction into the stack
            stack.push(direction);
          }
          break;
        case 'SOUTH':
          if (direction !== 'NORTH') {
            stack.push(last);
            stack.push(direction);
          }
          break;
        case 'WEST':
          if (direction !== 'EAST') {
            stack.push(last);
            stack.push(direction);
          }
          break;
        case 'EAST':
          if (direction !== 'WEST') {
            stack.push(last);
            stack.push(direction);
          }
          break;
        // a switch should always have a default case
        default:
      }
    } else {
      // push the direction into the stack
      stack.push(direction);
    }
  });
  // return the stack
  return stack;
}

// TESTS

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
// ["WEST"])

dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);
// //["NORTH", "WEST", "SOUTH", "EAST"])

dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']);
// [])

dirReduc(['NORTH', 'SOUTH', 'WEST']);
// ['WEST']
