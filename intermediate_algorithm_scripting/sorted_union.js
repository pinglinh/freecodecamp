// We use the spread operator (...) to take in multiple arguments
// We use reduce method to go through each element in the array and flatten the original array
// From console logging this:
// accumulator: [ 1, 3, 2 ] element: [ 5, 2, 1, 4 ]
// What it will do first is take [ 5, 2, 1, 4 ] and using concat it will put it together with [ 1, 3, 2 ] so it will become [ 1, 3, 2, 5, 2, 1, 4 ] 
// Next stage:
// accumulator: [ 1, 3, 2, 5, 2, 1, 4 ] element: [ 2, 1 ]
// The next element is [ 2, 1 ] so it will now stick that with [ 1, 3, 2, 5, 2, 1, 4 ]
// It will keep doing this until the end of the array
// This will be the new array it returns: [ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
// We store the whole function and its return value in a variable called flatten
// We then make a new empty array
// We then loop through the flatten array using a for loop
// We then check for whether our new array has the element or not and if we don't then we will push that element into our new array
// indexOf() === -1 => element doesn't exist in array
// At last we return this new array
function uniteUnique(...arr) {
  const flatten = arr.reduce((accumulator, element) => 
    {
      return accumulator.concat(element)
    }  
  )
  let newArray = [];
  for (i=0; i<flatten.length; i++) {
    if (newArray.indexOf(flatten[i]) === -1) {
      newArray.push(flatten[i])
    }
  }
  return newArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



// Instead of using reduce, you could also do it using concat itself and save it in a variable
// We can also use the ES6 syntax for the for loop so we cut down on the code
function uniteUnique(...arr) {
  const flatten = [].concat(...arr);
  let newArray = [];
  for (element of flatten) {
    if (newArray.indexOf(element) === -1) {
      newArray.push(element)
    }  
  }
  return newArray = [];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
