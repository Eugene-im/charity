//= ./lib/jquery-3.4.1.min.js
//= ./lib/slick.min.js

$('.first__slider').slick({
        dots: true,
        infinite: false,
})
$('.forth__slider').slick({
        dots: false,
        infinite: false,
        slidesToShow:2
})

$('.sixth__slider').slick({
        infinite: false,
        asNavFor: '.seventh__slider',
        slidesToShow:4
})

$('.seventh__slider').slick({
        infinite: false,
        arrows:false,
        asNavFor: '.sixth__slider',
        slidesToShow:4
})
$('.eighth__slider').slick({
        dots: true,
        infinite: false,
        slidesToShow:5
        // centerMode: true

})

