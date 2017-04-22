function titleCase(str) {

  var words = str.toLowerCase().split(" ");

  for (var eachWord = 0; eachWord < words.length; eachWord++) {
    var letters = words[eachWord].split("");
    letters[0] = letters[0].toUpperCase();
    words[eachWord] = letters.join("");

  }
  return words.join(" ");

}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");



// Alternative solution

function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  return words.map(function(singleWord)) {
    return singleWord[0].toUpperCase() + singleWord.substr(1); // substr() is every character from 1st to the end
  }).join(" ");
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
