// https://www.codewars.com/kata/reviews/58279e1ca22b0f3e04000012/groups/59f6477625db0525d3003086

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

//MY SOLUTION
function greetDevelopers(list) {
    //loop through the list array
    list.forEach(developer =>
    //for each developer in the array add a new key value pair called 'greeting' with the specified greeting
    developer.greeting = (`Hi ${developer.firstName}, what do you like the most about ${developer.language}?`))
//return the changed array
return list
}

const list1 =[   
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

greetDevelopers(list1)
