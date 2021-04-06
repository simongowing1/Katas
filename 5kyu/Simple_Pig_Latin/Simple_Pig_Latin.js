//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

export function pigIt(str){
    //split the string into words using (' ')
    return str.split(' ')
    //map over the array
    .map(word =>
        //check if 'word' is not punctuation using regex and .test
        (/[a-zA-Z]/).test(word) ?
        //if true
        //slice all characters after index one (second character)
        //add the character at index 0
        //concat together using template literal + ay
        `${word.slice(1)}${word[0]}ay`
        //if false return the first character of word
        : word[0]
        )
    //join the array together into a string
    .join(' ')
}
  
// //TESTS
//   pigIt('O tempora o mores !')
//   //'Oay emporatay oay oresmay !'
//   pigIt('Quis custodiet ipsos custodes ?')
//   //'uisQay ustodietcay psosiay ustodescay ?'