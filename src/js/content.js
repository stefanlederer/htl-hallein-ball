App.content = function () {
    this.init();
};

App.content.prototype = {
    /**
     * Initializes the Object
     */
    init: function () {
        $('#header').height($(window).height() - $('#nav').height());
        $('#container').height($(window).height() - 70);
        if ($('#header').hasClass('big-header')) {
            $('#content').css('top', $(window).height());
        }
        $('.confetti').height($('#content').height());
        if ($(window).width() < 1024) {
            $('#nav').height($(window).height());
        } else {
            $('#nav').height(40);
        }
        this.bindEvents();
    },
    /**
     * binds all triggered Events
     */
    bindEvents: function () {
        var me = this;
        $(window).resize(function () {
            $('.big-header').height($(window).height() - $('#nav').height());
            $('#container').height($(window).height() - 70);
            if ($('#header').hasClass('big-header')) {
                $('#content').css('top', $(window).height());
            }
            $('.confetti').height($('#content').height() + 50);
            if ($(window).width() < 1024) {
                $('#nav').height($(window).height());
            } else {
                $('#nav').height(40);
            }
        });
        $('.fly-down, .fa-angle-down').click(function () {
            console.log('test');
            $('#container').animate({
                scrollTop: $(window).height() - 40
            }, 1000)
        });

        $('#container').scroll(function () {
            if ($('#container').scrollTop() === 0) {
                $('.infos').css('opacity', '1');
            } else {
                $('.infos').css('opacity', '0');
            }
        });
        $(document).on('click', '.mobile-navbar .fa-bars', function () {
            me.open($(this));
        });
        $(document).on('click', '.mobile-navbar .fa-times', function () {
            me.close($(this));
        });
        $(document).on('click', '.opened', function () {
            me.close($(this).children('.fa-times'));
        });
        $(document).on('click', '.closed', function () {
            me.open($(this).children('.fa-bars'));
        });
        $(document).swipeleft(function () {
            me.open($('.mobile-navbar .fa-bars'))
        });
        $(document).swiperight(function () {
            me.close($('.mobile-navbar .fa-times'))
        });
    },
    /**
     * open the menu
     * @param elem
     */
    open: function (elem) {
        $('.fa-times').show();
        $('#nav').css('right', '0px');
        $(elem).hide();
        $(elem).parent().removeClass('closed');
        $(elem).parent().addClass('opened');
    },
    /**
     * closes the menu
     * @param elem
     */
    close: function (elem) {
        $('.fa-bars').show();
        $('#nav').css('right', '-100%');
        $(elem).hide();
        $(elem).parent().addClass('closed');
        $(elem).parent().removeClass('opened');
    }
};
