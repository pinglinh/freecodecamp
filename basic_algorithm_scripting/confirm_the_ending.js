function confirmEnding(str, target) {
var checkString = str.substr(-target.length, target.length);

  if (checkString == target) {
    return true;
  }

  else {
    return false;
  }
}

confirmEnding("Bastian", "n"); // should return true
confirmEnding("He has to give me a new name", "name") // should return true
confirmEnding("Open sesame", "same") // should return true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // should return false

// At first I did str.substr(-1, target.length) however -1 only selects from last letter so for other tests when the last letter of str and target were same, it would return true when it's false because words did not match. To fix this I did -target.length which would select the last word. The substr() arguments can also be put into variables if desired.
