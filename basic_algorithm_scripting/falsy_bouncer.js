// When you return from filter - it converts the value to true/false and drops the values where false is returned.

function bouncer(arr) {
  var nonFalsey = arr.filter(function(val) {
    return val;
  });
 return nonFalsey;
}

bouncer([1, null, NaN, 2, undefined]);


// Shorter version
// e => e already checks for is true and anything falsey will be filtered out
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([1, null, NaN, 2, undefined]);




// Creating separate functions for all the falsey values to use inside the filter function. We can then do ! to return us values which are not false, null, 0, "", undefined and NaN.

// NaN is not-a-number, numbers such as 1,2,3,4 etc. are not NaN therefore will still return in the final array.

// isNaN is actually a js function hence why we didn't need to write a function for it

function isFalse(val) {
  return val === false;
}

function isNull(val) {
  return val === null;
}

function isZero(val) {
  return val === 0;
}

function isEmptyString(val) {
  return val === "";
}

function isUndefined(val) {
  return val === undefined;
}



function bouncer(arr) {
  var nonFalsey = arr.filter(function(val) {
    return !(isFalse(val) ||
            isNull(val) ||
            isZero(val) ||
            isEmptyString(val)||
            isUndefined(val) ||
            isNaN(val));
  });
 return nonFalsey;
}

bouncer([1, null, NaN, 2, undefined]);
bouncer([false, null, 0, NaN, undefined, ""])
bouncer([1, null, NaN, 2, undefined])
