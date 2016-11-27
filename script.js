var lat = 0;
var lon = 0;

// function success(pos) {
//     var crd = pos.coords;
//
//     lat = pos.coords.latitude;
//     lon = pos.coords.longitude;
// };

navigator.geolocation.getCurrentPosition(function (pos) {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
});