/* jshint devel:true */

$(document).ready(function() {

    var LogoItem = $('._js-logoAnimation'),
        i = 1;

    $(function() {
        LogoItem.on('mouseover', function() {
            var self = this;
            function nextImage() {
                $(self).data('timeout', setTimeout(function() {
                    if (i === 7) {
                        i = 1
                    }
                    LogoItem.attr('style', 'background-position: 0 ' + -i * 60 + 'px');
                    i++;
                    nextImage();
                }, 200));
            }
            nextImage();
        }).on('mouseout', function() {
            clearTimeout($(this).data('timeout'));
        });
    });

    $('._js-load-more').on('click', function(){
        $(this).addClass('load-more--loading')
    });

    $('._js-searchTrigger').on('click', function(){
        $('body').addClass('search-active');
        $('._js-searchOverlay').fadeIn(function(){
            $('._js-searchInput').focus();
        });
    });
    $('._js-searchOverlay').on('click', function(){
        $('body').removeClass('search-active');
        $(this).fadeOut();
    });
    $('._js-searchInner').on('click', function(e){
        e.stopPropagation();
    });

});
