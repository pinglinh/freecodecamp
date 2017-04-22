function rot13(str) {
  var result = "";
  var splitStr = str.split("");
  var decoded = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M",
    " ": " "
  };
  for (var i = 0; i < splitStr.length; i++) {
    var splitStrIndex = splitStr[i];
    var capitalLetters = /[A-Z]/g;
    if (capitalLetters.test(splitStrIndex)) {
      result += decoded[splitStrIndex];
    }
    else {
      result += splitStrIndex;
    }
  }
  return result;
}

rot13("SERR PBQR PNZC!");



// Alternative solution



function rot13(str) {
  var result = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var decoded = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  for (var character of str) {
    var index = alphabet.indexOf(character);
    if (index === -1) {
      result += character;
    }
    else {
      result += decoded[index];
    }
  }
  return result;
}

rot13("SERR PBQR PNZC!");



// Solution using charCodeAt() and fromCharCode()



function rot13(str) {
  var result = "";
  for (var character of str) {
    var index = character.charCodeAt(0);
    var A_index = "A".charcodeAt(0);
    var M_index = "M".charcodeAt(0);
    var N_index = "N".charcodeAt(0);
    var Z_index = "Z".charcodeAt(0);
    if (index >= A_index && index <= M_index) {
      index += 13;
    }
    else if (index >= N_index && index <= Z_index) {
      index -= 13;
    }
    result += String.fromCharCode(index);
  }
  return result;
}

rot13("SERR PBQR PNZC!");

