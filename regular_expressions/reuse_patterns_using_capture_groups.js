// Match numbers that are repeated only 3 times in a string, each separated by a space

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);

// the capture group is (\d+) so that means any digit that is one or more
// \s matches whitespace
// \1 matches the same text as most recent capturing group

// So the exercise asked for 3 repetitions:
// 1. (\d+)
// 2. \1
// 3. \1

// This is 3

// We also need to add in ^ to match the pattern at the beginning
// then end it with the last match of the first capture $ so that no more matches are made afer 3 repetitions
