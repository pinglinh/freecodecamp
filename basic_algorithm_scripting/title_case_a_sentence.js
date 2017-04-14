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
