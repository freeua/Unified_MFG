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
	});
})