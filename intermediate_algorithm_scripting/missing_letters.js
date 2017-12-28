// We set up a for loop to look through each character in the string
// i will increment character code starting from first index (str.charCodeAt(0)) which in this case is 97 (a)
// We will then check against the character code from the actual string given 
// the code will go like this i=97, 98, 99, 100 and p will be used in charCodeAt method so 
// "abce".charCodeAt(0) = 97,
// "abce".charCodeAt(1) = 98,
// "abce".charCodeAt(2) = 99,
// "abce".charCodeAt(3) = 101
// 100 does not equal 101 so we take that 100 i and put it into String.fromCharCode(i) and return this
function fearNotLetter(str) {
  for (var i = str.charCodeAt(0), p = 0;
        p < str.length;
        i++, p++) {
        if (i !== str.charCodeAt(p)) {
          var missingChar = String.fromCharCode(i);
          return missingChar;
        }
  }
  return undefined;
}

fearNotLetter("abce");

// A shorter solution is to also use the for loop
// Setting our actual character code in a variable and the expected to be adding increasing numbers to character code at index 0 which is 97
//        Actual             |      Expected
// str.charCodeAt(0) = 97    | 0 + 97 = 97
// str.charCodeAt(1) = 98    | 1 + 97 = 98
// str.charCodeAt(2) = 99    | 2 + 97 = 99
// str.charCodeAt(3) = 101   | 3 + 97 = 100
// 101 will not equal 100 so we will take the expected of 100 and pass this into the fromCharCode method
function fearNotLetter(str) {
  for(let i=0; i<str.length; i++) {
    let actual = str.charCodeAt(i)
    let expected = i + str.charCodeAt(0);
    if(actual !== expected) {
      return String.fromCharCode(expected);
    }
  }
}

fearNotLetter("abce");
