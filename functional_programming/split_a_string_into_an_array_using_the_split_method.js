function splitify(str) {
  let splitStr = str.split(/\W/);
  return splitStr;
}

splitify("Hello World,I-am code");