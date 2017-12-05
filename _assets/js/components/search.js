var Search = (function($) {
    'use strict';

    var search = function(){
        $(function(){
            $('.c-header__search').on('click', function(){
                $('.c-search').addClass('js-search-open');
            });

            $(document).keydown(function(e){
                if(e.keyCode == 27) {
                    if ($('.c-search').hasClass('js-search-open')) {
                        $('.c-search').removeClass('js-search-open');
                    } 
                }
            });
        });
    };

    return {
        init: search
    };

})(jQuery);