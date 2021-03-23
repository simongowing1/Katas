// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    //create a new array by mapping through the array argument
    let result = a.map(element =>
                       //for each element check whether the value is less than or equal to the limit argument
                       //if yes, make the value in result array 'true', else make it 'false'
                       (element <= limit) ? true : false)
    //if the result array includes 'false', return 'false' from the function
    if (result.includes(false)) {return false}
    //else return true from the function
    return true
  }
    
  smallEnough([66, 101], 200)
  //true
  
  smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)
  //false