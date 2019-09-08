
// $(window).scroll(function () {
//     $('.homesect .homesect-section__slogan, .homesect .homesect-section__description').animated("fadeInRight");
// })

$(window).load(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        $('body').addClass('ios');
    };
    $('body').removeClass('loaded');
});


//SVG Fallback
//if(!Modernizr.svg) {
//    $("img[src*='svg']").attr("src", function() {
//        return $(this).attr("src").replace(".svg", ".png");
//    });
//};


$(document).ready(function() {
    $('.footer .header-wrap__button').click(function (){
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });
    $('.top').click(function (){
        $("html, body").animate({ scrollTop: 0 }, "slow"); // прокрутка вверх
        return false;
    });
    $('.header__arrow-button').click(function (){
        $("html, body").animate({ scrollTop: $('.header').height() + 90 }, "slow");
        return false;
    });
    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on'); // в css добавляется класс on для смены состояния
        $('.main-nav').slideToggle();
    });

    $(".homesect_property .homesect-content .homesect-content-item").equalHeights();
    $(".homesect_property .homesect__bottom .homesect-content-item").equalHeights();
    $(".homesect-items-cards .homesect-items-cards__card").equalHeights();
    $(".homesect_advantages").waypoint(function () {

        $(".homesect_advantages .homesect-items-cards__card").each(function (index) {
            var ths = $(this);
            setInterval(function () {
                ths.removeClass("homesect-items-cards__card_off").addClass("homesect-items-cards__card_on");
            },150*index);

        });

    },{
        offset:"20%"
    })

    $(".homesect-accounting_services").waypoint(function () {
        $(".homesect-accounting_services .tc-item").each(function (index) {
           // var ths = $(this);
            setTimeout(function () {
               // alert(index);
                var myAnimation = new DrawFillSVG({
                    elementId: "tc-svg-" + index
                });
                // ths.removeClass("").addClass("");
            },700*index);

        });
        this.destroy(); // чтобы фигуры заново не перерисовывалист
    },{
        offset:"20%"
    })

    $(".homesect-slider").owlCarousel({
        items : 1,
        nav : true,
        navText : "",
        loop : true, // рекурсивная карусель
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600

    });

    $('.homesect .homesect-section__slogan').animated("fadeInRight");
    $('.homesect .homesect-section__description').animated("fadeInLeft");
    $('.homesect-content-item-wrap').animated("zoomIn");
    $('.homesect-slide').animated("rollIn");
    $('.homesect_transactions .application').animated("fadeInRight"); // для нижней формы

    $(".homesect_transactions").waypoint(function () {
        $(".homesect-items-block").each(function (index) {
            var ths = $(this);
            setTimeout(function () {
                ths.addClass("on");
            }, 200 * index);

        });
    }, {
        offset : "30%"
});

    $(".my-tems").waypoint(function () {
        $(".homesect__professional-item").each(function (index) {
            var ths = $(this);
            setTimeout(function () {
                ths.addClass("on");
            }, 200 * index);

        });
    }, {
        offset : "30%"
    });

    $(".homesect .button").click(function() {
        $("#callback h4").html($(this).text());
        $("#callback input[name=formname]").val($(this).text());
    }).magnificPopup({
        type:"inline",
        mainClass: 'mfp-forms'
    });


    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $(".application ").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail.php", // слеш нужно для того, чтобы указать, что данный файл будет лежать в корне на хостинге
            data: $(this).serialize() // сбор всех полей формы и отправляет на mail.php
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.magnificPopup.close();
                $(".application ").trigger("reset"); // сбрасываем все поля формы
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});


