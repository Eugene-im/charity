//= ./lib/jquery-3.4.1.min.js
//= ./lib/jquery-ui.min.js
//= ./lib/slick.min.js


$(document).ready(function () {
        $(".lang__dd").selectmenu();
        $(".text__dd").selectmenu();


        $(window).scroll(function () {
                if ($(window).width() > 1030) {
                        if ($(this).scrollTop() > 0) {
                                $('.header__fline').hide();
                        }
                        else {
                                $('.header__fline').show();
                        }
                }
        });
        $('.btn.switch').click(function(){
                $(this).toggleClass('trig');
                $('.menu__mob').toggle();
                $('.overflow').toggle();
        });
        $('.overflow').click(function(){
                $('.btn.switch').toggleClass('trig');
                $('.menu__mob').toggle();
                $(this).toggle();
        });
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
                asNavFor: '.third__slider'
        });

        $('.third__slider').slick({
                dots: false,
                infinite: false,
                arrows: false,
                slidesToShow: 1,
                swipe: false
                // asNavFor: '.second__slider'
        });

        // $('.forth__slider').slick({
        //         dots: false,
        //         infinite: false,
        //         prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        //         nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        //         slidesToShow: 2
        // });

        $('.sixth__slider').slick({
                infinite: false,
                asNavFor: '.seventh__slider',
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                arrows: true,
                slidesToScroll: 1,
                slidesToShow: 4,
                responsive: [
                        {
                                breakpoint: 1180,
                                settings: {
                                        arrows: false,
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                }
                        },
                        {
                                breakpoint: 800,
                                settings: {
                                        arrows: false,
                                        slidesToShow: 3,
                                        slidesToScroll: 1
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        arrows: false,
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                }
                        }

                ]
        });

        $('.seventh__slider').slick({
                asNavFor: '.sixth__slider',
                slidesToScroll: 1,
                slidesToShow: 4,
                arrows: false,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                responsive: [
                        {
                                breakpoint: 1180,
                                settings: {
                                        arrows: true,
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                }
                        },
                        {
                                breakpoint: 800,
                                settings: {
                                        arrows: true,
                                        slidesToShow: 3,
                                        slidesToScroll: 1
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        arrows: true,
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                }
                        }

                ]
        });
        $('.eighth__slider').slick({
                dots: true,
                infinite: false,
                speed: 300,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 5,
                                }
                        },
                        {
                                breakpoint: 600,
                                settings: {
                                        arrows: false,
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        arrows: false,
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                }
                        }

                ]
        });

        $('.nineth__slider').slick({
                infinite: false,
                dots: false,
                slidesToShow: 6,
                arrows: false,
                focusOnSelect: true,
                asNavFor: '.tenth__slider'
        });
        $('.tenth__slider').slick({
                infinite: false,
                dots: false,
                slidesToShow: 1,
                arrows: false,
                focusOnSelect: true,
                swipe: false
        });
        var str;
        $('img.slick-slide').hover(function () {
                str = $(this).attr('src');
                var ext = str.split('.').pop();
                var x = str.substring(0, str.length - 4) + 'hover.' + ext;
                $(this).attr('src', x)
        }, function () {
                $(this).attr('src', $(this).attr('src').replace('hover', ''))
        });
});