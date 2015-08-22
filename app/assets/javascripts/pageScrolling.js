// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerHeight = $('.header').outerHeight();
        var scrollNumber = $($anchor.attr('href')).offset().top - headerHeight;
        $('html, body').stop().animate({
            scrollTop: scrollNumber
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});