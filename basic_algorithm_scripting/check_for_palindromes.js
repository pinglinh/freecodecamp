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

// The below doesn't yet work and not sure why:

function palindrome(str) {
  var editedString = str.replace(/\s+|[-_!"£$€¦%&*()+=-`¬[]{}:;@'~#<>?,.\^\/\\|]/g, "").toLowerCase();

  var reversedEditedString = editedString.split("").reverse().join("");

  if (editedString == reversedEditedString) { 
    return true;
  }

  else {
    return false;
  }
}

palindrome("_eye");
