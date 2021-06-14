// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/

function sortVowels(s) {
  if (typeof s !== 'string') {
    return '';
  }
  const splitString = s.split('')
    .map((letter) => letter.replace(/[^aeiou]/gi, `${letter}|`)
      .replace(/[aeiou]/gi, `|${letter}`))
    .join('\n');
  return splitString;
}
