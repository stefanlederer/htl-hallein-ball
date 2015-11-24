//new App.map({'mapDiv': '.maps', 'target': {'lat': 47.680143, 'lng': 13.094843}, 'routeColor': '#1185F2', 'buttonsDiv': $('.google-maps .icons')}) htl-hallein-ball standard
App.map = function (options) {
    this.options = $.extend({
        'mapDiv': '#map',
        'defaultTravelMode': 'driving',
        'target': {
            'lat': 0,
            'lng': 0
        },
        'buttonsDiv': $('button'),
        'instructionUl': $('.instructions'),
        'routeColor': '#000000',
        'routeWeight': 6,
        'routeOpacity': 0.6,
        'calcAdvancedRoute': true,
        'calcAdvancedRouteButton': $('.advanced-route')
    }, options);
    this.position = {
        'latitude': 0,
        'longitude': 0
    };
    this.target = {
        'latitude': this.options.target.lat,
        'longitude': this.options.target.lng
    }
    this.travelMode = this.options.defaultTravelMode;
    this.map;
    this.addedMark = false;
    this.init();
}

App.map.prototype = {
    /**
     * Initializes the Object
     */
    init: function () {
        var me = this;
        this.map = new GMaps({
            div: me.options.mapDiv,
            lat: me.target.latitude,
            lng: me.target.longitude
        });
        this.getPosition();
        this.bindEvents();
    },
    /**
     * Binds all default Events
     */
    bindEvents: function () {
        var me = this;
        $(me.options.buttonsDiv).click(function () {
            $(me.options.buttonsDiv).removeClass('active');
            $(this).addClass('active');
            if ($(this).hasClass('driving')) {
                me.travelMode = 'driving';
                me.getPosition()
            } else if ($(this).hasClass('walking')) {
                me.travelMode = 'walking';
                me.getPosition()
            }
        });
        $(me.options.calcAdvancedRouteButton).click(function () {
            if(me.options.calcAdvancedRoute) {
                me.drawAdvancedRoute();
            }
        });
    },
    /**
     * get the Position of the user and connects to the target and sets Mark on both positions
     */
    getPosition: function () {
        var me = this;
        $('.map-loader').show();
        $('.map-loader').css('opacity', '1');
        GMaps.geolocate({
            success: function (position) {
                $('.map-loader').hide();
                $('.map-loader').css('opacity', '0');
                me.position.latitude = position.coords.latitude;
                me.position.longitude = position.coords.longitude;
                me.drawRoute();
                me.setMarker();
            },
            error: function (error) {
                alert('Geolocation failed: ' + error.message);
            },
            not_supported: function () {
                alert("Your browser does not support geolocation");
            }
        });
    },
    /**
     * draws the route between two position
     */
    drawRoute: function () {
        var me = this;
        this.map.cleanRoute();
        this.map.drawRoute({
            origin: [me.position.latitude, me.position.longitude],
            destination: [me.target.latitude, me.target.longitude],
            travelMode: me.travelMode,
            strokeWeight: me.options.routeWeight,
            strokeOpacity: me.options.routeOpacity,
            strokeColor: me.options.routeColor
        })
    },
    /**
     * draws an advanced Route where it generates an exact description of the way
     */
    drawAdvancedRoute: function () {
        var me = this;
        $(this.options.instructionUl).html('');
        this.map.cleanRoute();
        this.map.travelRoute({
            origin: [me.position.latitude, me.position.longitude],
            destination: [me.target.latitude, me.target.longitude],
            travelMode: me.travelMode,
            step: function (e) {
                $(me.options.instructionUl).append('<li style="opacity:0;">' + e.instructions + '</li>');
                $(me.options.instructionUl).find('li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function () {
                    $(me.options.instructionUl).find('li:eq(' + e.step_number + ')').css('opacity', '1');
                    me.map.setCenter(e.end_location.lat(), e.end_location.lng());
                    me.map.drawPolyline({
                        path: e.path,
                        strokeColor: me.options.routeColor,
                        strokeOpacity: me.options.routeOpacity,
                        strokeWeight: me.options.routeWeight
                    });
                });
            }
        });
    },
    /**
     * sets an marker on the users position and on the targets position
     */
    setMarker: function () {
        var me = this;
        //for user position
        if(this.addedMark === false) {
            this.map.addMarker({
                lat: me.position.latitude,
                lng: me.position.longitude,
                title: 'Hier bist du'
            })
            this.addedMark = true;
        }
        //for target position
        this.map.addMarker({
            lat: me.target.latitude,
            lng: me.target.longitude,
            title: 'Hier ist der Ball'
        });
    }
}