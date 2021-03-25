function numberToOrdinal(n) {
    //turn into a string
    const numberAsString = n.toString()
    // if number is 11, 12, 13, end in 'th'
    if ((n === 11)
        || (n === 12)
        || (n === 13)) {
          return `${numberAsString}th`
        }
    switch (numberAsString.charAt(numberAsString.length-1)){
        //if the number is 0, return '0'   
        case '0':
          return numberAsString
        //if the number ends in 1, add 'st'
        case '1':
          return `${numberAsString}st`;
          break;
        //if the number ends in 2, add 'nd'
        case '2':
          return `${numberAsString}nd`;
          break;
        //if the number ends is 3, add 'rd'
        case '3':
          return `${numberAsString}rd`;
          break;
        //else if the number ends in none of these, add 'th'
        default:
          return `${numberAsString}th`
    }
  }
  
  //Tests
  numberToOrdinal(0)
  numberToOrdinal(1987)
  numberToOrdinal(51)
  numberToOrdinal(102)
  numberToOrdinal(103)
  numberToOrdinal(52)
  