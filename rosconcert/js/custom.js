$(document).ready(function() {

    $('.header-wrap__button').click(function () {
        $(this).toggleClass('on');
        $('.header-menu').slideToggle();

    })

    setEqualHeight($(".article-news__block-title"));
    setEqualHeight($(".article-news__block-text"));

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each( function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


});



