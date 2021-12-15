// preloader
$(window).on('load', function () {
    $('.loader-bg').hide();
});


$(document).ready(function () {
    $(".owl-one").owlCarousel({
        loop: true,
        margin: 10,

        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 2,
                margin: 50,
            }
        }
    });
    $(".owl-two").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            900: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $('.owl-three').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});


var tl = gsap.timeline({
    defaults: {
        duration: 2,
        ease: "back.out(1.7)",


    }
});
tl.from(".stagger1", {
    y: 50,
    duration: 1.5,
    stagger: .2,
    ease: "back.out(1.7)",
    opacity: 0
})



// youtube popup
$(function () {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.item-box').show('1000');
        } else {
            $('.item-box').not('.' + value).hide('1000');
            $('.item-box').filter('.' + value).show('1000');
        }
    })

    // add class active on clicked
    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
})