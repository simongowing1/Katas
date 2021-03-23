// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

//FIRST ATTEMPT (passing all but five tests)

function validParentheses(parens){
    //count number of opening brackets
    let openingBracket = parens.split('(').length-1
    //count number of closing brackets
    let closingBracket = parens.split(')').length-1
    //if there are the same number of opening brackets as closing brackets
    if ((openingBracket === closingBracket)
        //and the string starts with an opening bracket
        && (parens.charAt(0) === '(')
        //and closes with a closing bracket
        && (parens.charAt(parens.length-1 === ')')) 
       )
       //return true. Else return false
    {
      return true
    } else {
      return false
    }
 }

 //THE FAILING TESTS:
 //The problem here is that there are certain edge-cases where the number of brackets are equal
 //AND the string begins with a '(' and ends with a ')', but still does not contain only valid parenteses
    validParentheses( "())" )
    //true
    validParentheses( "())(()" )
    //false
    validParentheses( "())(()" )
    //false


//SECOND ATTEMPT

function validParentheses(parens){
    //counter to add up how many spare brackets there are
    let counter = 0
    //iterate over the string
    for (let i = 0; i < parens.length ; i ++){
        //add to the counter if the value is an opening bracket
      if (parens.charAt(i) === '(') counter++;
      //add to the counter if the value is an opening bracket
      if (parens.charAt(i) === ')') counter--;
      //if the counter is in negative numbers return false
      if (counter < 0)
       return false;
    }
    //if counter is equal to 0 (therefore there are an equal pair of parens) return true
    return counter === 0;
}