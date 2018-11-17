const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6

// Can also do it this way however on FCC, this will not pass due to the last test `The sum function uses the ... spread operator on the args parameter.` 
const sum = (...args) => {
  "use strict";
    return args.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3)
