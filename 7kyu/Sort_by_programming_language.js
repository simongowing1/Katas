/* eslint-disable import/prefer-default-export */

// https://www.codewars.com/kata/583ea278c68d96a5fd000abd

export function sortByLanguage(list) {
  return list.sort((firstEl, secondEl) => {
    if (firstEl.language === secondEl.language) {
      if (firstEl.firstName > secondEl.firstName) {
        return 1;
      }
      return -1;
    }
    if (firstEl.language > secondEl.language) {
      return 1;
    }
    return -1;
  });
}
