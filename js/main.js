$(document).ready(function() {
  $("button").click(function() {
    $(".quotes").html(randomQuote(quotesArray));

  });


  var quotesArray = ["blah", "poo", "to be or not to be", "an eye for an eye makes the whole world blind"];

  function randomQuote(quoteArray) {
    for (var i = 0; i < quoteArray.length; i++) {
      var j = Math.floor(Math.random() * (i));
      var temp = quoteArray[i];
      quoteArray[i] = quoteArray[j];
      quoteArray[j] = temp;
    }
    return temp;
  }

});
