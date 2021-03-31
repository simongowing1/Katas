//https://www.codewars.com/kata/54ff3102c1bad923760001f3

//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//SOLUTION

function getCount(str) {
    //regex:
    // 'g' tells to find all matches, not just the first.
    // 'i' tells to be case insensitive.
    // What goes inside the '//'' is the pattern.
    // '[]'' tells to match any character in a set.
    // 'aeiou' are the characters in the set.
    //because of the '^' the replace function removes everything that is NOT within the regex statement
    //without it, the replace function would replace all of the vowels and return only the other characters
    return str.replace(/[^aeiou]/gi, '')
      //then count the length of the remaining string
      .length;
  }
  
  getCount("abracadabra")
  //5
  
  getCount('adoodododadada')
  //8