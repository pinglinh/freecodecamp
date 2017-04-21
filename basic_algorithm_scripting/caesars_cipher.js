// function rot13(str) { // LBH QVQ VG!
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var decoded = "NOPQRSTUVWXYZABCDEFGHIJKLM";
//   var splitStr = str.split("");
//   for (var i = 0; i < splitStr.length; i++) {
//     if (splitStr 
//   }
//   return str;
// }

// // Change the inputs below to test
// rot13("SERR PBQR PNZC");


// SERR PBQR PNZC

// ["S", "E", "R", "R", "  ", "P", "B", "Q", "R", " "," P", "N", "Z", "C"]




function rotate(val) {
  if (val !== val.toLowerCase()) {
    return "X";
  }
  else {
    return val;
  }
}

[rotate("A"), rotate("."), rotate ("c"]);





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
    "Z": "M"
  }
  
  for (var i = 0; i < splitStr.length; i++) {
    result = decoded[splitStr];
  }
  
  
  return result;
}

rot13("SERR PBQR PNZC");
