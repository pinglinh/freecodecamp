// Le Tomasz solution which I like

function fibsUpTo(max) {
  let fibs = [1, 1];
  while (true) {
    let nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    if (nextFib > max) {
      return fibs;
    }
    fibs.push(nextFib);
  }
}

function filterOdd(array) {
  return array.filter((x) => x % 2 == 1);
}

function sumArray(array) {
  return array.reduce((a, b) => a + b, 0);
}

function sumFibs(max) {
  let fibs = fibsUpTo(max);
  let oddFibs = filterOdd(fibs);
  return sumArray(oddFibs);
}

// The algo I didn't like

function sumFibs(num) {
  var prevNumber = 0; //creates variable prevNumber with value 0
  var currNumber = 1; //create variable currNumber with value 1
  var result = 0; //creates variable result with value 0
  while (currNumber <= num) {
    //while curr is less than or equal to the given sumFibs number...
    if (currNumber % 2 !== 0) {
      //if the remainder when divided by two is NOT 0...
      result += currNumber; //...add that number to result
    }
    currNumber += prevNumber; //make currNumber equal to currNUmber plus prevNumber
    prevNumber = currNumber - prevNumber; //make prevNumber equal to new currNumber minus the old prevNumber
  }
  return result; //return the result
}

sumFibs(4000000);
