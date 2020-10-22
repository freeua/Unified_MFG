$(document).ready(function () {
	$('.why-choose-second-section__blog-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		prevArrow: $('.why-choose-second-section-prev-slide'),
		nextArrow: $('.why-choose-second-section-next-slide'),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					variableWidth: true,
				}
			}
		]
	});

	$('.why-choose-fourth-section__news-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
		prevArrow: $('.why-choose-fourth-section-prev-slide'),
		nextArrow: $('.why-choose-fourth-section-next-slide'),
	});

	$('.why-choose-fifth-section__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		// variableWidth: true,
		prevArrow: $('.why-choose-fifth-section-prev-slide'),
		nextArrow: $('.why-choose-fifth-section-next-slide'),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	/*------------------------------------------*/
	$('.why-choose-fifth-section__slider1').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		// variableWidth: true,
		prevArrow: $('.why-choose-fifth-section-prev-slide1'),
		nextArrow: $('.why-choose-fifth-section-next-slide1'),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.why-choose-fifth-section__slider1').slickLightbox({
	});


	/*------------------------------------------*/


	// $(document).on('afterClose.fb', function (e, instance, slide) {
	// 	$('.why-choose-fifth-section__slider').slick('unslick');
	// 	$('.why-choose-fifth-section__slider').slick({
	// 		slidesToShow: 5,
	// 		slidesToScroll: 1,
	// 		dots: false,
	// 		speed: 300,
	// 		infinite: false,
	// 		variableWidth: true,
	// 		prevArrow: $('.why-choose-fifth-section-prev-slide'),
	// 		nextArrow: $('.why-choose-fifth-section-next-slide'),
	// 		responsive: [
	// 			{
	// 				breakpoint: 1100,
	// 				settings: {
	// 					slidesToShow: 4,
	// 					slidesToScroll: 1
	// 				}
	// 			},
	// 			{
	// 				breakpoint: 767,
	// 				settings: {
	// 					slidesToShow: 2,
	// 					slidesToScroll: 1
	// 				}
	// 			}
	// 		]
	// 	});
	// });


	$('.why-choose-sixth-section__reviews_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
		prevArrow: $('.why-choose-sixth-section-prev-slide'),
		nextArrow: $('.why-choose-sixth-section-next-slide'),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

})