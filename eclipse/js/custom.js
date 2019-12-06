$(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }

        if ($(this).scrollTop() > $('.header').height()) {
            $('body').addClass("fixed-nav");
        } else {
            $('body').removeClass("fixed-nav");
        }
    });

    $("#scrolltop").click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.js-pagenav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'swing',
    });

        $(".form-block").submit(function() {
            $.ajax({
                type: "POST",
                url: "php/form.php",
                data: $(this).serialize()
            }).done(function() {
                document.querySelector('.successful').innerText="Спасибо, ваш запрос отправлен.";
                setTimeout(function() {
                    $(".form-block").trigger("reset");
                    document.querySelector('.successful').innerText ='';
                }, 2000);
            });
            return false;
        });

        $("#form-callback").submit(function() {
            $.ajax({
                type: "POST",
                url: "php/form-modal.php",
                data: $(this).serialize()
            }).done(function() {
                document.querySelector('.successful-modal').innerText="Спасибо, ваш запрос отправлен.";
                setTimeout(function() {
                    $("#form-callback").trigger("reset");
                    document.querySelector('.successful-modal').innerText ='';
                }, 2000);
            });
            return false;
        });

    $(".form-bottom").submit(function() {
        $.ajax({
            type: "POST",
            url: "php/form-bottom.php",
            data: $(this).serialize()
        }).done(function() {
            document.querySelector('.successful-bottom').innerText="Спасибо, ваш запрос отправлен.";
            setTimeout(function() {
                $(".form-bottom").trigger("reset");
                document.querySelector('.successful-bottom').innerText ='';
            }, 2000);
        });
        return false;
    });

    $(".form-center").submit(function() {
        var file= $("#file").val();
        if(file==""){
            alert("Вы не выбрали файл");
            return false;
        }
        else{
            $.ajax({
                type: "POST",
                url: "php/form-center.php",
                data: $(this).serialize()
            }).done(function() {
                document.querySelector('.successful-top').innerText="Спасибо, ваш запрос отправлен.";
                setTimeout(function() {
                    $(".form-center").trigger("reset");
                    document.querySelector('.successful-top').innerText ='';
                }, 2000);
            });
        }
        return false;
    });

    $(".form-footer").submit(function() {
        $.ajax({
            type: "POST",
            url: "php/form-footer.php",
            data: $(this).serialize()
        }).done(function() {
            document.querySelector('.successful-footer').innerText="Спасибо, ваш запрос отправлен.";
            setTimeout(function() {
                $(".form-footer").trigger("reset");
                document.querySelector('.successful-footer').innerText ='';
            }, 2000);
        });
        return false;
    });

});