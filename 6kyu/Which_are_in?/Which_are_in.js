//Which are in?

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.


function inArray(array1,array2){
    //declare an empty array
    let r = [];
    //loop through array2
    array2.forEach(array2String => {
        //for each element in array2, loop through array1
        array1.forEach(array1String => {
            //if the element of array2 contains the element of array1String
            if (array2String.includes(array1String) && !r.includes(array1String)) {
                //push the element from array1 into the empty array
                r.push(array1String)
            }
        })
      })
      //return the contents of the array, sorted in alphabetical order
      return r.sort()
}
  
  a2 = ['have',
    '1.9.2.',
    'that',
    'best',
    'sample;',
    'pointed',
    'for',
    'Ruby',
    'Ruby,',
    'the',
    'you',
    '(mladen\'s',
    'you',
    'In',
    'answer',
    'out',
    'updated',
    'glad',
    'I',
    'browse',
    'a',
    'is',
    'ruby-doc.',
    '(since',
    'am',
    'have',
    'to',
    'known',
    'should',
    'your',
    'questions' ]
  
  a1 = ['he', 'omm', '1.9', 'pini', 'ou', 'by', 've', 'oint', 'wh']
  inArray(a1, a2)