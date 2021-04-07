// https://www.codewars.com/kata/57ee24e17b45eff6d6000164
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.

function catMouse(x){
    //replace c and m with ''
   return x.replace(/[A-Z]/gi, '')
     //find the length of the remaining string
     .length
    //if that string is longer than 3, return 'Escaped!'
    > 3 ? 'Escaped!'
   //else return 'Caught!'
   : 'Caught!'
  }
  
  catMouse('C....m')
  //"Escaped!");
  catMouse('C..m')
  //"Caught!");
  catMouse('C.....m')
  //"Escaped!");