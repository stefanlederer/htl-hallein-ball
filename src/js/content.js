App.content = function () {
    this.init();
};

App.content.prototype = {
    init: function () {
        $('#header').height($(window).height() - $('#nav').height());
        $('#container').height($(window).height());
        $('#content').css('top', $(window).height());
        $('.confetti').height($('#content').height());
        this.bindEvents();
    },
    bindEvents: function () {
        $(window).resize(function () {
            $('#header').height($(window).height() - $('#nav').height());
            $('#container').height($(window).height());
            $('#content').css('top', $(window).height());
            $('.confetti').height($('#content').height());
        });
        $('.fly-down, .fa-angle-down').click(function () {
            $('#container').animate({
                scrollTop: $(window).height() - $('#nav').height()
            }, 1000)
        });
    }
};
