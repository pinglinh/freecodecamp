function findLongestWord(str) {
  var splitString = str.split(" ");
  splitString.sort(function(a, b) {
    return b.length - a.length;
  });
  return splitString[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
