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


function capitalize(val) {
  if (val == val.toUpperCase()) {
    return true;
  }
  else if (val !== val.toLowerCase()) {
    return val;
  }
  
  else {
    return false;
  }
}

capitalize(".")
