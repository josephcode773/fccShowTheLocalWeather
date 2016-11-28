// Project Requirement #1: I can see the weather in my current location.
// - Get lat and lon numbers  //done! -Canceled
// - Use Use openweathermap.org , by geographic coordinates and API for JSON.
// - Version 2:
//  - changed API to www.wunderground.com, it meets all requirments.

// var lat = 0;
// var lon = 0;
//
// navigator.geolocation.getCurrentPosition(function (pos) {
//     lat = pos.coords.latitude;
//     lon = pos.coords.longitude;
// });
//
// var lattie = function () {
//     var lat = 0;
//     navigator.geolocation.getCurrentPosition(function (pos) {
//         lat = pos.coords.latitude;
//         // lon = pos.coords.longitude;
//     });
// };

var tweetText = '';
$(document).ready(function () {
    $("#newQuote").on('click', function () {
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
            $("#quoteText").html(JSON.stringify(json.quoteText));
            $("#quoteAuthor").html(JSON.stringify(json.quoteAuthor));
            tweetText = json.quoteText + json.quoteAuthor;
            $("a.myLink").attr("href", function () {
                var textie = '';
                textie = "https://twitter.com/intent/tweet?text=Quote: "+tweetText;
                return textie;
            });
            $.ajaxSetup({ cache: false});
        });
    });
});