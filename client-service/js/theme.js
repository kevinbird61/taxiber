$(document).ready(function() {
    // Start of use strict
    'use strict';

    $('.account-page').hide();
    $('.account-signin').show();

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, 'easeInOutExpo');
                return false;
            }
        }
    });

    // Highlight the top navbar as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 54
    });

    // Collapse responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Offset for Main Navigation
    $('#navbar').affix({
        offset: {
            top: 100
        }
    })

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($('#navbar').offset().top > 100) {
            $('#navbar').addClass('navbar-shrink');
        } else {
            $('#navbar').removeClass('navbar-shrink');
        }
    });

    // Initialize and configure magnific popup lightbox plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigationByImgClick: true,
            preload: [0, 1]
        },
        image: {
            error: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // Define animation of responsive-block
    $('.responsive-block').click(function() {
        $(this).toggleClass('selected');
    });

    // Define animation of section-account
    $('.account-tabs .account-tab').click(function() {
        // For sigin tab
        if ($(this).hasClass('tab-signin')) {
            $('.account-tabs .account-tab').removeClass('active');
            $(this).addClass('active');
            $('.account-page').hide();
            $('.account-signin').show();
        }
        // For Google
        if ($(this).hasClass('tab-google-signup')) {
            $('.account-tabs .account-tab').removeClass('active');
            $(this).addClass('active');
            $('.account-page').hide();
            $('.account-google').show();
        }
        // For Facebook
        if ($(this).hasClass('tab-facebook-signup')) {
            $('.account-tabs .account-tab').removeClass('active');
            $(this).addClass('active');
            $('.account-page').hide();
            $('.account-facebook').show();
        }

        // For Local
        /*if ($(this).hasClass('tab-signin')) {
            $('.account-tabs .account-tab').removeClass('active');
            $(this).addClass('active');
            $('.account-page').hide();
            $('.account-signin').show();
        }
        if ($(this).hasClass('tab-signup')) {
            $('.account-tabs .account-tab').removeClass('active');
            $(this).addClass('active');
            $('.account-page').hide();
            $('.account-signup').show();
        }*/
    });
    $('.section-right').mousemove(function(e) {
        var amountMovedX = (e.pageX * -1 / 30);
        var amountMovedY = (e.pageY * -1 / 9);
        $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
});