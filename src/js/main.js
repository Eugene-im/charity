//= ./lib/jquery-3.4.1.min.js
//= ./lib/slick.min.js

$('.first__slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
})
$('.forth__slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        slidesToShow: 2
})

$('.sixth__slider').slick({
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        asNavFor: '.seventh__slider',
        // slidesToShow: 4,
        resposive: [
                {
                        breakpoint: 800,
                        settings: {
                                arrows: false,
                                slidesToShow: 3
                        }
                }
        ]
})

$('.seventh__slider').slick({
        infinite: false,
        arrows: false,
        asNavFor: '.sixth__slider',
        // slidesToShow: 4,
        resposive: [
                {
                        breakpoint: 800,
                        settings: {
                                arrows: false,
                                slidesToShow: 3
                        }
                }
        ]
})
$('.eighth__slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        // slidesToShow: 5,
        resposive: [
                {
                        breakpoint: 800,
                        settings: {
                                arrows: false,
                                slidesToShow: 3
                        }
                }
        ]
})

