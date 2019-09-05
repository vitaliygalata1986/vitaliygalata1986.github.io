$(function(){
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on');
        $('.header-nav').slideToggle();
    })

    $(".header__arrow-bottom").click(function() {
        $("html, body").animate({ scrollTop: $(".header").height()+120 }, "slow");
        return false;
    });

     var mapHeight = $('.contacts' ).height();
     $('iframe').css('height', mapHeight);


});


