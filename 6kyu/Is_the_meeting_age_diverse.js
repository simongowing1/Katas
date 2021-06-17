/* eslint-disable import/prefer-default-export */

export function isAgeDiverse(list) {
  const ageGroupArray = [];
  list.forEach((candidate) => {
    const { age } = candidate;
    if ((age > 12 && age < 20) && (!ageGroupArray.includes('teens'))) {
      ageGroupArray.push('teens');
    }
    if ((age >= 20 && age < 30) && (!ageGroupArray.includes('twenties'))) {
      ageGroupArray.push('twenties');
    }
    if ((age >= 30 && age < 40) && (!ageGroupArray.includes('thirties'))) {
      ageGroupArray.push('thirties');
    }
    if ((age >= 40 && age < 50) && (!ageGroupArray.includes('fourties'))) {
      ageGroupArray.push('fourties');
    }
    if ((age >= 50 && age < 60) && (!ageGroupArray.includes('fifties'))) {
      ageGroupArray.push('fifties');
    }
    if ((age >= 60 && age < 70) && (!ageGroupArray.includes('sixties'))) {
      ageGroupArray.push('sixties');
    }
    if ((age >= 70 && age < 80) && (!ageGroupArray.includes('seventies'))) {
      ageGroupArray.push('seventies');
    }
    if ((age >= 80 && age < 90) && (!ageGroupArray.includes('eighties'))) {
      ageGroupArray.push('eighties');
    }
    if ((age >= 90 && age < 100) && (!ageGroupArray.includes('nineties'))) {
      ageGroupArray.push('nineties');
    }
    if (age >= 100 && (!ageGroupArray.includes('centenarian'))) {
      ageGroupArray.push('centenarian');
    }
  });
  if (ageGroupArray.length < 10) return false;
  return true;
}
