// Project Requirement #1: I can see the weather in my current location.
// - Version 2:
//  - changed API to www.wunderground.com, it meets all requirements.  //done!
//  - Make button that alternates between Fahrenheit/Celsius.

// var tweetText = '';
// $(document).ready(function () {
//     $("#newQuote").on('click', function () {
//         $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
//             $("#quoteText").html(JSON.stringify(json.quoteText));
//             $("#quoteAuthor").html(JSON.stringify(json.quoteAuthor));
//             tweetText = json.quoteText + json.quoteAuthor;
//             $("a.myLink").attr("href", function () {
//                 var textie = '';
//                 textie = "https://twitter.com/intent/tweet?text=Quote: "+tweetText;
//                 return textie;
//             });
//             $.ajaxSetup({ cache: false});
//         });
//     });
// });

// $(document).ready(function () {
//     $("#newQuote").on('click', function () {
//         $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
//             $("#quoteText").html(JSON.stringify(json.quoteText));
//             $("#quoteAuthor").html(JSON.stringify(json.quoteAuthor));
//             tweetText = json.quoteText + json.quoteAuthor;
//             $("a.myLink").attr("href", function () {
//                 var textie = '';
//                 textie = "https://twitter.com/intent/tweet?text=Quote: "+tweetText;
//                 return textie;
//             });
//             $.ajaxSetup({ cache: false});
//         });
//     });
// });

$(document).ready(function () {
    $.getJSON("http://api.wunderground.com/api/e3efe06177afa5ad/conditions/q/autoip.json?", function (json) {
        var far = json.current_observation.temp_f;
        var cel = json.current_observation.temp_c;
        $("#displayLocation").html(JSON.stringify(json.current_observation.display_location.full));
        $("#currentTemp").html(far + '&deg' + 'F');
        $("img").attr("src", function () {
            var textie = json.current_observation.icon_url;
            return textie;
        });
        $("#changeFtoC").on('click', function () {
            $("#currentTemp").html(cel + '&deg' + 'C');
        });
        $.ajaxSetup({ cache: false});

    })
});