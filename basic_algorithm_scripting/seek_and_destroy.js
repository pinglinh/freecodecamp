// We initialize the for loop at 1 so that we omit the first argument argument[0]. Therefore this will start at the 2nd argument onwards since we also defined the boundary that i cannot be more than the arguments.length. We then keep going using i++ and this will stop once the boundary is met.

// We do filter on arr and save the values which did not match in argument 2 and 3 and save this back to arr so that we can return the arr which has been filtered.


function destroyer(arr) {
  for (var i = 1; i < arguments.length; i++) {
    var arguments_x = arguments[i]; // this is part of the for loop therefore can't be used within the filter function unless we make a variable for it so that it knows to reference the arguments[i] in for loop

    arr = arr.filter(function(val) { // assignment saves filter values back into arr
      return val !== arguments_x;
    });
  }
  return arr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
