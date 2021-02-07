jQuery(document).ready(function($){
		$('.slick-responsabilidad').slick({
			slidesToShow: 1,
  			slidesToScroll: 1,
  			autoplay: true,
  			autoplaySpeed: 1000,
			dots: false,
  			infinite: true,
  			speed: 500,
  			fade: true,
  			cssEase: 'linear',
			pauseOnHover: false,
			arrows: false
		});
		
		
		
		$('figure#load-01, figure#load-02').css('opacity','0');
		
		$('figure#load-01').delay(250).animate({ opacity: 1 },250,'easeInExpo');
		$('figure#load-02').delay(500).animate({ opacity: 1 },250,'easeInExpo');
		
		$('#precarga').delay(1500).animate({ opacity: 0 },500,'easeInExpo');
        $('#precarga').animate({ top: '-100%' },100,'easeInExpo');
		
		
		
		$('#mobile-menu').css('right','-100%');
		$('#a-mobile-close-es').hide();
		$('#a-mobile-close-en').hide();
		
		$('#a-mobile-es').click(function(){
			$('#mobile-menu').animate({
				right: 0
			},500,'easeOutExpo');
			$('#a-mobile-es').hide();
			$('#a-mobile-close-es').show();
			event.preventDefault();
		});
		
		$('#a-mobile-close-es').click(function(){
			$('#mobile-menu').animate({
				right: '-100%'
			},500,'easeOutExpo');
			$('#a-mobile-es').show();
			$('#a-mobile-close-es').hide();
			event.preventDefault();
		});
		
		$('#a-mobile-en').click(function(){
			$('#mobile-menu').animate({
				right: 0
			},500,'easeOutExpo');
			$('#a-mobile-en').hide();
			$('#a-mobile-close-en').show();
			event.preventDefault();
		});
		
		$('#a-mobile-close-en').click(function(){
			$('#mobile-menu').animate({
				right: '-100%'
			},500,'easeOutExpo');
			$('#a-mobile-en').show();
			$('#a-mobile-close-en').hide();
			event.preventDefault();
		});
	});
