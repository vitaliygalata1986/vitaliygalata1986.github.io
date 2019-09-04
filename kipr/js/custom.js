$(document).ready(function() {

    // плавная прокрутка вверх
    $('.footer__link').click(function (){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // инициализация карусели
    $('.carousel').carousel({
        interval: false
    })

    // колонки одинаковой высоты
    $(".popular-country .popular-country-block").equalHeights();

    // плавное выпадающее меню в футоре
    $('.footer .navbar-toggler').click(function (){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });

});



