// function initialization
$(window).on("load", function () {
    $(window).scrollTop(0);
});

$(function () {
    $('.intrestBox').on('click', function () {
        $(this).toggleClass('selected');
    })

    $('.pillSwiper .pill').on('click', function () {
        $('.pillSwiper').find('.pill').removeClass('active');
        $(this).addClass('active')
    })
    pillSlider()
});

function pillSlider() {
    let swiper = new Swiper('.pillSwiper', {
        slidesPerView: 13,
        spaceBetween: 5,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    let swiperMin = new Swiper('.pillSwiper.min', {
        slidesPerView: 4,
        spaceBetween: 5,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}