function got_quote(quote) {
  $("#quote").html(quote[0].content + "<p>— " + quote[0].title + "</p>");
}

$("#new-quote").click(function(){
  var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
  $.ajax(url, {
    cache: false,
    success: got_quote
  });
});
