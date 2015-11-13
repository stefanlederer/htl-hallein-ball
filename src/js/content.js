App.content = function () {
    this.init();
};

App.content.prototype = {
    init: function () {
        $('.header-img').height($(window).height() - $('#nav').height());
        this.bindEvents();
    },
    bindEvents: function () {
        $(window).resize(function () {
            $('.header-img').height($(window).height() - $('#nav').height());
        });
    }
};
