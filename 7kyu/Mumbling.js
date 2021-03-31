//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/

// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//ORIGINAL SOLUTION

function accum(s) {
    //declare a new array
    let newarray = []
    //iterated over the argument string
    for (let i = 0; i < s.length; i++){
      //capitalise the letter and push it into the array,
     newarray.push(s[i].toUpperCase()
                   //add the letter multiplied by its index
                   + s[i].repeat(i).toLowerCase())
    }
    //return the array joined back into a string, seperated by '-'
    return newarray.join('-')
  }

  //TESTS

  accum("ZpglnRxqenU")
  //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
  accum("NyffsGeyylB")
  //"N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
  accum("MjtkuBovqrU")
    //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
  accum("EvidjUnokmM")
  //"E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
  accum("HbideVbxncC")
  //"H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

  //NEW SOLUTION

  //I much prefer this solution using the index argument in .map
  
  function accum (s) {
      //create an array from the string using the spread operator
    return [...s]
    //map over the array, declaring two arguments (current value and current index)
    .map((element, index) => {
        //return the capitalised value
        return element.toUpperCase()
        //concatenated with the lowercase value repeated by the index number 
        + element.toLowerCase().repeat(index);
    //join back into a string using '-' as a separator
    }).join('-');
  }