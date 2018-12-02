function filteredArray(arr, elem) {
  let newArr = [];

  for (let num = 0; num < arr.length; num++) {
    if (!arr[num].includes(elem)) {
      newArr.push(arr[num]);
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
