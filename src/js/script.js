
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.js-hamburger').click(function(){
        if($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
            $('.header').removeClass('is-open')
            $('.sp-header').removeClass('is-open')
            $("body").removeClass("body-open");
        }else{
            $(this).addClass('is-open');
            $('.header').addClass('is-open')
            $('.sp-header').addClass('is-open')
            $("body").addClass("body-open");
        }
    });
    
    var swiper = new Swiper(".js-mainSwiper", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        loopedSlides: 4,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        effect: 'fade',
    });


    var swiper = new Swiper(".js-campaignSwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    loopedSlides: 4,
    width: 238.92,
    allowTouchMove: false,
    // autoplay:{
    //     delay: 3000,
    //     disableOnInteraction: false
    // },
    breakpoints: {
    374: {
        spaceBetween: 30,
        width: 280
    },
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

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
        }
    });
});

$(".js-to-top").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    });

});

