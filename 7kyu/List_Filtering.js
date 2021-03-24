//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  //iterate over array using filter
return l.filter(value =>
                //only return the value if its type is 'number'
                typeof value === 'number')
}

filter_list([1,2,'a','b'])
//[1,2]
filter_list([1,2,'a','b'])
//[1,2]
filter_list([1,2,'aasf','1','123',123])
//[1,2,123]