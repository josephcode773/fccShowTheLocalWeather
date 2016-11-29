var far = "";
var cel = "";
var farOut = "";
var celOut = "";
$(document).ready(function () {
    $.getJSON("http://api.wunderground.com/api/e3efe06177afa5ad/conditions/q/autoip.json?", function (json) {
        far = json.current_observation.temp_f;
        cel = json.current_observation.temp_c;
        farOut = (far + ' Degrees '+ 'Fahrenheit');
        celOut = (cel + ' Degrees '+ 'Celsius');
        $("#displayLocation").html(JSON.stringify(json.current_observation.display_location.full));
        $("#currentTemp").html(far + ' Degrees '+ 'Fahrenheit');
        $("img").attr("src", function () {
            var textie = json.current_observation.icon_url;
            return textie;
        });
        $.ajaxSetup({ cache: false});
    })
});
function changeText() {
    var demo = document.getElementById('currentTemp');
    if (demo.innerHTML === farOut) {
        demo.innerHTML = celOut;
    } else {
        demo.innerHTML = farOut;
    }
}