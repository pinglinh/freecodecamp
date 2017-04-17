function repeatStringNumTimes(str, num) {

  if (num < 1) {
    return "";
  }

  else {
    var repeatString = str.repeat(num);
    return repeatString;
  }
}

repeatStringNumTimes("abc", 3);

// Faster code

function repeatStringNumTimes(str, num) {

  if (num < 1) {
    return "";
  }

  else {
    return str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);
