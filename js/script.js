$(function () {
    'use strict'

    // Flow slider js
    $('.flow_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        swipeToSlide: 0,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Swiper slider
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 130,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    // Acoordian js
    $('.card').on('click', function () {
        $('.add_border').removeClass('add_border');
        $(this).toggleClass('add_border');
    });

    // Coundown js
    $('.count1').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.count2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('.count3').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    //Tounament scroll js
    $(".tourna_scroll").niceScroll({
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });

    //  Bc Top
    $('.bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.bc_top').fadeIn();
        } else {
            $('.bc_top').fadeOut();
        }
    });

    // Menu Fix
    let navoff = $('.main_menu').offset().top
    console.log(navoff);

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix')
        } else {
            $('.main_menu').removeClass('menu_fix')
        }
    });


    // Veno Box
    $('.play').venobox({
        spinner: "cube-grid",
        spinColor: "#ff39dc",
        // popup: true,
    });

    // new VenoBox({
    //     selector: '.map',
    // });

    // Slick Slider
    $('.about_game_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 0,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});