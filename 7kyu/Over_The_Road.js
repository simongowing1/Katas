/* eslint-disable import/prefer-default-export */
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/

export function overTheRoad(address, n) {
  // find the number of houses in the street
  const houses = n * 2;
  // return the number of houses less the value of the address variable
  // add one
  return (houses - address) + 1;
}
