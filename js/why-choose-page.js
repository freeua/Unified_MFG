$(document).ready(function () {
	$('.why-choose-second-section__blog-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.why-choose-second-section-prev-slide'),
		nextArrow: $('.why-choose-second-section-next-slide'),
		dots: false,
		speed: 300,
		infinite: false,
	});

	$('.why-choose-fourth-section__news-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.why-choose-fourth-section-prev-slide'),
		nextArrow: $('.why-choose-fourth-section-next-slide'),
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
	});

	$('.why-choose-fifth-section__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.why-choose-fifth-section-prev-slide'),
		nextArrow: $('.why-choose-fifth-section-next-slide'),
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.why-choose-sixth-section__reviews_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		prevArrow: $('.why-choose-sixth-section-prev-slide'),
		nextArrow: $('.why-choose-sixth-section-next-slide'),
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
	});

})