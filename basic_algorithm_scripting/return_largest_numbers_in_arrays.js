function largestOfFour(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Alternative solution

function largestOfFour(arr) {
  return arr.map(function(insideArray) {
    return insideArray.reduce(function(x, y) {
      return Math.max(x, y); // This compares the highest number against all the other numbers in the array. Once a higher number is found, it is then compared against the following numbers until the last. e.g. 4 vs 4, 4 vs 5, 5 vs 1, 5 vs 1 etc.
    }, insideArray[0]); // // We are starting the comparison with the first element in the array
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
