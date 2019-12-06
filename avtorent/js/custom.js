$(function(){
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on');
        $('body').toggleClass('mob_menu_open');
    })

    $("#scroller").click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() === $('.header-bottom').height() || $(this).scrollTop() > $('.header-bottom').height()) {
            $('body').addClass("header-top-fixed");
        } else {
            $('body').removeClass("header-top-fixed");
        }

        if ($(this).scrollTop() > 200) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }

    });

    $('.js-pagenav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'swing',
    });

    $('.menu-mob .js-pagenav li a').click(function() {
        $('body').removeClass('mob_menu_open');
        $('.header-wrap__button').removeClass('on');
    });

    wow = new WOW( {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            scrollContainer: null
        }
    );
    wow.init();

});