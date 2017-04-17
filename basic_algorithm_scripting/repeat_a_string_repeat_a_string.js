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

// At first I had the repeatString variable at the top before my if conditional. This did not pass the test with -2 num as when the num is negative the function str.repeat can’t be executed and the code crashes.

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


