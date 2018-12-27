function checkPositive(arr) {
  return arr.some(currentValue => {
    return currentValue > 0;
  })
}

checkPositive([1, 2, 3, -4, 5]);