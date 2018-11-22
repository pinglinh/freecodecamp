// I did this because I counted the spaces at the start and at the end to be at least 2
// Therefore I matched for spaces that were at least 2 or more

let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g;
let result = hello.replace(wsRegex, "");

// However I realise that the title of the exercise is actually to remove whitespace from start and end
// Therefore the FCC solution works better in terms of matching the purpose

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
