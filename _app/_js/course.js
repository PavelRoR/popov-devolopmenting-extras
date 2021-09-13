$(document).ready(function () {
    /* Якорь */
    $(".button-up").click(function (f) {
        f.preventDefault();
        var a = $(this).attr("href"),
            b = $(a).offset().top;
        $("body,html").animate({
            scrollTop: b
        }, 500);

    });
    /* Таймер */
    $(function () {
        var clock;
        var dates = new Array(
            new Date("September 22, 2021 00:00 UTC+3"),
            new Date("September 23, 2021 00:00 UTC+3"),
            new Date("September 24, 2021 00:00 UTC+3")
        );

        var currentDate = new Date();


        var sale = {
            name: $('#sale'),
            saleText: new Array('1 000р.')
        };

        var today = {
            name: $('#today'),
            todayText: new Array('13 900р.')
        };

        var link = {
            name: $('#link'),
            linkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1169&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1170&clean=true&lg=ru')
        };

        var prepLink = {
            name: $('#prepLink'),
            prepLinkText: new Array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1175&clean=true&lg=ru', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1176&clean=true&lg=ru')
        };

        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

            function dayDiff(first, second) {
                return (second - first) / (1000 * 60 * 60 * 24);
            }
            if (dayDiff(currentDate, futureDate) < 100) {
                $('.clock').addClass('twoDayDigits');
            } else {
                $('.clock').addClass('threeDayDigits');
            }
            if (diff < 0) {
                diff = 0;
                sale.name.text(sale.saleText[0]);
                today.name.text(today.todayText[0]);
                link.name.attr('href', link.linkText[0]);
                prepLink.name.attr('href', prepLink.prepLinkText[0]);
            }
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale.name.text(sale.saleText[0]);
                        today.name.text(today.todayText[0]);
                        link.name.attr('href', link.linkText[0]);
                        prepLink.name.attr('href', prepLink.prepLinkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

            function dayDiff(first, second) {
                return (second - first) / (1000 * 60 * 60 * 24);
            }
            if (dayDiff(currentDate, futureDate) < 100) {
                $('.clock').addClass('twoDayDigits');
            } else {
                $('.clock').addClass('threeDayDigits');
            }
            if (diff < 0) {
                diff = 0;
                $('.timer,  .cost-sale, .cost-today').remove();
                $('.cost-full span').addClass('unbroken');
                link.name.attr('href', link.linkText[1]);
                prepLink.name.attr('href', prepLink.prepLinkText[1]);
            }
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.timer,  .cost-sale, .cost-today').remove();
                        $('.cost-full span').addClass('unbroken');
                        link.name.attr('href', link.linkText[1]);
                        prepLink.name.attr('href', prepLink.prepLinkText[1]);
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

            function dayDiff(first, second) {
                return (second - first) / (1000 * 60 * 60 * 24);
            }
            if (dayDiff(currentDate, futureDate) < 100) {
                $('.clock').addClass('twoDayDigits');
            } else {
                $('.clock').addClass('threeDayDigits');
            }
            if (diff < 0) {
                diff = 0;
                $('.prepayment').remove();
            }
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.prepayment').remove();
                    }
                }
            });
        }
    });
    // Модалка
    $('.more-button').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
    $('.text-rev-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });
    /*Видео-отзывы*/
    $(".video-wrapper-rev").click(function () {
        $(".video-wrapper-rev iframe").each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="yt-button"></div>');
        })
        var a = $(this).attr("data-youtube");
        $(this).html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
    /*Конец документа*/
});