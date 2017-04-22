function findLongestWord(str) {
  var splitString = str.split(" ");
  splitString.sort(function(a, b) {
    return b.length - a.length;
  });
  return splitString[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Alternative solution

function findLongestWord(str) {
  var longestWordLength = 0;
  for (var word of str.split(" ")) {
    var currentWordLength = word.length;
    longestWordLength = Math.max(currentWordLength, longestWordLength);
  }
  return longestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
