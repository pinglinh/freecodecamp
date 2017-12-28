
// We split the string first
// We create a new array where we will push our DNA pairing into
// As we need to go through every element in the splitString array, we can use map
// We use switch statement to check for every possibility of the DNA and then we push the correct DNA pairing into the new array
// We then return the new array at the end
function pairElement(str) {
  var splitString = str.split("");
  var newArray = [];
  splitString.map(x => {
  switch(x) {
    case "G":
      newArray.push(["G", "C"]);
      break;
    case "C":
      newArray.push(["C", "G"]);
      break;
    case "A":
      newArray.push(["A", "T"]);
      break;
    case "T":
      newArray.push(["T", "A"]);
      break;
    }
  });
  return newArray;
}

pairElement("GCG");


// Make an object with key value pairs
// Split the string input
// Return an array which goes through every character and checks for which character this maps to from the reverse object 
function pairElement(str) {
  let reverse = {
    "G": "C",
    "C": "G",
    "A": "T",
    "T": "A"
  };
  
  return str.split("").map(x => 
    [x, reverse[x]]
  );
}

pairElement("GCG");
