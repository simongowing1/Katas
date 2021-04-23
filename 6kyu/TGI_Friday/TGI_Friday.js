/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
// https://www.codewars.com/kata/5a0d6d8c6975982b5b000383/train/javascript

// We all love fridays, and even better if it is the last day of the month!

// In this kata you should write a function that will receive 2 parameters.
// Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided,
// return the number of times a month ends on Friday on that year.
// Range bounds are inclusive in every case!

// For example, between 1901 and 2000, a month ends on Friday 171 times.

export function lastDayIsFriday(initialYear, endYear) {
// totalFridays is the counter
  let totalFridays = 0;

  // If there is only one argument, only one specific year should be counted (initialYear).
  if (endYear === undefined) {
    endYear = initialYear;
  }

  // Iterate through the years.
  for (let year = initialYear; year <= endYear; year += 1) {
    // Iterate through the months.
    for (let month = 1; month <= 12; month += 1) {
      // new Date() generates the correct date.
      // The arguments in this case are the variables from the iterations in the two for loops above
      // (year, month).
      // The final argument (0) denotes the last day of the selected month
      const day = new Date(year, month, 0);

      // If the variable 'day' is the fifth day of the week (Friday)
      // then increase the counter 'totalFridays'
      if (day.getDay() === 5) {
        totalFridays += 1;
      }
    }
  }

  // Return the value of the counter
  return totalFridays;
}

// lastDayIsFriday(1991)
// 1
