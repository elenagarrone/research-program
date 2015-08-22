// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var scrollNumber = $($anchor.attr('href')).offset().top - 150;
        $('html, body').stop().animate({
            scrollTop: scrollNumber
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});