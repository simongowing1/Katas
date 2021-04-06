//https://www.codewars.com/users/Tichu00/completed_solutions

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

//MY SOLUTION USING A SWITCH STATEMENT

export function likes(names) {
    //initiate switch statement using the number of elements in the array as the argument
    switch(names.length){
        //if the array has no elements
        case 0:
          return 'no one likes this';
          break;
        //if the array has 1 element
        case 1:
          return `${names} likes this`;
          break;
        //if the array has 2 elements
        case 2:
          return `${names[0]} and ${names[1]} like this`;
          break;
        //if the array has 3 elements
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
          break;
        //if the array has more than 3 elements, deploy the default
        default:
          return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
          
    }

  }

//TESTS

  likes([])
  //'no one likes this');
  likes(['Peter'])
  //'Peter likes this');
  likes(['Jacob', 'Alex'])
  //'Jacob and Alex like this');
  likes(['Max', 'John', 'Mark'])
  //'Max, John and Mark like this');
  likes(['Alex', 'Jacob', 'Mark', 'Max'])
  //'Alex, Jacob and 2 others like this'

// //MY FIRST SOLUTION USING IF/ELSE

// function likes(names) {
//     if (names.length === 0) {  }
//     else if (names.length === 1) {return `${names} likes this`}
//     else if (names.length === 2) {return `${names[0]} and ${names[1]} like this`}
//     else if (names.length === 3) {return `${names[0]}, ${names[1]} and ${names[2]} like this`}
//     else if (names.length > 3) {return `${names[0]}, ${names[1]} and ${names.length-2} others like this`}
//   }
