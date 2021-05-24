function maskify(creditCard) {
  // if the length of creditCard argument is less than 6 characters,
  if (creditCard.length < 6) {
    // return just the argument
    return creditCard;
  }
  // declare a constant, which is the first character of the argument string
  const firstCharacter = creditCard.charAt(0);
  // declare a constant, which is the last four characters of the argument string
  const lastFourCharacters = creditCard.slice(-4);
  // declare a constant, which is the middle section
  // (excluding the areas covered by the previous two variables)
  const middleCharacters = creditCard.slice(1, -4)
  // replace any digits with '#'
    .replace(/\d/g, '#');
    // return the three variables assembled in the correct order
  return `${firstCharacter}${middleCharacters}${lastFourCharacters}`;
}

// TESTS
maskify('5512103073210694');
// '5###########0694'
maskify('54321');
// '54321'
maskify('3456JOEEXOTICxxx59');
// '3###JOEEXOTICxxx59'
maskify('5512-1030-7321-0694');
// '5###-####-####-0694'
