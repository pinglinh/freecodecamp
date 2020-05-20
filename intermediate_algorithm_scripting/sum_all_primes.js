function sumPrimes(num) {
  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  var primeNumbersArr = [2];

  for (var i = 3; i <= num; i += 2) {
    if (isPrime(i)) {
      primeNumbersArr.push(i);
    }
  }

  let sum = primeNumbersArr.reduce((a, b) => a + b, 0);

  return sum;
}

sumPrimes(10);
