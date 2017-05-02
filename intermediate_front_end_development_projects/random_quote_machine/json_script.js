// Found the API to not work due to cross browser origin issues

$(document).ready(function() {
  var quotesContainer = $("#quote-text");
  var authorContainer = $("#author");
  $("#new-quote").on("click", function(){
    $.getJSON( "http://www.yerkee.com/api/fortune", function( data ) {
    console.log(data);
    var theQuote = data[0].fortune;
    var theAuthor = data[0].title;
    console.log(theQuote);
    console.log(theAuthor);
    $(quotesContainer).html(theQuote);
    $(authorContainer).html(theAuthor);
    });
  });
});
