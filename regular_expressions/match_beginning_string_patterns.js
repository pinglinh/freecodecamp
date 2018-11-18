// Caret character (^) when used inside a character set e.g. [^ABC] is ignored and not matched
// However when this is used with characters e.g. ^ABC means it is used to search for patterns at the beginning of strings

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// if it was /^and/, this would not match because and is not at the beginning of the string
