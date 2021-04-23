// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

//MY SOLUTION
function spinWords(string){
    //split the string into an array
    const wordsArray = string.split(' ')
    //iterate over the array
    for (let i = 0; i < wordsArray.length; i++) {
       //if length of the value is longer than 5 letters, return spunWord
      if(wordsArray[i].length >= 5) {
        wordsArray[i] = wordsArray[i].split('').reverse().join('')
      } 
    }
     //.join(' ')
    return wordsArray.join(' ')
  }

  //TESTS
  spinWords("Welcome")
  //"emocleW");
  spinWords("Hey fellow warriors")
  //"Hey wollef sroirraw");
  spinWords("This is a test")
  //"This is a test");
  spinWords("This is another test")
  //"This is rehtona test");
  spinWords("You are almost to the last test")
  //"You are tsomla to the last test");
  spinWords("Just kidding there is still one more")
  //"Just gniddik ereht is llits one more");
  spinWords("Seriously this is the last one")
  //"ylsuoireS this is the last one");