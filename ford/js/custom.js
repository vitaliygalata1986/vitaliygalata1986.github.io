$(window).load(function(){
    $('body').removeClass('loaded');
});

//Chrome Smooth Scroll
try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
} catch(err) {

};

$(function(){
    new WOW().init();

    // Дата время
    $('#date_time_write').datepicker({
        autoClose: true,
        timepicker: true,
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        clearButton: true,
    });

    // Кнопка хочу пройти тест-драйв
    $('.toTestDrive').click(function() {
        $('html, body').animate({
            scrollTop: $('.test-drive-block').offset().top
        }, 1000, function() {
            $('#block-right').css({'opacity': 0, 'margin-top': 0, });
            $('#block-left').removeClass('.opened.closed').css('display','block');
        });
    });

    $(".test-drive-block__drive-right").on('click', function(e){
        e.preventDefault();
        var $this=$(this);
        $this.toggleClass('panel-left-opened');
        var $leftpanel=$('.test-drive-block__left');
        var $rightpanel=$('.test-drive-block__right');
        if($this.hasClass('panel-left-opened')) // если имеется класс panel-left-opened (не щелкнули пока по кнопке)
        {
             $rightpanel.finish().fadeOut(150, function() { // скрываем правую панель. Animate.finish() - завершує анімацію.
                 $('.test-drive-block__drive-par').html('Я уже прошел тест-драйв');
                 $('.test-drive-block__drive-logo').html('Запись');
                 $leftpanel.fadeIn(150); // показываем левую
             });
        }
        else { // если щелкнули по Я уже прошел тест-драйв
            $leftpanel.finish().fadeOut(150, function() { // скрываем левую панель
                $('.test-drive-block__drive-par').html('Я хочу пройти тест-драйв');
                $('.test-drive-block__drive-logo').html('Я уже прошел');
                $rightpanel.fadeIn(150); // показываем правую панель
            });
        }
    });

    $('.test-drive-block__drive-right-container').click(function() {
        if($('.test-drive-block__left').css('display') == 'block') {
            $('.test-drive-block__drive-left .test-drive-block__drive-text').text('тест-драйв');
        }
        else {
            $('.test-drive-block__drive-left .test-drive-block__drive-text').text('на тест-драйв');
        }
    });

    $('.test-drive-block__form label input').styler();

});



