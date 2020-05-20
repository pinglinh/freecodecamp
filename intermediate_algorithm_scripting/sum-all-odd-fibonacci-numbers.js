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
