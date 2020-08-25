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
	    }
	  ]
	});
    
});