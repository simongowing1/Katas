//Highest and lowest

//ORIGINAL SOLUTION

function highAndLow(numbers){
    //declare a new array that maps through the split string
    let numbersArray = numbers.split(' ')
    .map(number => 
        //for each element of the array, turn the string into a number
         Number(number))
    //return the highest and lowest number using Math.max/min and spreading the new array into the template literal  
    return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
  }

//TEST

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
//"542 -214"

//SLIGHTLY SIMPLIFIED (without the map, because I didn't realise that Math.max/min parsed strings)

function highAndLow(numbers){
    //declare a new array of the split numbers
    let numbers = numbers.split(' ');
    //return the template literal, spreading the array into Math.max/min
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

//NB this last one would not work if there were any NaN-strings in the argument
