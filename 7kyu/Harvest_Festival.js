// https://www.codewars.com/kata/606efc6a9409580033837dfb/solutions/javascript

// You have cultivated a plant, and after months of hard work, the time has come to
// reap the flowers of your hard work. When it was growing, you added water and
// fertilizer, and kept a constant temperature. It's time check how much your plant has grown.

// A plant is represented horizontally, from the base to the left, to the end to the right:

// ---@---@---@
// The stem is represented by hyphens -, and the flowers are represented by symbols.
// A plant always starts with the stem, and always ends with flowers.

// Four parameters will be given. The four parameters are:

// seed (string) - determines the type of flowers generated by the plant.
// water (integer) - each unit of water extends the portion of stem between the flowers.
// It also gives how many times the stems + flower clusters should be repeated
// fert (integer) - each unit of fertilizer increases the amount of flowers, grouped in clusters
// temp (integer) - if the temperature given is in the range of 20°C and 30°C, the
// plant grows normally, otherwise, all the flowers die except for one flower at the
// end of the stem.
// Given the above parameters, your task is to return a string representing the plant.

// MY SOLUTION
function plant(seed, water, fert, temp) {
  // create the basic plant
  const plantGrown = `${'-'.repeat(water)}${seed.repeat(fert)}`.repeat(water);
  // if the temperature is more than 20 and less than 30
  if (temp >= 20 && temp <= 30) {
    // return just the plantGrown
    return plantGrown;
    // else return the plant with all characters that are not '-' removed
  }
  // nb in regex '^' means 'not'. So in this case, We are saying 'not' '-'
  return plantGrown.replace(/[^-]/g, '') + seed;
}

// //MY REFACTORED (DICKHEAD) SOLUTION
// //I prefer template literals rather than concatenation
// function plant(seed, water, fert, temp) {
//     //declare the plant
//     let plant = `${'-'.repeat(water)}${seed.repeat(fert)}`.repeat(water)
//     //if the temperature is more than 20 and less than 30 return the plant
//     //else return the plant with all flowers removed (using regex)
//     return (temp >= 20 && temp <= 30) ? plant : `${plant.replace(/[^-]/g,'')}${seed}`
// }

// //A CLEARER MODULAR SOLUTION
// function plant(seed, water, fert, temp){
//     //declare the stem as a variable
//     let stem = '-'.repeat(water);
//     //declare the flower as a variable
//     let flower = seed.repeat(fert);
//     //if the temperature is more than 20 and less than 30
//     if (temp < 20 || temp > 30)
//     //return the stem plus one flower
//     return stem.repeat(water) + seed;
//     //else return the stem and flower repeated by the amount of water
//     else return (stem + flower).repeat(water);
// }

// TESTS
plant(',', 3, 7, 25);
// "---,,,,,,,---,,,,,,,---,,,,,,,")
plant('+', 1, 3, 15);
// "-+")
plant(';', 9, 10, 30);
// eslint-disable-next-line max-len
// "---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;")
plant('#', 10, 2, 15);
// eslint-disable-next-line max-len
// '----------------------------------------------------------------------------------------------------#'
