// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=.*\d{2,})/;
let result = pwRegex.test(sampleWord);

// \w{5,} matches any word character equal to [a-zA-Z0-9_] and matches between 5 and unlimited times
// .* matches any character, \d matches a digit, {2,0} matches between 2 and unlimited times
