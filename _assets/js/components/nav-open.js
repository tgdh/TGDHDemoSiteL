var NavOpen = (function($) {
    'use strict';

    var navOpen = function(){
        $(function(){
            $('.c-header__hamburger').on('click', function(){
                $('.c-nav--main').toggleClass('js-nav-open');
            });

            var span = $(".ham-span");
            $(".c-header__hamburger").click(function() {
                if (span.hasClass("active")) {
                    span.removeClass("active");
                    span.addClass("cross");
                } else {
                    span.removeClass("cross");
                    span.addClass("active");
                }
            });
        });
    };

    return {
        init: navOpen
    };

})(jQuery);