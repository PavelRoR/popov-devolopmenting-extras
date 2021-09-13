$(document).ready(function() {
        /* Якорь */
        $(".button-up").click(function (f) {
            f.preventDefault();
            var a = $(this).attr("href"),
                b = $(a).offset().top;
            $("body,html").animate({
                scrollTop: b
            }, 500);
    
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