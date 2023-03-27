// function initialization
$(window).on("load", function () {
    // $(window).scrollTop(0);
});

$(function () {
    reviewSwiper()
});

function reviewSwiper() {
    const reviewSlider = new Swiper('.swiper', {
        speed: 1000,
        loop: true,
        autoplay:{
            delay: 3500
        },
        autoplayDisableOnInteraction: false,
        runCallbacksOnInit: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    reviewSlider.on('slideChange', function () {
        let currentPagi = document.querySelector('#numberSlides span');
        currentPagi.innerHTML = reviewSlider.realIndex +1
    });
}