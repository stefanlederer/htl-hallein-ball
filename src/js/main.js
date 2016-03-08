$(document).ready(function () {
    var gridActive = false;
    new App.content();
    if ($('body').hasClass('travel')) {
        new App.map({
            'mapDiv': '.maps',
            'target': {'lat': 47.680143, 'lng': 13.094843},
            'routeColor': '#1185F2',
            'buttonsDiv': $('.google-maps .icons')
        })
    }
    if ($(window).width() > 768) {
        window.setTimeout(function () {
            $('.sponsoring-image-wrapper').masonry({
                // set itemSelector so .grid-sizer is not used in layout
                itemSelector: 'figure',
                gutter: 20
            });
            gridActive = true;
        }, 100);
    }
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            if (gridActive) {
                $('.sponsoring-image-wrapper').masonry('destroy');
                gridActive = false;
            }
        } else {
            if (gridActive === false) {
                $('.sponsoring-image-wrapper').masonry({
                    // set itemSelector so .grid-sizer is not used in layout
                    itemSelector: 'figure',
                    gutter: 20
                });
                gridActive = true;
            }
        }
    });
});
