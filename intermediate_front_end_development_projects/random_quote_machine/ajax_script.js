function get_quote(data) {
  var quotesContainer = $(".quote-text");
  var authorContainer = $(".author");
  var theQuote = data[0].content;
  var theAuthor = data[0].title;
  $(quotesContainer).html(theQuote);
  $(authorContainer).html(theAuthor);
}

function tweet() {
  var quotesContainer = $(".quote-text");
  var authorContainer = $(".author");
  var quote = quotesContainer.text() + "-" + authorContainer.text();
  var url = "https://twitter.com/intent/tweet?text=" + encodeURI(quote);
  window.open(url, 'newwindow');
}

$(document).ready(function() {
  $("#new-quote").click(function() {
     $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      type: "GET",
      async: true,
      crossDomain: true,
      dataType: "json",
      cache: false,
      success: get_quote
    });
  });
  $("#twitter-button").click(tweet);
});
