$(document).ready(function() {
	$('.fadeThis').hover(function() {
		var fade = $('> .hover', this);
		if (fade.is(':animated')) {
			fade.stop().fadeTo(500, 1);
		} else {
			fade.fadeIn(500);
		}
	}, function () {
		var fade = $('> .hover', this);
		if (fade.is(':animated')) {
			fade.stop().fadeTo(500, 0);
		} else {
			fade.fadeOut(500);
		}
	});
	$('.fadeThis > .hover').empty();
})


$(function () {
        $('.rs-slider').refineSlide({
            maxWidth : 640, // set to native image width (px)
            transition            : 'fade', 
            
            useArrows : true,
            useThumbs : false,
           
            arrowTemplate : '<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>', // String: The markup used for arrow controls (if arrows are used). Must use classes '.rs-next' & '.rs-prev'
          
        });
    });
    
    
    
