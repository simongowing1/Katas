// Your car is old, it breaks easily. The shock absorbers are gone and
// you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string
// showing either flat road ("_") or bumps ("n"), work out if you make
// it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps
// return "Car Dead".

function bump(x) {
  // instigate counter
  let counter = 0;
  // iterate over the array
  for (let i = 0; i < x.length; i += 1) {
    // if value of index ==='n' counter++
    if (x[i] === 'n') { counter += 1; }
  }
  // if counter > 15 return 'Car Dead' else return 'Woohoo!'
  return counter > 15 ? 'Car Dead' : 'Woohoo!';
}

bump('n');
// "Woohoo!")
bump('_nnnnnnn_n__n______nn__nn_nnn');
// "Car Dead")
bump('______n___n_');
// "Woohoo!");
