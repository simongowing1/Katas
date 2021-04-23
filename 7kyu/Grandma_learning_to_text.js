// https://www.codewars.com/kata/5a043fbef3251a5a2b0002b0/solutions/javascript

// Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if
// the sound is found mid word (like in octopus) or not in lowercase grandma still
// thinks that should be replaced with a 2. Bless her.

// 'I love to text' becomes 'I love 2 text'
// 'see you tomorrow' becomes 'see you 2morrow'
// 'look at that octopus' becomes 'look at that oc2pus'

// Note that 'too' should become '2', not '2o'

function textin(str) {
  return str.replace(/to|two|too/gi, '2');
}

textin('I love to text');
// 'I love 2 text',)
textin('see you tomorrow');
// 'see you 2morrow',)
textin('look at that octopus');
// look at that oc2pus',)
textin('BECAUSE I WANT TO');
// 'BECAUSE I WANT 2',)
textin('Thats two much');
// 'Thats 2 much
