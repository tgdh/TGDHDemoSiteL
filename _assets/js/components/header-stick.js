var HeaderStick = (function ($) {
	'use strict';

	var _headerStick = function() {
        $(function(){
            $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                var height = $('.c-header').height()/4;

                if (scroll >= height) {
                    $('.c-header').addClass('js-fixed');
                } else {
                    $('.c-header').removeClass('js-fixed');
                }
            });
        });
	};

	return {
		init: _headerStick
	};

})(jQuery);