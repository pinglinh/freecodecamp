let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

// Any letter in a regex expression that is followed by a * does not have to occur in the string tested whereas any letter in a regex expression followed by a + must occur in a string at least once
let phrase = "ba humbug";

let regexPlus = /bah+/;
let regexStar = /bah*/;

regexPlus.test(phrase); // returns false
regexStar.test(phrase); // returns true
