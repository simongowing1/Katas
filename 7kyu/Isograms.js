// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is
// an isogram. Assume the empty string is an isogram. Ignore letter case.

// MY SOLUTION
function isIsogram(str) {
  // Declare a variable of the argument string as lowercase
  const lowercaseString = str.toLowerCase();
  // Declare a counter variable
  let counter = 0;
  // Declare an empty array to push the duplicates into
  const arrOfDuplicates = [];
  // split the lowercase string
  lowercaseString.split('')
    // loop through the string
    .forEach((letter) => {
      // if the array of duplicates doesn't include the current value in the loop
      if (!arrOfDuplicates.includes(letter)
        // and the number of the repetitions in the string is more than 1
        && (lowercaseString.split(letter).length - 1) > 1) {
        // add one to the counter
        counter += 1;
        // push the current value to the end of the duplicates array
        arrOfDuplicates.push(letter);
      }
    });
  // if the counter is higher than 1, return false, else return true
  return !(counter > 0);
}

// TESTS

isIsogram('Dermatoglyphics');
// true );
isIsogram('isogram');
// true );
isIsogram('aba');
// false, "same chars may not be adjacent" );
isIsogram('moOse');
// false, "same chars may not be same case" );
isIsogram('isIsogram');
// false );
isIsogram('');
// true, "an empty string is a valid isogram" )
