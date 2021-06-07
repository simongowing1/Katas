/* eslint-disable import/prefer-default-export */

// ORIGINAL SOLUTION:

export function phone(strng, num) {
  // declare empty addressCard
  const addressCard = {};
  const occurances = strng.split(num).length - 1;
  // check how many times the number occurs in the string
  // if more than one...
  if (occurances > 1) {
    return `Error => Too many people: ${num}`;
  }
  // if none...
  if (occurances < 1) {
    return `Error => Not found: ${num}`;
  }
  // turn string into a data structure by seperating it into different entries
  strng.split('\n')
    // iterate through the data structure to find the entry that contains the number
    .forEach((person) => {
      if (person.includes(num)) {
        const name = person.match(/\<(.*?)\>/)[1];
        addressCard.name = name;
        addressCard.address = person.replace(num, '')
          .replace(addressCard.name, '')
          .replace('_', ' ')
          .replace(/[^a-z0-9 -]+/gi, '')
          .replace(/\s+/g, ' ')
          .replace('St ', 'St.')
          .replace('Av ', 'Av. ')
          .replace('Rd ', 'Rd. ')
          .replace('Pk ', 'Pk. ')
          .replace('Bd ', 'Bd. ')
          .trim();
      }
    });

  // output string using template literals
  return `Phone => ${num}, Name => ${addressCard.name}, Address => ${addressCard.address}`;
}
