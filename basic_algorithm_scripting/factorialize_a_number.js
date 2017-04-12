function factorialize(num) {
  var product = 1;
    for (i = num; i > 0; i--) {
      product *= i;
    }
   return product;
}

factorialize(5);
