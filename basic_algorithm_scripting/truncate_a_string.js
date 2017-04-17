function truncateString(str, num) {

  if (num <= 3) {
    var shortTruncatedString = str.slice(0, num);
    return shortTruncatedString + "...";
    }

  else if (str.length > num) {
     var truncatedString =  str.slice(0, num-3);
     return truncatedString + "...";
    }

  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

// If the given max string length 'num' given is less than or equal to 3 truncate add "..." which will not add to the string length

// Else if the string given is longer than the max string length 'num', include "..." in the total string length at the end - which is why had to take away 3 from the num so that when adding ... it will be equal to num length

// If the string is more or equal to num, it will just return str
