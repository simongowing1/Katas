/* eslint-disable import/prefer-default-export */
// https://www.codewars.com/kata/58381907f8ac48ae070000de

export function isLanguageDiverse(list) {
  // declare an empty object
  const languagesObject = {};
  // iterate through the argument array
  list.forEach((participant) => {
    // check if that language is already present as a key in the object
    // if not, add it with value 1
    if (!languagesObject[participant.language]) {
      languagesObject[participant.language] = 1;
    } else {
      // if it is, add one to the value
      languagesObject[participant.language] += 1;
    }
  });
  // find lowest number of frequencies
  const lowestFrequency = Math.min(...Object.values(languagesObject));
  // find highest number of frequencies
  const highestFrequency = Math.max(...Object.values(languagesObject));
  // if highest number is larger than the lowest number multiplied by two
  if (highestFrequency > (lowestFrequency * 2)) {
    // return false
    return false;
  }
  // else return true
  return true;
}
