var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach(function(item) {
    newArray.push(callback(item))
  })
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});