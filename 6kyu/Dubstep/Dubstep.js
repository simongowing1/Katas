// https://www.codewars.com/kata/551dc350bf4e526099000ae5/solutions/javascript

// MY SOLUTION
function songDecoder(song) {
  // Using regex replace any occurance of the string 'WUB' with a single space
  return song.replace(/(WUB)+/gi, ' ')
  // Remove any excess white space at the beginning or end of the string
    .trim();
}

// TESTS
songDecoder('AWUBBWUBC');
// , "A B C","WUB should be replaced by 1 space");
songDecoder('AWUBWUBWUBBWUBWUBWUBC');
// , "A B C","multiples WUB should be replaced by only 1 space");
songDecoder('WUBAWUBBWUBCWUB');
// , "A B C","heading or trailing spaces should be removed");
