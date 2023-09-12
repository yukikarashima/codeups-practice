
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.js-hamburger').click(function(){
        if($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
            $('.header').removeClass('is-open')
            $('.sp-header').removeClass('is-open')
        }else{
            $(this).addClass('is-open');
            $('.header').addClass('is-open')
            $('.sp-header').addClass('is-open')
        }
    })
    var swiper = new Swiper(".js-mainSwiper", {
        loop: true,
        speed: 1000,
        autoplay:{
            delay: 3000
        }
    });


    var swiper = new Swiper(".js-campaignSwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 4,
    width: 280,
    allowTouchMove: false,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
    768: {
        spaceBetween: 40,
        width: 333
    }
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    }
});

});

