var quotes = [
  ["\"I'm ugly and I'm proud\"", "SpongeBob"],
  ["\"It took us three days to make that potato salad. Three days!\"", "Some fish from SpongeBob SquarePants lol"],
  ["\"Do you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.\"", "Mr Krabs"],
  ["\"If a book about failures doesn't sell, is it a success?\"", "Jerry Seinfeld"]
]

$(document).ready(function() {
  $("#new-quote").on("click", function() {
    var random = Math.floor(Math.random()*quotes.length);
    var quote = quotes[random][0];
    var author = quotes[random][1];
    var twitter =

    $(".quote-text").html(quote);
    $(".author").html(author);
  });
});
