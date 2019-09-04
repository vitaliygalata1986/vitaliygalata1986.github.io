$(window).load(function(){
    $('body').removeClass('loaded');

    function displayime(){
        var now = new Date(); // будем хранить объект date для текущего времени- если мы создаем часы, то нужно создавать объект Date для текущего времени
        var days = document.querySelector(".days span");
        var hourse = document.querySelector(".hourse span");
        var minutes = document.querySelector(".minutes span");
        var sDAte = new Date(2019,11,31); // формируем дату для отсчета - таймер обратного отсчета - отсчитывает количество времени до определенной даты, которая должна в будущем наступить
        var timer = sDAte.getTime() - now.getTime(); // вычислим разность между двумя метками времени. Метод getTime возвращает внутреннее пресдтавление времени - колич. миллисекунд, прошедших с полнучи 1 января 1970 года
       // в итоге в переменной timer распологается количество миллисекунд до даты, к которой мы выпоняем отсчет
        // данную разность нужно привести в к дням, часам, минутам и секундам.
        var day = parseInt(timer/(24*60*60*1000)); // преобразуем милисекунды в дни. В одном дне 24 часа, в каждом часе 60 минут, в каждой минуте 60 секунд, и в каждой секунде 1000 миллисекунд
        // parseInt - приводим к целочисленному значения, так как оно дробное
        var hours = parseInt(timer/(60*60*1000))%24; // преобразуем милисекунды в часы. Выражение 24 - здесь больше не интересует. В каждом часе 60 минут, в каждой минуте 60 секунд, и в каждой секунде 1000 миллисекунд
        // parseInt - приводим к целочисленному значения, так как оно дробное
        // при этом дни мы уже отображаем, поэтому мы должны из переменной hours убрать дни, которые уже подсчитаны. Используем операцию остаток от деления и делим на 24.
        // 24 - это количесво часов в одном дне, а значит остаток от деления, который мы получим на указаное число и составляет то значение, которое мы будем отображать в таймере

        var mins = parseInt(timer/(60*1000))%60; // далее разность приводим к минутам. Удаляем 60. При этом опять исключаем часы.
        var sec = parseInt(timer/(1000))%60;     // приводим разницу к секундам

        days.innerHTML = day;
        hourse.innerHTML = hours;
        minutes.innerHTML = mins;
        setTimeout(displayime, 1000); // данная функция запустит функцию displayime через 1с
    }
    displayime();
});


$(function(){

    $('.myform-check').styler();
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

    $('.fancyvideo').fancybox({
        buttons: ['close'],
    });

    // Кнопка хочу пройти тест-драйв
    $('.header-right__button').click(function() {
        $('html, body').animate({
            scrollTop: $(".nav-tab-list").offset().top
        }, 1000);
    });

    // маска телефона
    $("#phone").mask("+7 (999) 99-99-999");
});


