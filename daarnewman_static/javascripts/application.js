var Simande = window.Simande || {};
    Simande.debug = false;

( function() {

  function init() {
		
		// Old browsers
		// if (!Modernizr.svg) {
		//   		$(".header_logo img").attr("src", "images/logo-header.png");
		//   		$(".footer_logo img").attr("src", "images/logo-footer.png");
		// }

		/** Homepage scroll icon display **/
		
		window.addEventListener("scroll", function(event){
			var top = this.pageYOffset;
				
			if(top > 20) {
				$(".icon_scroll").fadeOut(150);
			} else {
				$(".icon_scroll").fadeIn(150);
			}
		});
		
		/** Homepage hero image switch **/
		
		function switchHeroImage() {
		
			var switchedImage = $('.switch_image').length > 0,
					hero_container = $('.hero_homepage');
			
			if(switchedImage) {
				hero_container.removeClass('switch_image');
			} else {
				hero_container.addClass('switch_image');
			}
			
			loopHeroImage(6000);
			
		}
		
		function loopHeroImage(duration) {
			
			var setDuration = duration !== undefined ? duration : 3000;
			
			setTimeout(function(){ 
				switchHeroImage();
			}, setDuration);
		}
		
		loopHeroImage();
		
		/** Main navigation mobile toggle **/
		
		$('.responsive_menu').bind('click', function(e) {
			
			e.preventDefault();
			$('.header_navigation').fadeIn(100);
			
		});
		
		$('.mobile_navigation_close').bind('click', function(e) {
			
			e.preventDefault();
			
			$('.header_navigation').fadeOut(100);
			
		});
		
		$('.testimonials_carousel_pagination a').bind('click', function(e) {
			
			e.preventDefault();
			
			var carousel_container = $('.testimonials_carousel_container'),
					carousel_blockquotes = carousel_container.find('blockquote'),
					carousel_count = carousel_blockquotes.length,
					carousel_direction = $(this).data('direction')
					current_blockquote = carousel_container.data('display'),
					next_blockquote = current_blockquote != carousel_count ? current_blockquote + 1 : 1,
					prev_blockquote = current_blockquote != 1 ? current_blockquote - 1 : carousel_count;
			
			if(carousel_direction == 'next') {
				
				carousel_container.animate({
					marginLeft: carousel_blockquotes.eq(next_blockquote-1).position().left*-1
				}).data('display', next_blockquote);
				
			} else { //previous
				
				carousel_container.animate({
					marginLeft: carousel_blockquotes.eq(prev_blockquote-1).position().left*-1
				}).data('display', prev_blockquote);
				
			}
			
		});
		
  };

  $(document).ready(init);

})();