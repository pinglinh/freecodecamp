function palindrome(str) {
  var editedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  var reversedEditedString = editedString.split("").reverse().join("");
  
  if (editedString == reversedEditedString) { 
    return true;
  }
  
  else {
    return false;
  }
}

palindrome("_eye");

// The below lists all the punctuation and symbols on the keyboard, some of which had to be escaped with a \.
// This is not as good of an approach as there are many more symbols in unicode as well as letters which may have accents on them
// or non-american letters.
// The test cases only passed because the symbols matched from the symbols defined in my regex code.

function palindrome(str) {
  var editedString = str.replace(/\s+|[-_!"£$€¦%&*(\)+\=\-`¬[\]{}:;@'~#<>?,.\^\/\\|]/g, "").toLowerCase();
  
  var reversedEditedString = editedString.split("").reverse().join("");
  
  if (editedString == reversedEditedString) { 
    return true;
  }
  
  else {
    return false;
  }
}

palindrome("_eye");
