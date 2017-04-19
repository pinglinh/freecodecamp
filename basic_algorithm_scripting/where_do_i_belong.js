// As sort() only sorts alphabetically, we have to define function in it to sort numerically, in this case we want to ascend

// We then do a loop which will go through the array arr, if the num is smaller than or equal to an element in the arr we break and return i which is the index the number would have been placed into


function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      break;
    }
  }
  return i;
}

getIndexToIns([40, 60], 50);



// The alternative way is to insert num into the existing arr array by using the concat method. Then sorting the new array ascending way. Then we use the method indexOf to return us the index at which num is.


function getIndexToIns(arr, num) {
  var newArray = arr.concat([num]);
  newArray.sort((a,b) => a-b);
  return newArray.indexOf(num);
}
