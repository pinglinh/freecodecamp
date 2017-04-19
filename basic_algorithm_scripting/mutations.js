// Hardest challenge I came across so far. Especially around the loop bit. The length bit should have only been up



function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();

  for (var i = 0; i < secondString.length; i++) {
    var secondStringChar = secondString[i];
    var checkingAgainstFirstString = firstString.indexOf(secondStringChar);

    if (checkingAgainstFirstString === -1) {
      return false;
    }
  }

  return true;

}

mutation(["hello", "hey"]);





function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();

  for (var i = 0; i < secondString.length; i++) {

    if (firstString.indexOf(secondString[i]) === -1) {
      return false;
    }
  }

  return true;

}

mutation(["hello", "hey"]);





function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();

  for (var checker of secondString) {

    if (firstString.indexOf(checker) === -1) {
      return false;
    }
  }

  return true;

}

mutation(["hello", "hey"]);





function mutation(arr) {
  var firstString = arr[0].toLowerCase();
  var secondString = arr[1].toLowerCase();

  for (var checker of secondString) {

    if (firstString.indexOf(checker) === -1) return false;
  }

  return true;

}

mutation(["hello", "hey"]);



function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
  for(var c of b){
    if(a.indexOf(c) === -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);




function mutation(arr) {
  const a = arr[0].toLowerCase().split('')
  const b = arr[1].toLowerCase().split('')

  return b.every(letter => a.includes(letter));
}
