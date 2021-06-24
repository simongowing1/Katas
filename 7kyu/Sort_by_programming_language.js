/* eslint-disable import/prefer-default-export */

// https://www.codewars.com/kata/583ea278c68d96a5fd000abd

export function sortByLanguage(list) {
  // sort the argument array, declaring the two elements to be compared
  return list.sort((firstDev, secondDev) => {
    // if the languages used by the devs are the same
    if (firstDev.language === secondDev.language) {
      // and if the first name is 'greater'
      // ie further away from 'a' in the alphabet
      if (firstDev.firstName > secondDev.firstName) {
        // return it in position 1
        return 1;
      }
      // else return it infront of position 1
      return -1;
    }
    // else...
    // if the language is 'greater' than the other
    // ie further away from 'a' in the alphabet
    if (firstDev.language > secondDev.language) {
      // return it in position 1
      return 1;
    }
    // else return it infront of position 1
    return -1;
  });
}
