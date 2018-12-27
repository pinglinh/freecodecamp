var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = globalArray.concat([]);
  return newArr.sort((a, b) => a - b)
}
nonMutatingSort(globalArray);