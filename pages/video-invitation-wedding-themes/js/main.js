// preloader
$(window).on('load', function () {
    $('.loader-bg').hide();
});




// animation decoration gsap
var tl = gsap.timeline({
    defaults: {
        duration: .8,
        ease: "back.out(1.7)",
        opacity: 0,
    }
});

tl.from(".stagger1", {
    y: 50,
    duration: 1.5,
    stagger: .2,
    ease: "back.out(1.7)",
    opacity: 0
})
tl.from(".stagger2", {
    y: 50,
    duration: 1.5,
    stagger: .2,
    ease: "back.out(1.7)",
    opacity: 0
}, "=-2.5")



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