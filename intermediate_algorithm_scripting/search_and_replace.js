function myReplace(str, before, after) {
  var separatedSentence = str.split(" ");
  var indexOfBefore = separatedSentence.indexOf(before);
  
  if (before[0] === before[0].toUpperCase()) {
    var newAfter = after.replace(after[0], after[0].toUpperCase());
  }
  
  separatedSentence.splice(indexOfBefore, 1, newAfter || after);
  return separatedSentence.join(" ");
}

// You can also use regex in the replace method to look for the first character in a string 
function myReplace(str, before, after) {
  var separatedSentence = str.split(" ");
  var indexOfBefore = separatedSentence.indexOf(before);
  
  if (before[0] === before[0].toUpperCase()) {
    var newAfter = after.replace(/^[a-z]/, after[0].toUpperCase());
  }
  
  separatedSentence.splice(indexOfBefore, 1, newAfter || after);
  return separatedSentence.join(" ");
}
