// document ready

$(function() {
    // 加入導覽列置頂
    $(function() {
        var $header = $('.header_wrap');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $header.addClass('fixed');
                $header.css('padding', '0 80px');
            } else {
                $header.removeClass('fixed');
            }
        });

    });
    // smoove滾動載入
    $('.smv').smoove({
        min_width: 0,
        offset: '15%',
        // opacity: 15,
    });

    // slick

    $('.slick').slick({
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});