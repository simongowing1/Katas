/* eslint-disable import/prefer-default-export */
// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

// ORIGINAL SOLUTION
export function countDevelopers(list) {
  // declare counter variable
  let euroDevCounter = 0;
  // iterate through devs array
  list.forEach((dev) => {
    // if continent is Europe and language is JavaScript
    if ((dev.continent === 'Europe') && (dev.language === 'JavaScript')) {
      // add one to the counter
      euroDevCounter += 1;
    }
  });
  // return the value of the counter
  return euroDevCounter;
}
