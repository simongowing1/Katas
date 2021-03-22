
function calc(x){
    //create two variable strings total1 and total2
    let total1 = '';
    let total2 = '';
    //create two 'sumTotal' variables as counters to be added to
    let sumTotal1 = 0;
    let sumTotal2 = 0;

    //iterate over the argument string
    for (let i=0; i < x.length; i++)
      {
        //find the ASCII code using charCodeAt()
        //concat it to the total1 string
        total1 += x.charCodeAt(i)
      };
    //iterate over the total1 string
    for (let i=0; i < total1.length; i++) {
      //add the numerical value of the index to the 'sumTotal1' variable
      sumTotal1 += parseInt(total1[i])
    };
    //create new variable using .replace() to replace instances of the number 7 with the number 1 in the total1 string 
    total2 = total1.replace(/7/g, 1);
    //iterate over the new string 'total2'
    for (let i=0; i < total2.length; i++) {
      //add the numerical value of the index to the 'sumTotal2' variable
      sumTotal2 += parseInt(total2[i])
    };
    //return the difference between the two 'sumTotal' variables
    return sumTotal1 - sumTotal2 
  }