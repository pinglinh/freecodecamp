function search_results(data) {
  var results = data.query.search;
  $(".results-list").html("");
  for (var r of results) {
    var li = $("<li></li>");
    $(".results-list").append(li);
    var link = "https://en.wikipedia.org/wiki/" +
    r.title;
    li.html("<h3><a href='"+link+"' target='_new_'>"+r.title+"</a></h3>"+"<div class='snippet'>"+r.snippet+"</div>"
      );
  }
}

function search() {
  var query = $('#search').val();
  console.log("searching", query);
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
      action: 'query',
      list: 'search',
      srsearch: query,
      format: 'json',
      srprop: 'snippet'
    },
    dataType: 'jsonp',
    success: search_results
  });
}
