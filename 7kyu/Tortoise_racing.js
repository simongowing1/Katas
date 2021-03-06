// Two tortoises named A and B must run a race. A starts with an average speed of 720
// feet per hour. Young B knows she runs faster than A, and furthermore has not finished
// her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850
// feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes
// and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

// Note:
// See other examples in "Your test cases".

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

function race(v1, v2, g) {
  // if the first tortoise is faster than the second, it will always be ahead so return null
  if (v1 >= v2) { return null; }
  // find time it will take for tortoise 2 to catch-up with tortoise one
  // distance multiplied by seconds in an hour
  // divided by the difference in speed
  const time = (g * 3600) / (v2 - v1);
  // number of hours
  const h = Math.floor(time / 3600);
  // number of minutes left over
  const mn = Math.floor((time % 3600) / 60);
  // number of seconds
  const s = Math.floor(time % 60);
  // return as array
  const timetocatchup = [h, mn, s];
  return timetocatchup;
}

race(720, 850, 70);
// [0, 32, 18])
race(80, 91, 37);
// [3, 21, 49])
race(80, 100, 40);
// [2, 0, 0])
race(100, 80, 40);
// null
