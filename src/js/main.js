//= ./lib/jquery-3.4.1.min.js
//= ./lib/slick.min.js

$('.first__slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
});

$('.second__slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true,
        asNavFor:'.third__slider'
});

$('.third__slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        asNavFor:'.second__slider'
});

$('.forth__slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        slidesToShow: 2
});

$('.sixth__slider').slick({
        infinite: false,
        asNavFor: '.seventh__slider',
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
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
});

$('.seventh__slider').slick({
        asNavFor: '.sixth__slider',
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        // slidesToShow: 4,
        resposive: [
                {
                        breakpoint: 8000,
                        settings: {
                                arrows: false,
                                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                                slidesToShow: 3
                        }
                },
                {
                        breakpoint: 800,
                        settings: {
                                arrows: true,
                                slidesToShow: 3
                        }
                }
        ]
});
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
});

