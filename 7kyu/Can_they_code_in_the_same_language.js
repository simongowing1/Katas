/* eslint-disable import/prefer-default-export */
// https://www.codewars.com/kata/58287977ef8d4451f90001a0

export function isSameLanguage(list) {
  const initialValue = list[0].language;
  const filteredList = list.filter((candidate) => candidate.language !== initialValue);
  return !(filteredList.length > 0);
}
