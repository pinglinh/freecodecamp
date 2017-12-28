// Checking whether the argument passed in is of type boolean or not
function booWho(bool) {
  if (typeof(bool) === "boolean") {
    return true;
  }
  return false;
}

booWho(null);
