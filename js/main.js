$(document).ready(function () {
	$('.products-section__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		speed: 300,
		infinite: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.customers-selling-section__products-wrapper').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
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
					slidesToScroll: 1
				}
			}
		]
	});

	$('.unified-manufacturing-section__products-wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		dots: false,
		speed: 300,
		infinite: false,
		variableWidth: true,
		prevArrow: $('.unified-prev-slide'),
		nextArrow: $('.unified-next-slide'),
		responsive: [
			{
				breakpoint: 812,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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


	$('.testimonials-section__testimonials-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed: 300,
		asNavFor: '.testimonials-section__logos'
	});

	$('.testimonials-section__logos').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		speed: 300,
		infinite: true,
		asNavFor: '.testimonials-section__testimonials-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: false,
				}
			}
		]
	});


	// Swaggin page. Testimonials. Testimonials text slider.
	$('.swaggin-testimonials-section__testimonials-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		speed: 300,
		asNavFor: '.swaggin-testimonials-section__logos',
		appendArrows: ".swaggin-testimonials-arrows-mob",
		responsive: [
			{
				breakpoint: 767,
				settings: {
					appendArrows: ".swaggin-testimonials-arrows",
					infinite: false

				}
			}
		]
	});

	/*Swaggin page. Testimonials logos slider with progress bar*/
	function setProgress2(index) {
		const calc = ((index + 1) / ($slider2.slick('getSlick').slideCount)) * 100;

		$progressBar2
			.css('background-size', `${calc}% 100%`)
			.attr('aria-valuenow', calc);
	}

	const $slider2 = $('.swaggin-testimonials-section__logos');
	const $progressBar2 = $('.swaggin-testimonials-progress');

	$slider2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		setProgress2(nextSlide);
	});

	$slider2.slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		speed: 300,
		infinite: true,
		asNavFor: '.swaggin-testimonials-section__testimonials-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		appendArrows: ".swaggin-testimonials-arrows",
		responsive: [
			{
				breakpoint: 1450,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					centerMode: false,
					infinite: false,
					arrows: false,

				}
			}
		]
	});

	setProgress2(0);





	// Item page. First slider. Desktop. Full picture slider
	$('.item-slider-wrapper__desk .slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		infinite: false,
	});

	// Item page. First slider. Desktop. Thumbnail slider
	$('.item-slider-wrapper__desk .slider-nav').slick({
		appendArrows: ".item__thumbnail-arrows",
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.slider-for',
		dots: false,
		focusOnSelect: true,
		verticalSwiping: true,
	});


	// Item page. First slider. Mobile slider
	$('.item-slider__mob').slick({
		appendArrows: ".item-slider__mob-arrows",
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		speed: 300,
		variableWidth: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});


	/*Item page. Recommended block*/
	$('.item__recommended__products-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 300,
		infinite: false,
		variableWidth: true,
		prevArrow: $('.prev-slide'),
		nextArrow: $('.next-slide'),
		responsive: [
			{
				breakpoint: 812,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
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

	// Swaggin page carousel with progress bar. Why partner with SWAGGIN’ block 
	function setProgress(index) {
		const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

		$progressBar
			.css('background-size', `${calc}% 100%`)
			.attr('aria-valuenow', calc);
	}

	const $slider = $('.swaggin-why__carousel');
	const $progressBar = $('.swaggin-why__progress');

	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		setProgress(nextSlide);
	});

	$slider.slick({
		appendArrows: ".swaggin-why__slider-arrows",
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
	});

	setProgress(0);


	// Homepage.Products section. Desktop slider 
	$slick_slider = $('.products-section__columns');
	if ($(location).attr('href').includes("swaggin", 1)) {
		var infiniteScroll = false;
	}
	else {
		var infiniteScroll = true;
	}

	settings_slider = {
		dots: false,
		arrows: true,
		prevArrow: $('.products-section-prev-slide'),
		nextArrow: $('.products-section-next-slide'),
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 300,
		infinite: false,
		variableWidth: true,
	}
	slick_on_mobile($slick_slider, settings_slider);

	// Homepage. Products section. Mobile slider 
	function slick_on_mobile(slider, settings) {
		$(window).on('load resize', function () {
			if ($(window).width() >= 768) {
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


	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$('.header__mobile-menu-wrapper').addClass('header__mobile-menu-fixed');
			$('.header__main-nav-wrapper').addClass('header__main-nav-wrapper-fixed');
		} else {
			$('.header__mobile-menu-wrapper').removeClass('header__mobile-menu-fixed');
			$('.header__main-nav-wrapper').removeClass('header__main-nav-wrapper-fixed');
		}
	});

	$('.footer__menu-wrapper .footer__menu-title').click(function () {
		$(this).parents('.footer__menu-wrapper').find('.footer__nav').slideToggle();
	});

	$(".menu-collapsed").click(function (e) {
		$(this).toggleClass("menu-expanded");
	});

	$(".collection__category-item>a").click(function (e) {
		e.preventDefault();
		$(".collection__category-item").removeClass("collection__category-item-active");
		$(this).parent().toggleClass("collection__category-item-active");
		$(this).parents('.collection__category-item').find('.collection__subcategories-list').slideToggle();
		$(this).parents('.collection__category-item').find('a').toggleClass("active");
	});

	$(".collection__subcategory-item>a").click(function (e) {
		e.preventDefault();
		$(".collection__subcategory-item").removeClass("collection__subcategory-item-active");
		$(this).parent().toggleClass("collection__subcategory-item-active");
	});

	$(".collection__page-item>a").click(function (e) {
		e.preventDefault();
		$(".collection__page-item").removeClass("collection__page-item-active");
		$(this).parent().toggleClass("collection__page-item-active");
	});

	$('.collection__filters-mobile-label').click(function () {
		$('.collection__filters-inner-wrapper').slideToggle();
	});

	// change active class when user clicks on size(item page)
	$('.item-info__size-item').click(function () {
		$('.item-info__size-item').removeClass('item-info__size-item_active');
		$(this).addClass('item-info__size-item_active');
	})

	// change active class when user clicks on color(item page)
	$('.item-info__color-item').click(function () {
		$('.item-info__color-item').removeClass('item-info__color-item_active');
		$(this).addClass('item-info__color-item_active');
	})

	// change active class when user clicks on material(item page)
	$('.item-info__material-item').click(function () {
		$('.item-info__material-item').removeClass('item-info__material-item_active');
		$(this).addClass('item-info__material-item_active');
	})

	// change active class when user clicks on anchor(item page)
	$('.item-info__anchor').click(function () {
		$('.item-info__anchor').parent().removeClass('item-info__anchor_active');
		$(this).parent().addClass('item-info__anchor_active');
	})

	// change active class when user clicks on pricing item(fulfillment page)
	$('.fulfillment__pricing-item').on('click', function () {
		$(this).parent().find('.fulfillment__pricing-item').removeClass('fulfillment__pricing-item_active');
		$(this).addClass('fulfillment__pricing-item_active');
		$(this).parent().find('.fulfillment__pricing-item').removeClass('fulfillment__pricing-item--no-border');
		$(this).prev().addClass('fulfillment__pricing-item--no-border');

	})


	// change active class for question and answer when user clicks question(FAQ Article page)
	$('.faq-acticle__one-question').click(function () {
		// change active class for clicked question
		$('.faq-acticle__one-question').removeClass('faq-acticle__question_active');
		$(this).addClass('faq-acticle__question_active');

		var clickedQuestionID = $(this).find('a').attr("href").slice(1);
		$('.faq-acticle__one-answer').removeClass('faq-acticle__one-answer_active');
		$('.faq-acticle__one-answer').each(function () {
			if ($(this).attr('id') == clickedQuestionID) {
				$(this).addClass('faq-acticle__one-answer_active');
			}
		})
	})


	$('.faq-acticle__one-question').click(function () {
		$(this).parent().find('.faq-acticle__one-answer-text').slideToggle();
	})


	// comparison page. Show tooltip after user hover on tooltip icon.
	// $('.comparison__option-tooltip-icon').on('mouseenter', function () {
	// 	$(this).addClass('comparison__option-tooltip-icon_active');
	// 	$('.comparison__option-tooltip').slideUp('fast');
	// 	$(this).parent().find('.comparison__option-tooltip').slideDown('fast');
	// })
	// $('.comparison__option-tooltip-icon').on('mouseleave', function () {
	// 	$(this).removeClass('comparison__option-tooltip-icon_active');
	// 	$(this).parent().find('.comparison__option-tooltip').slideUp('fast');
	// })



	// custom "download file" input. show file name of code user selected file
	$(document).on("change", ".custom-print__input-file", function () {
		if ($(this).val()) {
			$(this)
				.parent()
				.find(".custom-print__input-text")
				.text(this.value.replace(/C:\\fakepath\\/i, ""));
		}
	});

	// smooth scroll to anchors
	// $(document).on('click', 'a[href^="#"]', function (event) {
	// 	event.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: $($.attr(this, 'href')).offset().top - 150
	// 	}, 500);
	// });

	// Cache selectors
	var topMenu = $(".item-info__anchors"),
		topMenuHeight = topMenu.outerHeight() + 15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind to scroll
	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		// Set/remove active class
		menuItems
			.parent().removeClass("item-info__anchor_active")
			.end().filter("[href='#" + id + "']").parent().addClass("item-info__anchor_active");
	});

	$("#load-colors__btn").change(function () {
		$('.item-info__color-item:nth-child(n+9)').toggle();
	})

	// "Show password" btn on "Sign in" page
	$('.show-password-btn').click(function () {
		var passwordBtn = document.getElementById("password");
		if (passwordBtn.type === "password") {
			passwordBtn.type = "text";
		} else {
			passwordBtn.type = "password";
		}
	})

	// Add "full-width" class to Sign in page left image if image height is less then screen height.
	$(window).on('resize', function () {
		let imgHeight = $('.sign-in__left-img').height();
		let windowHeight = $(window).height();
		if (imgHeight < windowHeight) {
			$('.sign-in__left-img').addClass('full-width');
		}
	}).resize();

	/*Check mobile device*/
	if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		/*for positioning of checkbox on sign in page(add remember-checkbox--mob class)*/
		$('#remember-checkbox').addClass('remember-checkbox--mob');
	}



})
