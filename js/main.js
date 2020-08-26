$( document ).ready(function() {
    $('.products-section__slider').slick({
    	slidesToShow: 3,
  		slidesToScroll: 3,
    	dots: false,
  		speed: 300,
  		infinite: true,
  		responsive: [
    	 {
	      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
	      }
	    ]
    });

    $('.customers-selling-section__products-wrapper').slick({
    	slidesToShow: 4,
  		slidesToScroll: 4,
    	dots: false,
  		speed: 300,
  		infinite: true,
  		variableWidth:true,
  		prevArrow: $('.prev-slide'),
    	nextArrow: $('.next-slide'),
    	responsive: [
	    	{
		      breakpoint: 812,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		  ]
    });

    $('.unified-manufacturing-section__products-wrapper').slick({
    	slidesToShow: 3,
  		slidesToScroll: 3,
    	dots: false,
  		speed: 300,
  		infinite: true,
  		variableWidth:true,
  		prevArrow: $('.unified-prev-slide'),
    	nextArrow: $('.unified-next-slide'),
    	responsive: [
	    	{
		      breakpoint: 812,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    }
		]
    });


    $('.testimonials-section__testimonials-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.testimonials-section__logos'
	});

	$('.testimonials-section__logos').slick({
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  infinite: true,
	  asNavFor: '.testimonials-section__testimonials-slider',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
	    	{
		      breakpoint: 812,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
    	
    // slider
	  $slick_slider = $('.products-section__columns');
	  settings_slider = {
	    dots: false,
	    arrows: true,
	    prevArrow: $('.products-section-prev-slide'),
    	nextArrow: $('.products-section-next-slide'),
	    slidesToShow: 2,
  		slidesToScroll: 2,
  		speed: 300,
  		infinite: true,
  		variableWidth:true,
	    // more settings
	  }
	  slick_on_mobile( $slick_slider, settings_slider);

	// slick on mobile
	  function slick_on_mobile(slider, settings){
	    $(window).on('load resize', function() {
	      if ($(window).width() >= 767) {
	        if (slider.hasClass('slick-initialized')) {
	          slider.slick('unslick');
	        }
	        return
	      }
	      if (!slider.hasClass('slick-initialized')) {
	        return slider.slick(settings);
	      }
	    });
	  };


	$(window).scroll(function() {
	    if($(window).scrollTop() > 10 ){
	       $('.header__mobile-menu-wrapper').addClass('header__mobile-menu-fixed');
	    } else  {
	      $('.header__mobile-menu-wrapper').removeClass('header__mobile-menu-fixed');
	    }
	});

	$('.footer__menu-wrapper .footer__menu-title').click(function() {
		$(this).parents('.footer__menu-wrapper').find('.footer__nav').slideToggle();
	});



});