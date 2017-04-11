// Solution using the reverse method
function reverseString(str) {
    var splitString = str.split("");
    var reversed = splitString.reverse();
    return reversed.join("");
}

reverseString("hello");

// which is the same as

function reverseString(str) {
  var reversed = str.split("").reverse().join("");
  return reversed;
}

reverseString("hello");

// or

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// Solution without using the reverse method

function reverseString(str) {
 var reversed = [];
 var splitString = str.split("");
  for (var i = 0; i < str.length; i++) {
    var lastCharacter = splitString.pop();
    reversed.push(lastCharacter);
  }
  return reversed.join("");
}

reverseString("hello");











function reverseString(str) {
  for (var i = 0; i < str.length; i++) {
    var splitString = str.split("");
    var reversed = splitString.reverse();
    return reversed.join("");
  }
}

reverseString("hello");


function reverseString(str) {
  for (var i = 0; i < str.length; i++) {
    var splitString = str.split("");
    var reversed = [];
    var lastCharacter = i.pop();
    reversed.push(lastCharacter);
    return reversed;
  }
}

reverseString("hello");
