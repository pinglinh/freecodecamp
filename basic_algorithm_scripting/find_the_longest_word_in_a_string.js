
function findLongestWord(str) {
  var splitString = str.split(" ");
  splitString.sort(function(a, b) {
    return a - b;
  });
  return splitString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");






function findLongestWord(str) {
  var splitString = str.split(" ");
    
  for (var i = 0; i <= splitString.length; i++) {
    for (var j = 0; j <= splitString[i].length; j++) {
      return splitString[i][j];
    }
  }
}

findLongestWord("The quick brown fox jumped over the lazy dog");
