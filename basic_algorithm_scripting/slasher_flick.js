function slasher(arr, howMany) {
  var splicedArray = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);

// splice() method modifies the array therefore we can return arr


// Simple solution

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
