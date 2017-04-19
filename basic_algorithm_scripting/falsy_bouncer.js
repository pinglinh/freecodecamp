// When you return from filter - it converts the value to true/false and drops the values where false is returned
Since you wanted to drop the falses it works (as if by magic)

function bouncer(arr) {
  var nonFalsey = arr.filter(function(val) {
    return val;
  });
 return nonFalsey;
}

bouncer([1, null, NaN, 2, undefined]);

