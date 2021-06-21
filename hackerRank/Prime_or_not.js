/* eslint-disable import/prefer-default-export */

// Solution times-out for larger numbers
// Must refactor...

export function isPrime(n) {
  const divisors = [];
  const primeOrNot = {};
  if (n === 2) {
    return 1;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
      primeOrNot.false = 1;
    } else {
      primeOrNot.true = 1;
    }
  }
  if (primeOrNot.false) {
    return divisors[0];
  }
  return 1;
}
