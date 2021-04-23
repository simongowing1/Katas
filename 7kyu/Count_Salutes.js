function countSalutes(hallway) {
  // define a variable to store the number of 'salutes'
  let salutes = 0;
  // iterate over the hallway string using a for loop
  for (let i = 0; i < hallway.length; i += 1) {
    // if the value of the current index is '>'...
    if (hallway[i] === '>') {
      // loop through the remaining string from the next index ('y')
      for (let y = i + 1; y < hallway.length; y += 1) {
        // if the next index is '<', +2 to the salutes variable
        if (hallway[y] === '<') {
          salutes += 2;
        }
      }
    }
  }
  // return the number of salutes
  return salutes;
}

countSalutes('<---->---<---<-->');
// 4
countSalutes('------');
// 0
countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->');
// 42
countSalutes('<<----<>---<');
// 2
countSalutes('>');
// 0
