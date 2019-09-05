$(function(){

    $('.slider-block').slick({
        dots: true
    });
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on'); // в css добавляется класс on для смены состояния
        $('.main-nav, .header__tel').slideToggle();
    })

    $('.first').click(function () {
        $(this).toggleClass('on'); // в css добавляется класс on для смены состояния
        $('.list-box-first').slideToggle();
    })
    $('.last').click(function () {
        $(this).toggleClass('on'); // в css добавляется класс on для смены состояния
        $('.list-box-second').slideToggle();
    })
});


