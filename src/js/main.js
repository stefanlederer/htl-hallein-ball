$(document).ready(function () {
    new App.content();
    if($('body').hasClass('travel')) {
        new App.map({'mapDiv': '.maps', 'target': {'lat': 47.680143, 'lng': 13.094843}, 'routeColor': '#1185F2', 'buttonsDiv': $('.google-maps .icons')})
    }
});
