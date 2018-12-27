function sentensify(str) {
  let splitStr = str.split(/\W/)
  return splitStr.join(" ");
}
sentensify("May-the-force-be-with-you");