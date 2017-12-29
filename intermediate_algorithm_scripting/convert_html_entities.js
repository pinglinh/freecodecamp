// We place our regex for finding &, <, >, " or i in a variable called char
// We then make a function which will go through each case and return the correct HTML entity
// We then use the replace method on the string being passed to the whole convertHTML function
// Replace method takes 2 parameters, one being what you want to change and the second is what you want to change it with
// We are passing char as the first parameter because we want it to find either of those characters &|<|>|"|'
// We then pass htmlEntity as a second parameter variable
// We enclose this in a variable called newString and return it
function convertHTML(str) {
  var char = /&|<|>|"|'/g;

  function htmlEntity(match) {
    switch(match) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "\"":
        return "&quot;";
      case "\'":
        return "&apos;";
    }
  }

 var newString = str.replace(char, htmlEntity);
 return newString;
}

convertHTML("<>");
convertHTML('Stuff in "quotation marks"');


// You can also just chain the replace method 
function convertHTML(str) {
  var char = /&|<|>|"|'/g;
  var newString = str.replace(/&/g, "&amp;")
                     .replace(/</g, "&lt;")
                     .replace(/>/g, "&gt;")
                     .replace(/"/g, "&quot;")
                     .replace(/'/g, "&apos;")
  return newString;
}
convertHTML("<>");
convertHTML('Stuff in "quotation marks"');
