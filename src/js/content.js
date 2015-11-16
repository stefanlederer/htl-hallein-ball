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
            $('.big-header').height($(window).height() - $('#nav').height());
            $('#container').height($(window).height());
            if ($('#header').hasClass('big-header')) {
                $('#content').css('top', $(window).height());
            }
            $('.confetti').height($('#content').height() + 50);
        });
        $('.fly-down, .fa-angle-down').click(function () {
            $('#container').animate({
                scrollTop: $(window).height() - $('#nav').height()
            }, 1000)
        });
        $('#container').scroll(function () {
            if($('#container').scrollTop() === 0){
                $('.infos').removeClass('opacity0');
                $('.infos').addClass('opacity1');
            }else {
                $('.infos').removeClass('opacity1');
                $('.infos').addClass('opacity0');
            }
        });
    }
};
