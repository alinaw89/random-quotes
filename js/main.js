// $(document).ready(function() {

//   var quotes = ["The ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people. - M.L.K.", "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke", "I object to violence because when it appears to do good, the good is only temporary; the evil it does is permanent. - Mahatma Gandhi", "If you can't make it good, at least make it look good. - Bill Gates", "Whatever you are, be a good one. - Abraham Lincoln", "Despite everything, I believe that people are really good at heart. - Anne Frank"];

//   var randomQuote = function(quoteArray) {
//     for (var i = 0; i < quoteArray.length; i++) {
//       var j = Math.floor(Math.random() * (i));
//       var temp = quoteArray[i];
//       quoteArray[i] = quoteArray[j];
//       quoteArray[j] = temp;
//     }
//     return temp;
//   }

//   $("button").click(function() {
//     $(".quotes").html(randomQuote(quotes));
//     $(".tweet").append('<a href="https://twitter.com/share" class="twitter-share-button"{count} data-text="' + randomQuote(quotes) + '" data-size="large"></a>');
//     twttr.widgets.load();
//   });

// });

$(document).ready(function() {
  var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?';

  var getQuote = function(data) {
    $('.quotes').text(data.quoteText);
    var tweetQuote = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' - ' + data.quoteAuthor;
    $('.author').text(data.quoteAuthor);
    $('.tweet').attr("href", tweetQuote);
  }


  $('.button_quote').click(function() {
    $.getJSON(url, getQuote, 'jsonp');
  });
});
