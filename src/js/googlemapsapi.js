/**
 * Created by stefan on 22.11.15.
 */
/*
 jQuery('.icons').click(function(){
 jQuery('.icons').removeClass('active');
 jQuery(this).addClass('active');
 });


 $(document).ready(function () {
 var map1 = new GMaps({
 div: '.maps',
 lat: 47.6801466,
 lng: 13.0926543,
 zoom: 14
 });
 map1.addMarker({
 lat: 47.6801466,
 lng: 13.0926543,
 title: 'HTL Hallein Ball',
 infoWindow: {
 content: "HTL Hallein Ball"
 }
 });
 });

 function calcRoute(travelmode) {
 $(document).ready(function () {
 var map2 = new GMaps({
 div: '.maps',
 lat: 47.6801466,
 lng: 13.0926543
 });
 GMaps.geolocate({
 success: function (position) {
 map2.setCenter(position.coords.latitude, position.coords.longitude);
 map2.addMarker({
 lat: 47.6801466,
 lng: 13.0926543,
 title: 'HTL Hallein Ball',
 infoWindow: {
 content: "HTL Hallein Ball"
 }
 });
 map2.addMarker({
 lat: position.coords.latitude,
 lng: position.coords.longitude,
 title: 'Hier bin ich',
 infoWindow: {
 content: "Hier bin ich"
 }
 });

 map2.drawRoute({
 //origin: [position.coords.longitude, position.coords.latitude],
 origin: [13.0926543, 47.6801466],
 destination: [13.092654, 47.680146],
 travelMode: 'driving',
 strokeColor: '#131540',
 strokeOpacity: 0.6,
 strokeWeight: 6
 });

 //strokeColor: '#f28111',
 },
 error: function (error) {
 alert("Es konnte keine Ortung durchgefuert werden");
 },
 not_supported: function () {
 alert("Ihr Browser unterstuetzt keine Ortung");
 }
 });
 });

 }*/

jQuery('.icons').click(function () {
    jQuery('.icons').removeClass('active');
    jQuery(this).addClass('active');
});

$(".maps").gmap3({
    map: {
        options: {
            center: [47.6801466, 13.0926543],
            zoom: 14
        }
    },
    marker: {
        latLng: [47.6801466, 13.0926543]
    }
});
//function calcRoute(travelmode) {
//    $('.maps').gmap3('destroy').remove();
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition);
//
//    } else {
//        alert("Geolocation is not supported by this browser.");
//
//    }
//
//}
//
//function showPosition(meposition) {
//    $(".maps").gmap3({
//        map: {
//            options: {
//                zoom: 14,
//                center: [meposition.coords.latitude, meposition.coords.longitude]
//            }
//        },
//        marker: {
//            latLng: [47.6801466, 13.0926543]
//        },
//        marker: {
//            latLng: [meposition.coords.latitude, meposition.coords.longitude]
//        }
//    });
//}
