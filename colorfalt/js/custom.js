$(document).ready(function() {
    // мобильное меню
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on');
        $('.header-nav').slideToggle();
    });

   // video background
   $('.header').vide({
     'mp4': 'video/video1',
     'webm': 'video/video2',
     'ogv': 'video/video3',
     'poster': 'video/video-bg',
   });

   // карусель
    $(".homesect-slider").owlCarousel({
        items : 1,
        nav : false,
        navText : "",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600
    });

    // аккордион
    $('.collapse').on('show.bs.collapse', function () {
        //console.log( $(this));
        $(this).prev().find('.material-icons-add_circle').removeClass().addClass('material-icons-remove_circle faqs-block__icons');
    })

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).prev().find('.material-icons-remove_circle').removeClass().addClass('material-icons-add_circle faqs-block__icons');
    });

    // слайдер
    $('.works__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    // плавная прокрутка google chrome
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};

    // // параллакс
    // $(window).scroll(function () {
    //     let st = $(this).scrollTop();
    //     $(".header-top").css({
    //         "transform" : "translate(0%, " + st/8 + "%"
    //     });
    //     $(".header-middle").css({
    //         "transform" : "translahomesect-sliderte(0%, -" + st/10 + "%"
    //     });
    // })

    $('.header-nav .header-nav__link, .dropdown-item').on('click', function(e){
        e.preventDefault();
        $('.header-nav .header-nav__link').removeClass('header-nav__link-active').filter(this).addClass('header-nav__link-active');
        var selector = $(this).attr('href');
        var h = $(selector);
        $('html, body').animate({
            scrollTop: h.offset().top -70
        }, 1000);
    });

    if ($(window).scrollTop() > 50) { // если отступ от верхнего края экрана больше 50
        $(".contact-us-top").fadeIn(300); // то плавно показываем кнопку
    } else {
        $(".contact-us-top").fadeOut(300); // иначе скрываем
    }

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) { // если отступ от верхнего края экрана больше 50, this ссыдается на window
            $(".header-top, .header-wrap").addClass("active-nav");
            $(".contact-us-top").fadeIn(300); // то плавно показываем кнопку
        } else {
            $(".header-top, .header-wrap").removeClass("active-nav");
            $(".contact-us-top").fadeOut(300); // иначе скрываем
        }
    });
    // прокрутка вверх
    $('.contact-us-top').click(function (){
        $("html, body").animate({
            scrollTop: 0
        }, 400);
    });
});



