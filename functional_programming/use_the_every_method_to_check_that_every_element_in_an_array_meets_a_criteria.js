function checkPositive(arr) {
  return arr.every(currentValue => {
    return currentValue > 0;
  })
}
checkPositive([1, 2, 3, -4, 5]);