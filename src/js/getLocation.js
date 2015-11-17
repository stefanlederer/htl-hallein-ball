/**
 * Created by stefan on 17.11.15.
 */

var latitude;
var longitude;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}