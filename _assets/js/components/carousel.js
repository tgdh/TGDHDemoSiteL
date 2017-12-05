var Carousel = (function ($) {
    'use strict';

    var _init = function($carousel){
        
        $carousel.each(function(){

            var $this = $(this),
                count = $this.children().length,
                settings = {                    
					autoPlay: $this.data("auto-play") ? $this.data("auto-play") : false,
					speed: $this.data("speed") ? $this.data("speed") : 2000,
					fade: $this.data("fade") ? $this.data("fade") : false,
					nav: $this.data("nav") ? $this.data("nav") : false,
                    pauseOnHover: $this.data("pause") ? $this.data("pause") : false,
					dots: $this.data("dots") ? $this.data("dots") : false
                };

            if(count > 1) {
                $this.slick({
				    autoplay: settings.autoPlay,
					autoplaySpeed: settings.speed,
                    fade: settings.fade,	
				    arrows: settings.nav,				
                    prevArrow: "<button class='c-carousel--prev'><i class='ico-ic-arrow-back-24px'></i></button>",
                	nextArrow: "<button class='c-carousel--next'><i class='ico-ic-arrow-forward-24px'></i></button>",
                    pauseOnHover: settings.pause,
                    dots: settings.dots,
					dotsClass: 'c-carousel__dots',
                });
            }
        }); 
    };
  
  return {
    init: _init
  };

})(jQuery);