function translatePigLatin(str) {
 if (str.charAt(0).match(/[aeiou]/)) {
    return str + "way";
 } else {
   var indexOfFirstVowel = str.search(/[aeiou]/);
   var splitString = str.split("");
   var first = splitString.splice(0, indexOfFirstVowel); 
   var newWord = splitString.concat(first);
  }
 var hello = newWord.join('') + "ay";
 return hello;
}

translatePigLatin("glove");

// You can use slice on string as well
function translatePigLatin(str) {
  let first_vowel = str.search(/[aoeui]/);
  if (first_vowel === 0) {
    return str + "way";
  } else {
    // str.slice(first_vowel) => "ove"
    // str.slice(0, first_vowel) => "gl"
    return str.slice(first_vowel) + str.slice(0, first_vowel) + "ay";
  }
}

translatePigLatin("glove");
