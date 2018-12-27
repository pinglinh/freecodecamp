var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  let newTitle = title.toLowerCase().trim().split(/\s+/).join("-");
  return newTitle;
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

