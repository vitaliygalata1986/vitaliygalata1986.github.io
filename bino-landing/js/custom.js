$(function(){
    var $links = $('.menu a, .section-wrap__icon a');
    $links.on('click', function(e){
        e.preventDefault();
        var link = $(this);
        var $target = $(link.attr('href'));
        if($target.length > 0){
            $('html, body').animate({
                scrollTop: $target.offset().top
            }, 1000);
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });

    $('.arrow-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    var typed = new Typed('.section-top__text', {
        strings: ['WELCOME TO BINO'],
        typeSpeed: 80,
        backSpeed: 40,
      //  loop:true
    });

    var target_block = $(".counts");
    var blockStatus = true;
    $(window).scroll( function () {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
            if(scrollEvent && blockStatus) {
                blockStatus = false;
                calcCount();
            }
    })

    function calcCount() {
        for (var i = 0; i < $('.counts__number').length; i++) {
            var end = $('.counts__number').eq(i).text();
            countStart(end, i);
        }
    }

    function countStart(end, i) {
        var start = 0;
        var interval = setInterval(function () {
            $('.counts__number').eq(i).text(++start);
            if (start == end) {
                clearInterval(interval);
            }
        }, 5);
    }



        wow = new WOW( {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                scrollContainer: null // optional scroll container selector, otherwise use window
            }
        );
        wow.init();


});