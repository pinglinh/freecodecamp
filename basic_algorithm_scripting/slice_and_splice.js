function frankenSplice(arr1, arr2, n) {
  let secondArr = arr2.slice();

  secondArr.splice(n, 0, arr1);
  return [].concat(...secondArr);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);