function get_quote(data) {
  var quotesContainer = $(".quote-text");
  var authorContainer = $(".author");
  var theQuote = data[0].content;
  var theAuthor = data[0].title;
  $(quotesContainer).html(theQuote);
  $(authorContainer).html(theAuthor);
}

$(document).ready(function() {
  $("#new-quote").click(function() {
     $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      type: "GET",
      async: true,
      crossDomain: true,
      dataType: "json",
      cache: false,
      success: get_quote
    });
  });
});
