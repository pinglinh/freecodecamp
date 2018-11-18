let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

// This would give [ 'a', 'a', 'a' ]
let difficultSpelling = "aabab";
let myRegex = /a/gi;
let result = difficultSpelling.match(myRegex);

// This would give [ 'aa', 'a' ]
let difficultSpelling = "aabab";
let myRegex = /a+/gi;
let result = difficultSpelling.match(myRegex);
