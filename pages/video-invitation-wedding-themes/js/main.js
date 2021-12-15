// preloader
$(window).on('load', function () {
    $('.loader-bg').hide();
});


// nav
$(function () {

    var siteSticky = function () {
        $(".js-sticky-header").sticky({
            topSpacing: 0
        });
    };
    siteSticky();

    var siteMenuClone = function () {

        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };
    siteMenuClone();

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