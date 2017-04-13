
function findLongestWord(str) {
  var splitString = str.split(" ");
  splitString.sort(function(a, b) {
    return a - b;
  });
  return splitString;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
