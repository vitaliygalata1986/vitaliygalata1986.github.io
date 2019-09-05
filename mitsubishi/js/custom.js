$(function(){
    $(window).load(function(){
        $('body').removeClass('loaded');
    });

    $('.block-checkbox input').styler();
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

    $('.tabs li a').click(function(){
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide');
        $(this).parent().addClass('active');
        return false;
    });

    // Дата время
    $('#date_time_write').datepicker({
        autoClose: true,
        timepicker: true,
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        clearButton: true,
    });


    // Кнопка хочу пройти тест-драйв
    // Кнопка хочу пройти тест-драйв
    $('.header-left__button').click(function() {
        $('html, body').animate({
            scrollTop: $(".nav-tab-list").offset().top
        }, 1000);
    });

});


