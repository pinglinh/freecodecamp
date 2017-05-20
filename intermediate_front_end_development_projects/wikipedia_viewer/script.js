function search_results(data) {
  var results = data.query.search;
  $(".results-list").html("");
  for (var r of results) {
    var li = $("<li></li>");
    $(".results-list").append(li);
    var link = "https://en.wikipedia.org/wiki/" +
    r.title;
    li.html()
  }
}
