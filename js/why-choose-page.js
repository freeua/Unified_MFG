$(document).ready(function () {
	$('.why-choose-second-section__blog-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		appendArrows: ".why-choose-second-section__arrows-wrapper",

		// prevArrow: $('.why-choose-second-section-prev-slide'),
		// nextArrow: $('.why-choose-second-section-next-slide'),
		arrows: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	jQuery('.why-choose-second-section-next-slide').on('click', function () {
		console.log('next slide');
	});

	jQuery('.why-choose-second-section-prev-slide').on('click', function () {
		console.log('prev slide');
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

	// $('.why-choose-fifth-section__slider').slick({
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 300,
	// 	infinite: false,
	// 	// variableWidth: true,
	// 	prevArrow: $('.why-choose-fifth-section-prev-slide'),
	// 	nextArrow: $('.why-choose-fifth-section-next-slide'),
	// 	responsive: [
	// 		{
	// 			breakpoint: 1100,
	// 			settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 1
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });

	/*------------------------------------------*/
	$('.why-choose-fifth-section__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		infinite: false,
		asNavFor: '.why-choose__video-slider',
		focusOnSelect: true,
		variableWidth: false,
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

	$('.why-choose__video-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		speed: 300,
		infinite: false,
		asNavFor: '.why-choose-fifth-section__slider',
		// prevArrow: $('.why-choose__video-slider-prev-slide'),
		// nextArrow: $('.why-choose__video-slider-next-slide'),
	});

	$('.why-choose-sixth-section__reviews_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
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
					slidesToScroll: 1,
					variableWidth: false,

				}
			}
		]
	});
	$('video').each(function (index) {
		this.pause();
	});
	/* Why choose page. Video slider. 
	When user clicks on navigation arrows - pause all videos inside video slider and play video inside current slide*/
	$('.why-choose__video-slider .slick-arrow').click(function () {
		// Get video inside current active slide of video slider
		var myVideo = document.querySelector(".why-choose__video-slider .slick-current video");
		// Pause all videos inside video slider
		$('video').each(function (index) {
			this.pause();
		});
		// Play video inside current active video slide
		// myVideo.play();
	})

	// $('.why-choose-fifth-section__slide-image').click(function () {
	// 	$('video').each(function (index) {
	// 		this.pause();
	// 	});
	// 	var myVideo = document.querySelector(".why-choose__video-slider .slick-current video");
	// 	console.log("myVideo=" + myVideo);
	// 	myVideo.play();
	// })
	$('.remodal-close').click(function () {
		$('video').each(function (index) {
			this.pause();
		});
	});

})