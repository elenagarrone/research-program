// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var headerHeight;
        var headerPosition = $('.header').css('position');

        if (headerPosition == 'absolute') {
          var headerHeight = 0;
        } else {
          var headerHeight = $('.header').outerHeight();
        }
        
        var scrollNumber = $($anchor.attr('href')).offset().top - headerHeight;
        $('html, body').stop().animate({
            scrollTop: scrollNumber
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});