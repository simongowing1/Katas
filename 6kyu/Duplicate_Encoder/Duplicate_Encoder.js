// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//MY SOLUTION
function duplicateEncode(word){
    //declare variable 'unique' which is an empty string
    let unique = '';
    //declare a variable which is the argument string in lowercase
    const lowercaseWord = word.toLowerCase()
    //split the string into an array of letters
    lowercaseWord.split('')
    //iterate over the array
    .forEach(letter => {
        //if the index of the CURRENT value is the same as the LAST index of the current value
        //ie the value is unique
        lowercaseWord.indexOf(letter) == lowercaseWord.lastIndexOf(letter) ?
        //add '(' to the empty string
        unique += '(' :
        //else add ')' to the empty string
        unique += ')'
    })
    //return the string
    return unique;
}

//TESTS
duplicateEncode("din")
//"(((");
duplicateEncode("recede")
//"()()()");
duplicateEncode("Success")
//")())())","should ignore case");
duplicateEncode("(( @")
//"))((");