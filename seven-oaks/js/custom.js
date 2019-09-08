$(window).load(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('body').addClass('ios');
    };
    $('body').removeClass('loaded');
});


$(function(){
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on'); // в css добавляется класс on для смены состояния
        $('.main-nav').slideToggle();
    })
});


