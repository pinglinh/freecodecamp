function reverseString(str) {
  for (var i = 0; i < str.length; i++) {
    var splitString = str.split("");
    var reversed = [];
    var lastCharacter = i.pop;
    reversed.push(lastCharacter);
    return reversed;
  }
}

reverseString("hello");
