( function() {

	var fpSlickState;

	var hiddenmob;

	var app = {

		

		initFeaturedProperties: function() {

			/* Put featured properties code here */

			if (!jQuery('.fp-slides .fl-content').eq(1).find('.fl-det').length) {

				jQuery('.fp-slides').find('.fl-content').eq(1).remove();

			}

			if ( jQuery(window).width() <= 991 ) {

				/*mobile*/

				fpSlickState = 'mobile';

				thisFpSlick();

			} else {

				fpSlickState = 'desktop';

				thisFpSlick();

			}

			jQuery(window).on('resize', function(){

				if ( jQuery(window).width() <= 991 ) {

					/*mobile*/

					if ( fpSlickState == 'desktop' ) {

						fpSlickState = 'mobile';

						thisFpSlick();

					}

				} else {

					if ( fpSlickState == 'mobile' ) {

						fpSlickState = 'desktop';

						thisFpSlick();

					}

				}

			});

			function thisFpSlick() {

				if ( jQuery('.fp-slides').hasClass('slick-initialized') ) {

					jQuery('.fp-slides').slick('unslick');

				}

				if ( jQuery('.fp-slides .fl-content').hasClass('slick-initialized') ) {

					jQuery('.fp-slides .fl-content').slick('unslick');

				}

				if ( fpSlickState == 'desktop' && hiddenmob ) {

					jQuery('.fp-slides .fl-content').prepend( '<div class="fl-single fl-prop hiddenmob" data-aos-reveal="true" data-aos-once="true">'+hiddenmob+'</div>' );

				}

				jQuery('.fp-slides').not('.slick-initialized').slick({

				  dots: false,

				  autoplay: true,

				  infinite: true,

				  speed: 500,

				  autoplaySpeed: 8000,

				  fade: true,

				  cssEase: 'linear',

				  arrows: false,

				      // responsive: [

					  //       {

					  //           breakpoint: 991,

					  //           settings: "unslick"

					  //       }

					  //   ]

				});

				if(jQuery(window).width() <= 991){

					hiddenmob = jQuery('.hiddenmob').html();

					jQuery('.hiddenmob').remove();

					setTimeout(function(){

						jQuery('.fp-slides .fl-content').not('.slick-initialized').slick({

						  slidesToShow: 1,

						  dots: false,

						  autoplay: true,

						  infinite: true,

						  speed: 500,

						  autoplaySpeed: 8000,

						  fade: true,

						  cssEase: 'linear',

						  arrows: false

						});

							jQuery('.fl-prev').click(function(){

								jQuery('.fp-slides .fl-content').slick('slickPrev');

							});

							jQuery('.fl-next').click(function(){

								jQuery('.fp-slides .fl-content').slick('slickNext');

							});

					},1000);

					if ( jQuery('.fp-slides .fl-content').hasClass('slick-initialized') ) {

						jQuery('.fp-slides .fl-content').slick('refresh');

					}

				

				}

				

				

				jQuery('.fl-prev').click(function(){

					jQuery('.fp-slides').slick('slickPrev');

				});

				jQuery('.fl-next').click(function(){

					jQuery('.fp-slides').slick('slickNext');

				});

				jQuery('.fl-wrapper .fl-prop a').click(function(e){

					var devW = jQuery(window).width();

					if(devW < 1200){

						e.preventDefault();

						if(jQuery(this).hasClass('clicked_once')){

							window.location.href = jQuery(this).attr('href');

						}

						jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');

						jQuery(this).addClass('clicked_once');

					}

				});

				if ( jQuery('.fp-slides').hasClass('slick-initialized') ) {

					jQuery('.fp-slides').slick('refresh');

				}

			}

			

		},

		initFeaturedCommunities: function() {

			/* Put featured communities code here */

		},

		

		initAgentAdjust: function() {

			setTimeout(function(){

				if (window.location.href != 'https://homes.jillszeder.com/idx/details/listing/d016/A11038952/55-Casuarina-Concourse-Coral-Gables-FL-33143&featured=true') {

					jQuery('.agents-slide .slick-current').appendTo('.agents-slide .slick-track');

					// console.log('testersss');

				}

			},1000);

			

			setTimeout(function(){

				if ((window.location.href == 'https://homes.jillszeder.com/idx/details/listing/d016/A11037198/5045-SW-82nd-St-Miami-FL-33143&chkpopup=true') || (window.location.href == 'https://homes.jillszeder.com/idx/details/listing/d016/A11037198/5045-SW-82nd-St-Miami-FL-33143')) {

					jQuery('.listd-openhouse-time').text('Time: 12:00 PM - 1:30 PM');

					jQuery('.det-oh-time').text('Time: 12:00 PM - 1:30 PM');

				}

			},200);

		},

		

		

		initTestimonials: function() {

			jQuery('.testi-slide ul').not('.slick-initialized').slick({

				infinite: true,

				slidesToShow: 2,

				slidesToScroll: 1,

				arrows: false,

				autoplay: true,

				autoplaySpeed: 5000,

				responsive: [

					{

						breakpoint: 992,

						settings: {

							slidesToShow: 1,

							slidesToScroll: 1,

						}

					}

				]

			});

			jQuery('.testi-prev').click(function(){

				jQuery('.testi-slide ul').slick('slickPrev');

			});

			jQuery('.testi-next').click(function(){

				jQuery('.testi-slide ul').slick('slickNext');

			});

			jQuery('.testi-wrapper .testi-single').chainHeight({

				breakpoints: [

					{

						'min':768,

						'max':'none'

					}

				]

			});

			setTimeout(function(){

				jQuery('.star_rating_display, .star_rating_display img').removeAttr('title');

			}, 500);

			var performanceEl = jQuery('#hp-testi .testi-wrapper');

            var speed = 0;

            performanceEl.elementPeek({

                onViewportIn: function (object) {

					jQuery('.testi-slide ul').slick('slickPlay');

                },

                peekAmountToTrigger: 0

            });

			jQuery('.testi-slide ul').slick('refresh');

			if(jQuery('body').hasClass('home')) {

				jQuery('.star_rating_display').raty({

					readOnly: true,

					score: function () {

						return $(this).attr('data-rating');

					},

					half: true,

					precision: true,

					starOff: testimonial_object.current_url + '/images/star-off.png',

					starOn: testimonial_object.current_url + '/images/star-on.png',

					starHalf: testimonial_object.current_url + '/images/star-half.png',

					// starOff: 'https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/testimonials-post-type/images/star-off.png',

					// starOn: 'https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/testimonials-post-type/images/star-on.png',

					// starHalf: 'https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/testimonials-post-type/images/star-half.png',

				});

			}

		},

		initQuickSearch: function() {

			/* Put quick search code here */

			jQuery('select.qs-property-type').change(function(){

				jQuery('.idxb-custom-qs-field').remove();

			  	if(jQuery(this).find("option:selected").text()== "Homes"){

			  		console.log('homes');

			  		jQuery('<input type="hidden" name="idxID" value="d016" class="idxb-custom-qs-field"></input>').insertBefore(jQuery('.qs-property-type'));

			  		jQuery('<input type="hidden" name="a_propSubType[]" value="Single Family Residence" class="idxb-custom-qs-field"></input>').insertAfter(jQuery('.qs-property-type'));

			  	}else if(jQuery(this).find("option:selected").text()== "Condos/Townhomes"){

			  		console.log('condo');

			  		jQuery('<input type="hidden" name="idxID" value="d016" class="idxb-custom-qs-field"></input>').insertBefore(jQuery('.qs-property-type'));

			  		jQuery('<input type="hidden" name="a_propSubType[]" value="Condominium" class="idxb-custom-qs-field"></input>').insertAfter(jQuery('.qs-property-type'));

			  		jQuery('<input type="hidden" name="a_propSubType[]" value="Townhouse" class="idxb-custom-qs-field"></input>').insertAfter(jQuery('.qs-property-type'));

			  	}

			});

		},

		initCustomFunction: function() {

			/* See the pattern? Create more functions like this if needed. */

		},

		initSplitNav: function() {

			if (jQuery('body').hasClass('page-template-template-about-us-family') || jQuery('body').hasClass('page-template-template-relocate-me') || jQuery('body').hasClass('page-id-105870') ) {

				jQuery('#nav').splitNav({
					logo: jQuery('.mh-wrapper .logo'),
					splitCount: 3,
				});

			} else {

				jQuery('#nav').splitNav({
					logo: jQuery('.mh-wrapper .logo'),
					splitCount: 4,
				});

				jQuery('.nav').find("li#menu-item-68").detach().prependTo(jQuery('.aios-split-nav:last-child'));

			}

			setTimeout(function(){
				jQuery('.aios-split-nav.nav').attr('data-acsb-menu', 'ul');
				jQuery('.aios-split-nav.nav').attr('role', 'navigation');
				jQuery('.aios-split-nav.nav').attr('aria-label', 'Header Menu');
			},1000);

		},

		initFixedHeader: function() {

			var scrollval = jQuery(window).scrollTop();

			if(scrollval > 100){

				jQuery('.fixed-header').addClass('active');

			}else{

				jQuery('.fixed-header').removeClass('active');

			}

			jQuery(document).mouseup(function(e) 

				{

					var container = jQuery(".mobile .header-sm .sm-list > li.fixed-instagram");

					// if the target of the click isn't the container nor a descendant of the container

					if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('active'))

					{

						jQuery('.header-sm .sm-list > li.fixed-instagram').removeClass("active");

					}

				});

				

				jQuery('.mobile .header-sm .sm-list>li.fixed-instagram').click(function(){

					jQuery(this).addClass('active');

				});

		},

		initHeaderSM: function() {

			// var scrollval = jQuery(window).scrollTop();

			// var devH = jQuery(window).height();

			// if(scrollval > (devH - 200) ){

			// 	jQuery('.header-sm').addClass('blend');

			// }else{

			// 	jQuery('.header-sm').removeClass('blend');

			// }

			

			if(jQuery('body').hasClass('home')){

				if (jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-hp-top') || jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-hp-about') || jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-hp-testi') || jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-hp-tpn') || jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-hp-vid') || jQuery('.aios-section-nav li.nav-active-section').hasClass('aios-scroll-id-footercontent')) {

					jQuery('.header-sm').addClass('blend-white');

					jQuery('.header-sm').removeClass('blend-green');

				}else{

					jQuery('.header-sm').addClass('blend-green');

					jQuery('.header-sm').removeClass('blend-white');

				}

			}else{

				// var scrollval = jQuery(window).scrollTop();

				// var devH = jQuery(window).height();

				// if(scrollval > (devH - 200) ){

				// 	jQuery('.header-sm').addClass('blend');

				// 	jQuery('.header-sm').removeClass('blend-white');

				// 	jQuery('.header-sm').removeClass('blend-green');

				// }else{

				// 	jQuery('.header-sm').removeClass('blend');

				// 	jQuery('.header-sm').removeClass('blend-white');

				// 	jQuery('.header-sm').removeClass('blend-green');

				// }

				if (((checkifvisible('inner-page-wrapper') && checkifvisible('footergit')) || checkifvisible('inner-page-wrapper') || checkifvisible('footergit')) && !checkifvisible('footer-copyright-cs')) {

					jQuery('.header-sm').addClass('blend-green');

					jQuery('.header-sm').removeClass('blend-white');

				}else{

					jQuery('.header-sm').addClass('blend-white');

					jQuery('.header-sm').removeClass('blend-green');

				}

			}

			function checkifvisible(section_id){

				if (jQuery("#"+section_id).html()) {

					var top_of_element = jQuery("#"+ section_id).offset().top;

				    var bottom_of_element = jQuery("#"+section_id).offset().top + jQuery("#"+section_id).outerHeight();

				    var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).innerHeight();

				    var top_of_screen = jQuery(window).scrollTop();

				    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

				        return true;

				    } else {

				       return false;

				    }	

				}else{

					return false;

				}

			    

			}

			

		},

		initQSSlide: function() {

			function convertPrice (price) {

				// Nine Zeroes for Billions

				return Math.abs(Number(price)) >= 1.0e+9

				? Math.abs(Number(price)) / 1.0e+9 + "B"

				// Six Zeroes for Millions 

				: Math.abs(Number(price)) >= 1.0e+6

				? Math.abs(Number(price)) / 1.0e+6 + "M"

				// Three Zeroes for Thousands

				: Math.abs(Number(price)) >= 1.0e+3

				? Math.abs(Number(price)) / 1.0e+3 + "K"

				: Math.abs(Number(price));

			}

			if (jQuery('.price-range').length) {

				var price_Array = [0,1000,50000,100000,150000,250000,300000,350000,400000,450000,500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1100000,1200000,1300000,1400000,1500000,1600000,1700000,1800000,1900000,2000000,2300000,2500000,2800000,

					3000000,3300000,3500000,3800000,4000000,4300000,4500000,4800000,5000000,6000000,7000000,8000000,9000000,10000000,11000000,12000000,13000000,14000000,15000000,16000000,17000000,18000000,19000000,20000000,

					21000000,22000000,23000000,24000000,25000000,26000000,27000000,28000000,29000000,30000000,31000000,32000000,33000000,34000000,35000000,36000000,37000000,38000000,39000000,40000000,41000000,42000000,43000000,

					44000000,45000000,46000000,47000000,48000000,49000000,50000000,75000000,100000000,110000000,120000000,130000000,140000000,150000000,160000000,170000000,180000000,190000000,200000000,210000000,220000000,230000000,240000000,250000000,260000000,270000000,280000000,290000000,300000000];

				

				var value_slider = 0;

				var max_slider = 300000000;

				var price = '';

				max_slider = price_Array.length-1;

				function getIndex(price){

					for (var i = price_Array.length - 1; i >= 0; i--) {

						if(price == price_Array[i]){

							return i;

						}

					}

				}

				var slider = jQuery('.price-range');

				var min = jQuery('.qs-minprice');

				var max = jQuery('.qs-maxprice');

				slider.slider({

					range: true,

					values: [ value_slider, max_slider ],

					min: 0,

					max: price_Array.length-1,

					step: 1,

					slide: function( event, ui ) {

						if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] == 0) {

							var minprice = price_Array[ui.values[0]];

							minprice = (minprice / 1000);

							minprice = parseInt(minprice);

							var minpricevalue = minprice * 1000;

							

							minprice = minprice;

						}

						if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] > 0) {

							var minprice = price_Array[ui.values[0]];

							minprice = (minprice / 1000);

							minprice = parseInt(minprice);

							var minpricevalue = minprice * 1000;

							

							minprice = minprice + 'K';

						}

						if (price_Array[ui.values[0]] >= 1000000 && price_Array[ui.values[0]] <= 300000000) {

							var minprice = price_Array[ui.values[0]];

							if (price_Array[ui.values[0]] % 1000000 == 0 ) {

								minprice = (minprice / 1000000);

								minprice = parseInt(minprice);

							}else{

								minprice = (minprice / 1000000);

								minprice = parseFloat(minprice).toFixed(1);

							}

							

							var minpricevalue = minprice * 1000000;

							

							minprice = minprice + 'M';	

						}

						if (price_Array[ui.values[1]] < 1000000) {

							var maxprice = price_Array[ui.values[1]];

							maxprice = (maxprice / 1000);

							maxprice = parseInt(maxprice);

							var maxpricevalue = maxprice * 1000;

							

							maxprice = maxprice + 'K';

						}

						if (price_Array[ui.values[1]] >= 1000000 && price_Array[ui.values[1]] <= 300000000) {

							var maxprice = price_Array[ui.values[1]];

							if (price_Array[ui.values[1]] % 1000000 == 0 ) {

								maxprice = (maxprice / 1000000);

								maxprice = parseInt(maxprice);

							}else{

								maxprice = (maxprice / 1000000);

								maxprice = parseFloat(maxprice).toFixed(1);

							}

							

							var maxpricevalue = maxprice * 1000000;

							

							maxprice = maxprice + 'M';	

						}

						jQuery(".qs-minprice").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

						jQuery(".qs-maxprice").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

						// added

						

						jQuery('.qsfpricehide').val(minpricevalue);

						jQuery('.qslpricehide').val(maxpricevalue);

					

						// jQuery('.our-properties-form').submit();

					}

				});

				//var slider = jQuery('.price-range');

				//jQuery('.price-range').addClass('ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content');

				//jQuery('.price-range').append('<div class="ui-slider-range ui-corner-all ui-widget-header" style="width: 100%; left: 0%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>');

				

				jQuery('.qs-property-type').on('change', function(){

					if(jQuery(this).val() == 'lse' || jQuery(this).val() == 3){

						jQuery('.qs-maxprice').text('$100K');

						var price_Array = [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];

				

						var value_slider = 0;

						var max_slider = 100000;

						var price = '';

						max_slider = price_Array.length-1;

						function getIndex(price){

							for (var i = price_Array.length - 1; i >= 0; i--) {

								if(price == price_Array[i]){

									return i;

								}

							}

						}

						var min = jQuery('.qs-minprice');

						var max = jQuery('.qs-maxprice');

						slider.slider({

							range: true,

							values: [ value_slider, max_slider ],

							min: 0,

							max: price_Array.length-1,

							step: 1,

							slide: function( event, ui ) {

								if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] == 0) {

									var minprice = price_Array[ui.values[0]];

									minprice = (minprice / 10000);

									minprice = parseInt(minprice);

									var minpricevalue = minprice * 100000;

									

									minprice = minprice;

								}

								if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] > 0) {

									var minprice = price_Array[ui.values[0]];

									minprice = (minprice / 10000);

									minprice = parseInt(minprice);

									var minpricevalue = minprice * 10000;

									console.log('min: '+minpricevalue);

									minpricevalue = minpricevalue / 1000;

									

									minprice = minpricevalue + 'K';

								}

								if (price_Array[ui.values[0]] >= 1000000 && price_Array[ui.values[0]] <= 20000) {

									var minprice = price_Array[ui.values[0]];

									if (price_Array[ui.values[0]] % 1000000 == 0 ) {

										minprice = (minprice / 1000000);

										minprice = parseInt(minprice);

									}else{

										minprice = (minprice / 1000000);

										minprice = parseFloat(minprice).toFixed(1);

									}

									

									var minpricevalue = minprice * 1000000;

									

									minprice = minprice + 'M';	

								}

								if (price_Array[ui.values[1]] < 1000000) {

									var maxprice = price_Array[ui.values[1]];

									maxprice = (maxprice / 1000);

									maxprice = parseInt(maxprice);

									var maxpricevalue = maxprice * 1000;

									

									maxprice = maxprice + 'K';

								}

								if (price_Array[ui.values[1]] >= 10000 && price_Array[ui.values[1]] <= 20000) {

									var maxprice = price_Array[ui.values[1]];

									if (price_Array[ui.values[1]] % 10000 == 0 ) {

										maxprice = (maxprice / 1000);

										maxprice = parseInt(maxprice);

									}else{

										maxprice = (maxprice / 1000);

										maxprice = parseFloat(maxprice).toFixed(1);

									}

									

									var maxpricevalue = maxprice * 100000;

									

									maxprice = maxprice + 'K';	

								}

								jQuery(".qs-minprice").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								jQuery(".qs-maxprice").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								// added

								

								jQuery('.qsfpricehide').val(minpricevalue);

								jQuery('.qslpricehide').val(maxpricevalue);

							

								// jQuery('.our-properties-form').submit();

							}

						});

					}

					else{

						jQuery('.qs-maxprice').text('$300M');

						var price_Array = [0,1000,50000,100000,150000,250000,300000,350000,400000,450000,500000,550000,600000,650000,700000,750000,800000,850000,900000,950000,1000000,1100000,1200000,1300000,1400000,1500000,1600000,1700000,1800000,1900000,2000000,2300000,2500000,2800000,

					3000000,3300000,3500000,3800000,4000000,4300000,4500000,4800000,5000000,6000000,7000000,8000000,9000000,10000000,11000000,12000000,13000000,14000000,15000000,16000000,17000000,18000000,19000000,20000000,

					21000000,22000000,23000000,24000000,25000000,26000000,27000000,28000000,29000000,30000000,31000000,32000000,33000000,34000000,35000000,36000000,37000000,38000000,39000000,40000000,41000000,42000000,43000000,

					44000000,45000000,46000000,47000000,48000000,49000000,50000000,75000000,100000000,110000000,120000000,130000000,140000000,150000000,160000000,170000000,180000000,190000000,200000000,210000000,220000000,230000000,240000000,250000000,260000000,270000000,280000000,290000000,300000000];

				

						var value_slider = 0;

						var max_slider = 300000000;

						var price = '';

						max_slider = price_Array.length-1;

						function getIndex(price){

							for (var i = price_Array.length - 1; i >= 0; i--) {

								if(price == price_Array[i]){

									return i;

								}

							}

						}

						// var slider = jQuery('.price-range');

						var min = jQuery('.qs-minprice');

						var max = jQuery('.qs-maxprice');

						slider.slider({

							range: true,

							values: [ value_slider, max_slider ],

							min: 0,

							max: price_Array.length-1,

							step: 1,

							slide: function( event, ui ) {

								if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] == 0) {

									var minprice = price_Array[ui.values[0]];

									minprice = (minprice / 1000);

									minprice = parseInt(minprice);

									var minpricevalue = minprice * 1000;

									

									minprice = minprice;

								}

								if (price_Array[ui.values[0]] < 1000000 && price_Array[ui.values[0]] > 0) {

									var minprice = price_Array[ui.values[0]];

									minprice = (minprice / 1000);

									minprice = parseInt(minprice);

									var minpricevalue = minprice * 1000;

									

									minprice = minprice + 'K';

								}

								if (price_Array[ui.values[0]] >= 1000000 && price_Array[ui.values[0]] <= 300000000) {

									var minprice = price_Array[ui.values[0]];

									if (price_Array[ui.values[0]] % 1000000 == 0 ) {

										minprice = (minprice / 1000000);

										minprice = parseInt(minprice);

									}else{

										minprice = (minprice / 1000000);

										minprice = parseFloat(minprice).toFixed(1);

									}

									

									var minpricevalue = minprice * 1000000;

									

									minprice = minprice + 'M';	

								}

								if (price_Array[ui.values[1]] < 1000000) {

									var maxprice = price_Array[ui.values[1]];

									maxprice = (maxprice / 1000);

									maxprice = parseInt(maxprice);

									var maxpricevalue = maxprice * 1000;

									

									maxprice = maxprice + 'K';

								}

								if (price_Array[ui.values[1]] >= 1000000 && price_Array[ui.values[1]] <= 300000000) {

									var maxprice = price_Array[ui.values[1]];

									if (price_Array[ui.values[1]] % 1000000 == 0 ) {

										maxprice = (maxprice / 1000000);

										maxprice = parseInt(maxprice);

									}else{

										maxprice = (maxprice / 1000000);

										maxprice = parseFloat(maxprice).toFixed(1);

									}

									

									var maxpricevalue = maxprice * 1000000;

									

									maxprice = maxprice + 'M';	

								}

								jQuery(".qs-minprice").text('$' + minprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								jQuery(".qs-maxprice").text('$' + maxprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

								// added

								

								jQuery('.qsfpricehide').val(minpricevalue);

								jQuery('.qslpricehide').val(maxpricevalue);

							

								// jQuery('.our-properties-form').submit();

							}

						});

					}

				});		

				

			}

			jQuery('.fl-qs-form .qs-dual-fields input[type="reset"]').click(function(){

				slider.slider({

					values: [ value_slider, max_slider ]

				});

				min.text('$0K');

				max.text('$300M');

			});

		},initQSSlideLots: function() {

			function convertlot (lot) {

				// Nine Zeroes for Billions

				return Math.abs(Number(lot)) >= 1.0e+9

				? Math.abs(Number(lot)) / 1.0e+9 + "B"

				// Six Zeroes for Millions 

				: Math.abs(Number(lot)) >= 1.0e+6

				? Math.abs(Number(lot)) / 1.0e+6 + "M"

				// Three Zeroes for Thousands

				: Math.abs(Number(lot)) >= 1.0e+3

				? Math.abs(Number(lot)) / 1.0e+3 + "K"

				: Math.abs(Number(lot));

			}

			if (jQuery('.lot-range').length) {

				

				var value_slider = 0;

				var max_slider = 100000;

				var lot = '';

				// max_slider = lot_Array.length-1;

				function getIndex(lot){

					for (var i = lot_Array.length - 1; i >= 0; i--) {

						if(lot == lot_Array[i]){

							return i;

						}

					}

				}

				var slider = jQuery('.lot-range');

				var min = jQuery('.qs-minlot');

				var max = jQuery('.qs-maxlot');

				slider.slider({

					range: true,

				    values: [ value_slider, max_slider ],

					min: 0,

					max: 100000,

					step: 1,

					slide: function( event, ui ) {

						if (ui.values[0] >= 0 && ui.values[0] < 1000) {

							var minlot = ui.values[0];

							//minlot = (minlot / 1000);

							minlot = parseInt(minlot);

							var minlotvalue = minlot

							

							minlot = minlot;

						}

						if (ui.values[0] >= 1000) {

							var minlot = ui.values[0];

							minlot = (minlot / 1000);

							minlot = parseFloat(minlot).toFixed(1);

							var minlotvalue = minlot * 1000;

							

							minlot = minlot + 'K';

						}

					

						if (ui.values[1] == 100000) {

							var maxlot = 100000;

							maxlot = (maxlot / 1000);

							maxlot = parseFloat(maxlot);

							var maxlotvalue = maxlot * 1000;

							

							maxlot = maxlot + 'K';

						}

						if (ui.values[1] <= 100000 && ui.values[1] >= 1000) {

							var maxlot = ui.values[1];

							maxlot = (maxlot / 1000);

							if (maxlot == 100) {

								maxlot = parseInt(maxlot);

							}else{

								maxlot = parseFloat(maxlot).toFixed(1);

							}

							

							var maxlotvalue = maxlot * 1000;

							

							maxlot = maxlot + 'K';

						}

						if (ui.values[1] < 1000 && ui.values[1] >= 0) {

							var maxlot = ui.values[1];

							maxlot = maxlot;

							// maxlot = parseFloat(maxlot).toFixed(1);

							var maxlotvalue = maxlot;

							

							maxlot = maxlot;

						}

						// if (ui.values[0] >= 0 && ui.values[0] < 100000) {

						// 	var maxlot = ui.values[1];

						// 	maxlot = parseInt(maxlot);

							

						// 	var maxlotvalue = maxlot;	

						// }

						jQuery(".qs-minlot").text(minlot.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

						jQuery(".qs-maxlot").text(maxlot.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") );

						// added

						

						jQuery('.qsflothide').val(minlotvalue);

						jQuery('.qsllothide').val(maxlotvalue);

					

						// jQuery('.our-properties-form').submit();

					}

				});

			}

			jQuery('.fl-qs-form .qs-dual-fields input[type="reset"]').click(function(){

				slider.slider({

					values: [ value_slider, max_slider ]

				});

				min.text('0');

				max.text('10k');

			});

		},

		initWWWUChainHeight: function() {

			jQuery('.wwwu-wrapper .wwwu-content .wwwu-desc').chainHeight({

				breakpoints: [

					{

						'min':992,

						'max':'none'

					}

				]

			});

		},

		initMedia: function() {

			var media_single_count = jQuery('.media-single').length;

			/*if(media_single_count < 4){
				jQuery('.media-nav').addClass('hidden');
			}*/

			jQuery('.media-slide ul').not('.slick-initialized').slick({

				infinite: true,

				slidesToShow: 3,

				slidesToScroll: 1,

				prevArrow: '.media-nav.media-prev',
				nextArrow: '.media-nav.media-next',

				autoplay: true,

				autoplaySpeed: 5000,

				responsive: [

					{

						breakpoint: 992,

						settings: {

							slidesToShow: 1,

							slidesToScroll: 1

						}

					}

				]

			});

			/*jQuery('.media-prev').click(function(){

				jQuery('.media-slide ul').slick('slickPrev');

			});

			jQuery('.media-next').click(function(){

				jQuery('.media-slide ul').slick('slickNext');

			});*/

			jQuery('.media-slide ul').slick('refresh');

		},

		initVideoCollection: function() {

			jQuery('.vid-main ul').not('.slick-initialized').slick({

				infinite: false,

				slidesToShow: 1,

				slidesToScroll: 1,

				arrows: false,

				autoplay: false,

				autoplaySpeed: 5000,

				asNavFor: '.vid-thumb ul',

				draggable: false,

				responsive: [

					{

						breakpoint: 992,

						settings: {

							slidesToShow: 1,

							slidesToScroll: 1

						}

					}

				]

			});

			jQuery('.vid-thumb ul').not('.slick-initialized').slick({

				infinite: true,

				slidesToShow: 4,

				slidesToScroll: 1,

				arrows: false,

				focusOnSelect: true,

				autoplay: false,

				autoplaySpeed: 5000,

				asNavFor: '.vid-main ul',

				responsive: [

					{

						breakpoint: 992,

						settings: {

							slidesToShow: 2,

							slidesToScroll: 1

						}

					}

				]

			});

			var vidlink = '';

			jQuery('.vid-prev').click(function(){

				jQuery('.vid-slide ul').slick('slickPrev');

			});

			jQuery('.vid-next').click(function(){

				jQuery('.vid-slide ul').slick('slickNext');

			});

            

            detectWidth();

            jQuery(window).resize(function () {

                // detectWidth();

            });

            function detectWidth() {

                var devw = jQuery(window).width();

                /*new*/

                jQuery('.vid-main iframe').remove();

                jQuery('.vid-main-single a').removeClass('active-frame');

                var get_data = jQuery('.slick-current .vid-main-single a').attr('data-iframe');

                $iframe = '<iframe width="1140" height="653" src="https://www.youtube.com/embed/'+get_data+'" title="Youtube Video"></iframe>';

                

                jQuery('.slick-current .vid-main-single a').addClass('active-frame')

                jQuery('.slick-current .vid-main-img').append( $iframe );

                jQuery('.vid-thumb ul').on('afterChange', function(event, slick, currentSlide){

	                jQuery('.vid-main iframe').remove();

	                jQuery('.vid-main-single a').removeClass('active-frame');

	                var get_data = jQuery('.slick-current .vid-main-single a').attr('data-iframe');

	            	$iframe = '<iframe width="1140" height="653" allow="autoplay" src="https://www.youtube.com/embed/'+get_data+'" title="Youtube Video"></iframe>';

	            	// $iframe = '<iframe width="1140" height="653" allow="autoplay" src="https://www.youtube.com/embed/'+get_data+'"></iframe>';

	                jQuery('.slick-current .vid-main-single a').addClass('active-frame')

	                jQuery('.slick-current .vid-main-img').append( $iframe );

                  

                });

                /*end*/

                // var click = false;

				// jQuery(".vid-thumb .vid-thumb-single").on('mousedown', function() {

				// 	click = true;

				// 	// console.log('mousedown' + click);

				// });

				jQuery(".vid-thumb .vid-thumb-single").on('click', function() {

					// console.log('mouseup' + click);

					// if ( click ) {

						//Trigger the click

							jQuery('html,body').stop(true, false).animate({

		                        scrollTop: jQuery('.vid-main-img').offset().top - 110 },

		                    400);

		                    var thumbId = jQuery(this).attr('data-vid-id');

		                    setTimeout(function(){

		                    	jQuery('.vid-main .'+thumbId+ ' a').click();

		                    }, 1000);

						// }

				});

				// jQuery(".vid-thumb .vid-thumb-single").on('mousemove', function() {

				// 	click = false;

				// 	// console.log('mousemove' + click);

				// });

            };

			jQuery('.vid-main ul').slick('refresh');

			jQuery('.vid-thumb ul').slick('refresh');

		},

		initInstagram: function() {

			jQuery('.ig-slide ul').not('.slick-initialized').slick({

				infinite: true,

				slidesToShow: 2,

				slidesToScroll: 1,

				rows: 2,

				arrows: false,

				autoplay: true,

				autoplaySpeed: 8000,

				responsive: [

					{

						breakpoint: 992,

						settings: {

							slidesToShow: 2,

							slidesToScroll: 1,

							rows: 1,

						}

					}

				]

			});

			jQuery('.ig-slide ul').slick('refresh');

		},

		initSideNavigation: function() {

			jQuery('#scroll-down').sideNavigation({

				navSectionAppend: '<li class="{{scroll-id}}"><span class="scroll-section-number"></span><span class="scroll-section-title">{{scroll-title}}</span></li>'

			});

			setTimeout(function(){

				var cntr = 0;

				jQuery('.aios-section-nav li').each(function(){

					if(cntr == 0){

						jQuery(this).addClass('longline')

					}

					if(cntr != 0 ){

						if (cntr < 10) {

							cntr_value  = '0' + cntr ;

						}else{

							cntr_value = cntr;

						}

						jQuery(this).find('.scroll-section-number').html(cntr_value + ' <em>-</em> ');

						

					}

					cntr++;

				})

			},100)

		},

		initMobileNav: function() {

			jQuery('.nav-trigger').click(function(){

				jQuery('.mobile-nav').addClass('active');

				jQuery('body').addClass('mobnav-active');

			});

			jQuery('.mobnav-close').click(function(){

				jQuery('.mobile-nav').removeClass('active');

				jQuery('body').removeClass('mobnav-active');

			});

			function showSubMenu(_this, e) {



				if (e) {

					e.preventDefault();

				}



				if(_this.hasClass('clicked_once')){

					window.location.href = _this.attr('href');

				} else {

					if(!jQuery('.page-template-index-landing-page').length ){

						_this.parent().siblings().find('a').removeClass('clicked_once');

					}

					

					_this.addClass('clicked_once');

					_this.parent().siblings().removeClass('active');

					_this.parent().delay(1000).addClass('active');

				}

			}

			// if( /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(navigator.userAgent) ) {

				/*jQuery('#mobnav li.menu-item-has-children > a').on("click", function(e){

					e.preventDefault();

					var _this = jQuery(this);

					showSubMenu(_this);

				});*/

				jQuery('#mobnav li.menu-item-has-children > a').on("touchstart", function(e){

					// e.preventDefault();

					var _this = jQuery(this);

					showSubMenu(_this, e);

				});

			/*jQuery("ul#mobnav li.menu-item-has-children > a").on("click", function (e) {

                var $this = jQuery(this);

                var $parent = $this.parent("li");

                var $subMenu = $this.next(".sub-menu");*/

           //      if (!$parent.hasClass("offcanvas-submenu-open")) {

           //          e.preventDefault();

           //          jQuery("ul#mobnav .sub-menu").stop( true, false ).slideUp(500);

        			// jQuery("ul#mobnav li.menu-item-has-children").removeClass('offcanvas-submenu-open');

           //          $parent.addClass("offcanvas-submenu-open");

           //      	$subMenu.stop( true, false ).slideDown(500);

           //      }

            // });

		},

		initNavigation: function() {

			var $nav = jQuery( '#nav, .nav, #fixednav' );

			if ( $nav.length > 0 ) $nav.navTabDoubleTap();

		},

		initSetFormSource: function(){

			var $current_url = window.location.href;

			jQuery('#cf7-source-link').val($current_url);

		},

		initPopup: function(){

            

            function setCookie(cname,cvalue,exdays) {

                var d = new Date();

                d.setTime(d.getTime() + (exdays*12*60*60*1000));

                var expires = "expires=" + d.toGMTString();

                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

            }

            function getCookie(cname) {

                var name = cname + "=";

                var decodedCookie = decodeURIComponent(document.cookie);

                var ca = decodedCookie.split(';');

                for(var i = 0; i < ca.length; i++) {

                    var c = ca[i];

                    while (c.charAt(0) == ' ') {

                        c = c.substring(1);

                    }

                    if (c.indexOf(name) == 0) {

                        return c.substring(name.length, c.length);

                    }

                }

                return "";

            }

            

            setTimeout(function(){

                var get_cookie = getCookie('popup');

                if(!get_cookie){

                    setCookie('popup', 1, 1);

                }

                if(!get_cookie){

                    setTimeout(function(){

                        jQuery('.join-network-trigger').click();

                    },1000);

                }

                console.log(get_cookie);

            },10000); 

		},

		initCommunitiesSingle: function(){

			var curUrl = jQuery(location).attr('href');

			if(curUrl.indexOf('/communities/') != -1){

				if(jQuery('h2.sc-no-listing').text() == "No Available Listings"){

					jQuery('.lcd-name.font-term.animated.fadeInDown').css('display', 'none');

				}

			}

		},

		getMinMaxPerPtype: function(){

			jQuery('.qs-property-type').on('change', function(){

                //console.log(jQuery('.qs-property-type').val());

				var min = '';

				var max = '';

				var minprice = 0;

				var maxprice = 10000;

				if(jQuery('.qs-property-type').val() == 3 || jQuery('.qs-property-type').val() == 'lse'){

					// min

					/*for (var i = 0; i <= 10; i++) {

						min +='<option value="'+minprice+'">$'+minprice.toLocaleString()+'</option>';

						max +='<option value="'+maxprice+'">$'+maxprice.toLocaleString()+'</option>';

						minprice = minprice + 10000;

						maxprice = maxprice + 10000;

					}*/

					jQuery('.price-lp').html('<option value="">Minimum Price</option>');

					jQuery('.price-lp').append('<option value="0">$0</option>');

					jQuery('.price-lp').append('<option value="3000">$3,000/month</option>');

					jQuery('.price-lp').append('<option value="4000">$4,000/month</option>');

					jQuery('.price-lp').append('<option value="5000">$5,000/month</option>');

					jQuery('.price-lp').append('<option value="6000">$6,00/month</option>');

					jQuery('.price-lp').append('<option value="7000">$7,000/month</option>');

					jQuery('.price-lp').append('<option value="8000">$8,000/month</option>');

					jQuery('.price-lp').append('<option value="9000">$9,000/month</option>');

					jQuery('.price-lp').append('<option value="10000">$10,000/month</option>');

					jQuery('.price-lp').append('<option value="20000">$20,000/month</option>');

					jQuery('.price-lp').append('<option value="30000">$30,000/month</option>');

					jQuery('.price-lp').append('<option value="40000">$40,000/month</option>');

					jQuery('.price-lp').append('<option value="50000">$50,000/month</option>');

					jQuery('.price-lp').append('<option value="60000">$60,000/month</option>');

					jQuery('.price-lp').append('<option value="70000">$70,000/month</option>');

					jQuery('.price-lp').append('<option value="80000">$80,000/month</option>');

					jQuery('.price-lp').append('<option value="90000">$90,000/month</option>');

					jQuery('.price-lp').append('<option value="100000">$100,000/month</option>');

					jQuery('.price-lp').append('<option value="110000">$110,000/month</option>');

					jQuery('.price-lp').append('<option value="120000">$120,000/month</option>');

					jQuery('.price-lp').append('<option value="130000">$130,000/month</option>');

					jQuery('.price-lp').append('<option value="140000">$140,000/month</option>');

					jQuery('.price-lp').append('<option value="150000">$150,000/month</option>');

					jQuery('.price-lp').append('<option value="200000">$200,000/month</option>');

					jQuery('.price-lp').append('<option value="250000">$250,000/month</option>');

					jQuery('.price-lp').append('<option value="300000">$300,000/month</option>');

					jQuery('.price-lp').append('<option value="350000">$350,000/month</option>');

					jQuery('.price-lp').append('<option value="400000">$400,000/month</option>');

					jQuery('.price-lp').append('<option value="450000">$450,000/month</option>');

					jQuery('.price-lp').append('<option value="500000">$500,000/month</option>');

					jQuery('.price-lp').append('<option value="550000">$550,000/month</option>');

					jQuery('.price-lp').append('<option value="600000">$600,000/month</option>');

					jQuery('.price-lp').append('<option value="650000">$650,000/month</option>');

					jQuery('.price-lp').append('<option value="700000">$700,000/month</option>');

					jQuery('.price-lp').append('<option value="750000">$750,000/month</option>');

					

					jQuery('.price-hp').html('<option value="">Maximum Price</option>');

					jQuery('.price-hp').append('<option value="10000">$10,000/month</option>');

					jQuery('.price-hp').append('<option value="20000">$20,000/month</option>');

					jQuery('.price-hp').append('<option value="30000">$30,000/month</option>');

					jQuery('.price-hp').append('<option value="40000">$40,000/month</option>');

					jQuery('.price-hp').append('<option value="50000">$50,000/month</option>');

					jQuery('.price-hp').append('<option value="60000">$60,000/month</option>');

					jQuery('.price-hp').append('<option value="70000">$70,000/month</option>');

					jQuery('.price-hp').append('<option value="80000">$80,000/month</option>');

					jQuery('.price-hp').append('<option value="90000">$90,000/month</option>');

					jQuery('.price-hp').append('<option value="100000">$100,000/month</option>');

					jQuery('.price-hp').append('<option value="110000">$110,000/month</option>');

					jQuery('.price-hp').append('<option value="120000">$120,000/month</option>');

					jQuery('.price-hp').append('<option value="130000">$130,000/month</option>');

					jQuery('.price-hp').append('<option value="140000">$140,000/month</option>');

					jQuery('.price-hp').append('<option value="150000">$150,000/month</option>');

					jQuery('.price-hp').append('<option value="200000">$200,000/month</option>');

					jQuery('.price-hp').append('<option value="250000">$250,000/month</option>');

					jQuery('.price-hp').append('<option value="300000">$300,000/month</option>');

					jQuery('.price-hp').append('<option value="350000">$350,000/month</option>');

					jQuery('.price-hp').append('<option value="400000">$400,000/month</option>');

					jQuery('.price-hp').append('<option value="450000">$450,000/month</option>');

					jQuery('.price-hp').append('<option value="500000">$500,000/month</option>');

					jQuery('.price-hp').append('<option value="550000">$550,000/month</option>');

					jQuery('.price-hp').append('<option value="600000">$600,000/month</option>');

					jQuery('.price-hp').append('<option value="650000">$650,000/month</option>');

					jQuery('.price-hp').append('<option value="700000">$700,000/month</option>');

					jQuery('.price-hp').append('<option value="750000">$750,000/month</option>');

					jQuery('<div class="subproptype"><select name="a_propSubType[]" aria-label="Property Type" class="custom-search-field" required>'+

								'<option value="">Sub Property Type</option>'+

								 '<option value="Single Family Residence">Single Family Residence</option>'+

								 '<option value="Condominium">Condominium</option>'+

								 '</select></div>').insertAfter(jQuery('.qs-property-type'));

					// min

					// jQuery('.lp').append('<option value="0">$0</option>');

					// jQuery('.lp').append('<option value="3000">$3,000/month</option>');

					// jQuery('.lp').append('<option value="4000">$4,000/month</option>');

					// jQuery('.lp').append('<option value="5000">$5,000/month</option>');

					// jQuery('.lp').append('<option value="6000">$6,00/month</option>');

					// jQuery('.lp').append('<option value="7000">$7,000/month</option>');

					// jQuery('.lp').append('<option value="8000">$8,000/month</option>');

					// jQuery('.lp').append('<option value="9000">$9,000/month</option>');

					// jQuery('.lp').append('<option value="10000">$10,000/month</option>');

					// jQuery('.lp').append('<option value="20000">$20,000/month</option>');

					// jQuery('.lp').append('<option value="30000">$30,000/month</option>');

					// jQuery('.lp').append('<option value="40000">$40,000/month</option>');

					// jQuery('.lp').append('<option value="50000">$50,000/month</option>');

					// jQuery('.lp').append('<option value="60000">$60,000/month</option>');

					// jQuery('.lp').append('<option value="70000">$70,000/month</option>');

					// jQuery('.lp').append('<option value="80000">$80,000/month</option>');

					// jQuery('.lp').append('<option value="90000">$90,000/month</option>');

					// jQuery('.lp').append('<option value="100000">$100,000/month</option>');

					// jQuery('.lp').append('<option value="110000">$110,000/month</option>');

					// jQuery('.lp').append('<option value="120000">$120,000/month</option>');

					// jQuery('.lp').append('<option value="130000">$130,000/month</option>');

					// jQuery('.lp').append('<option value="140000">$140,000/month</option>');

					// jQuery('.lp').append('<option value="150000">$150,000/month</option>');

					// jQuery('.lp').append('<option value="200000">$200,000/month</option>');

					// jQuery('.lp').append('<option value="250000">$250,000/month</option>');

					// jQuery('.lp').append('<option value="300000">$300,000/month</option>');

					// jQuery('.lp').append('<option value="350000">$350,000/month</option>');

					// jQuery('.lp').append('<option value="400000">$400,000/month</option>');

					// jQuery('.lp').append('<option value="450000">$450,000/month</option>');

					// jQuery('.lp').append('<option value="500000">$500,000/month</option>');

					// jQuery('.lp').append('<option value="550000">$550,000/month</option>');

					// jQuery('.lp').append('<option value="600000">$600,000/month</option>');

					// jQuery('.lp').append('<option value="650000">$650,000/month</option>');

					// jQuery('.lp').append('<option value="700000">$700,000/month</option>');

					// jQuery('.lp').append('<option value="750000">$750,000/month</option>');

					// // max

					// jQuery('.hp').append('<option value="10000">$10,000/month</option>');

					// jQuery('.hp').append('<option value="20000">$20,000/month</option>');

					// jQuery('.hp').append('<option value="30000">$30,000/month</option>');

					// jQuery('.hp').append('<option value="40000">$40,000/month</option>');

					// jQuery('.hp').append('<option value="50000">$50,000/month</option>');

					// jQuery('.hp').append('<option value="60000">$60,000/month</option>');

					// jQuery('.hp').append('<option value="70000">$70,000/month</option>');

					// jQuery('.hp').append('<option value="80000">$80,000/month</option>');

					// jQuery('.hp').append('<option value="90000">$90,000/month</option>');

					// jQuery('.hp').append('<option value="100000">$100,000/month</option>');

					// jQuery('.hp').append('<option value="110000">$110,000/month</option>');

					// jQuery('.hp').append('<option value="120000">$120,000/month</option>');

					// jQuery('.hp').append('<option value="130000">$130,000/month</option>');

					// jQuery('.hp').append('<option value="140000">$140,000/month</option>');

					// jQuery('.hp').append('<option value="150000">$150,000/month</option>');

					// jQuery('.hp').append('<option value="200000">$200,000/month</option>');

					// jQuery('.hp').append('<option value="250000">$250,000/month</option>');

					// jQuery('.hp').append('<option value="300000">$300,000/month</option>');

					// jQuery('.hp').append('<option value="350000">$350,000/month</option>');

					// jQuery('.hp').append('<option value="400000">$400,000/month</option>');

					// jQuery('.hp').append('<option value="450000">$450,000/month</option>');

					// jQuery('.hp').append('<option value="500000">$500,000/month</option>');

					// jQuery('.hp').append('<option value="550000">$550,000/month</option>');

					// jQuery('.hp').append('<option value="600000">$600,000/month</option>');

					// jQuery('.hp').append('<option value="650000">$650,000/month</option>');

					// jQuery('.hp').append('<option value="700000">$700,000/month</option>');

					// jQuery('.hp').append('<option value="750000">$750,000/month</option>');

				}

				else{

					jQuery('.subproptype').remove();

					jQuery('.price-lp').html('<option value="">Minimum Price</option>');

					jQuery('.price-hp').html('<option value="">Maximum Price</option>');

					// min

					jQuery('.price-lp').append('<option value="150000">$150,000</option>');

					jQuery('.price-lp').append('<option value="200000">$200,000</option>');

					jQuery('.price-lp').append('<option value="250000">$250,000</option>');

					jQuery('.price-lp').append('<option value="300000">$300,000</option>');

					jQuery('.price-lp').append('<option value="350000">$350,000</option>');

					jQuery('.price-lp').append('<option value="400000">$400,000</option>');

					jQuery('.price-lp').append('<option value="450000">$450,000</option>');

					jQuery('.price-lp').append('<option value="500000">$500,000</option>');

					jQuery('.price-lp').append('<option value="550000">$550,000</option>');

					jQuery('.price-lp').append('<option value="600000">$600,000</option>');

					jQuery('.price-lp').append('<option value="650000">$650,000</option>');

					jQuery('.price-lp').append('<option value="700000">$700,000</option>');

					jQuery('.price-lp').append('<option value="750000">$750,000</option>');

					jQuery('.price-lp').append('<option value="800000">$800,000</option>');

					jQuery('.price-lp').append('<option value="850000">$850,000</option>');

					jQuery('.price-lp').append('<option value="900000">$900,000</option>');

					jQuery('.price-lp').append('<option value="950000">$950,000</option>');

					jQuery('.price-lp').append('<option value="1000000">$1,000,000</option>');

					jQuery('.price-lp').append('<option value="1250000">$1,250,000</option>');

					jQuery('.price-lp').append('<option value="1500000">$1,500,000</option>');

					jQuery('.price-lp').append('<option value="1750000">$1,750,000</option>');

					jQuery('.price-lp').append('<option value="2000000">$2,000,000</option>');

					jQuery('.price-lp').append('<option value="2250000">$2,250,000</option>');

					jQuery('.price-lp').append('<option value="2500000">$2,500,000</option>');

					jQuery('.price-lp').append('<option value="2750000">$2,750,000</option>');

					jQuery('.price-lp').append('<option value="3000000">$3,000,000</option>');

					jQuery('.price-lp').append('<option value="3250000">$3,250,000</option>');

					jQuery('.price-lp').append('<option value="3500000">$3,500,000</option>');

					jQuery('.price-lp').append('<option value="3750000">$3,750,000</option>');

					jQuery('.price-lp').append('<option value="4000000">$4,000,000</option>');

					jQuery('.price-lp').append('<option value="4250000">$4,250,000</option>');

					jQuery('.price-lp').append('<option value="4500000">$4,500,000</option>');

					jQuery('.price-lp').append('<option value="4750000">$4,750,000</option>');

					jQuery('.price-lp').append('<option value="5000000">$5,000,000</option>');

					jQuery('.price-lp').append('<option value="6000000">$6,000,000</option>');

					jQuery('.price-lp').append('<option value="7000000">$7,000,000</option>');

					jQuery('.price-lp').append('<option value="8000000">$8,000,000</option>');

					jQuery('.price-lp').append('<option value="9000000">$9,000,000</option>');

					jQuery('.price-lp').append('<option value="10000000">$10,000,000</option>');

					jQuery('.price-lp').append('<option value="15000000">$15,000,000</option>');

					jQuery('.price-lp').append('<option value="20000000">$20,000,000</option>');

					jQuery('.price-lp').append('<option value="25000000">$25,000,000</option>');

					jQuery('.price-lp').append('<option value="30000000">$30,000,000</option>');

					jQuery('.price-lp').append('<option value="35000000">$35,000,000</option>');

					jQuery('.price-lp').append('<option value="40000000">$40,000,000</option>');

					jQuery('.price-lp').append('<option value="45000000">$45,000,000</option>');

					jQuery('.price-lp').append('<option value="50000000">$50,000,000</option>');

					jQuery('.price-lp').append('<option value="60000000">$60,000,000</option>');

					jQuery('.price-lp').append('<option value="70000000">$70,000,000</option>');

					jQuery('.price-lp').append('<option value="80000000">$80,000,000</option>');

					jQuery('.price-lp').append('<option value="90000000">$90,000,000</option>');

					jQuery('.price-lp').append('<option value="100000000">$100,000,000</option>');

					// max

					jQuery('.price-hp').append('<option value="200000">$200,000</option>');

					jQuery('.price-hp').append('<option value="250000">$250,000</option>');

					jQuery('.price-hp').append('<option value="300000">$300,000</option>');

					jQuery('.price-hp').append('<option value="350000">$350,000</option>');

					jQuery('.price-hp').append('<option value="400000">$400,000</option>');

					jQuery('.price-hp').append('<option value="450000">$450,000</option>');

					jQuery('.price-hp').append('<option value="500000">$500,000</option>');

					jQuery('.price-hp').append('<option value="550000">$550,000</option>');

					jQuery('.price-hp').append('<option value="600000">$600,000</option>');

					jQuery('.price-hp').append('<option value="650000">$650,000</option>');

					jQuery('.price-hp').append('<option value="700000">$700,000</option>');

					jQuery('.price-hp').append('<option value="750000">$750,000</option>');

					jQuery('.price-hp').append('<option value="800000">$800,000</option>');

					jQuery('.price-hp').append('<option value="850000">$850,000</option>');

					jQuery('.price-hp').append('<option value="900000">$900,000</option>');

					jQuery('.price-hp').append('<option value="950000">$950,000</option>');

					jQuery('.price-hp').append('<option value="1000000">$1,000,000</option>');

					jQuery('.price-hp').append('<option value="1250000">$1,250,000</option>');

					jQuery('.price-hp').append('<option value="1500000">$1,500,000</option>');

					jQuery('.price-hp').append('<option value="1750000">$1,750,000</option>');

					jQuery('.price-hp').append('<option value="2000000">$2,000,000</option>');

					jQuery('.price-hp').append('<option value="2250000">$2,250,000</option>');

					jQuery('.price-hp').append('<option value="2500000">$2,500,000</option>');

					jQuery('.price-hp').append('<option value="2750000">$2,750,000</option>');

					jQuery('.price-hp').append('<option value="3000000">$3,000,000</option>');

					jQuery('.price-hp').append('<option value="3250000">$3,250,000</option>');

					jQuery('.price-hp').append('<option value="3500000">$3,500,000</option>');

					jQuery('.price-hp').append('<option value="3750000">$3,750,000</option>');

					jQuery('.price-hp').append('<option value="4000000">$4,000,000</option>');

					jQuery('.price-hp').append('<option value="4250000">$4,250,000</option>');

					jQuery('.price-hp').append('<option value="4500000">$4,500,000</option>');

					jQuery('.price-hp').append('<option value="4750000">$4,750,000</option>');

					jQuery('.price-hp').append('<option value="5000000">$5,000,000</option>');

					jQuery('.price-hp').append('<option value="6000000">$6,000,000</option>');

					jQuery('.price-hp').append('<option value="7000000">$7,000,000</option>');

					jQuery('.price-hp').append('<option value="8000000">$8,000,000</option>');

					jQuery('.price-hp').append('<option value="9000000">$9,000,000</option>');

					jQuery('.price-hp').append('<option value="10000000">$10,000,000</option>');

					jQuery('.price-hp').append('<option value="15000000">$15,000,000</option>');

					jQuery('.price-hp').append('<option value="20000000">$20,000,000</option>');

					jQuery('.price-hp').append('<option value="25000000">$25,000,000</option>');

					jQuery('.price-hp').append('<option value="30000000">$30,000,000</option>');

					jQuery('.price-hp').append('<option value="35000000">$35,000,000</option>');

					jQuery('.price-hp').append('<option value="40000000">$40,000,000</option>');

					jQuery('.price-hp').append('<option value="45000000">$45,000,000</option>');

					jQuery('.price-hp').append('<option value="50000000">$50,000,000</option>');

					jQuery('.price-hp').append('<option value="60000000">$60,000,000</option>');

					jQuery('.price-hp').append('<option value="70000000">$70,000,000</option>');

					jQuery('.price-hp').append('<option value="80000000">$80,000,000</option>');

					jQuery('.price-hp').append('<option value="90000000">$90,000,000</option>');

					jQuery('.price-hp').append('<option value="100000000">$100,000,000</option>');

					jQuery('.price-hp').append('<option value="110000000">$110,000,000</option>');

					jQuery('.price-hp').append('<option value="120000000">$120,000,000</option>');

					jQuery('.price-hp').append('<option value="130000000">$130,000,000</option>');

					jQuery('.price-hp').append('<option value="140000000">$140,000,000</option>');

					jQuery('.price-hp').append('<option value="150000000">$150,000,000</option>');

				}

			});			

		},

        

        initMobileCustomSripts: function() {

			detectWidth();

            jQuery(window).resize(function () {

                detectWidth();

            });

            function detectWidth() {

                var devw = jQuery(window).width();

                if (devw > 991) {

                    //console.log("desktop");

                    jQuery('.qs-form .qs-fields select.lp option:first-child').text('Minimum Price');

                    jQuery('.qs-form .qs-fields select.hp option:first-child').text('Maximum Price');

                }

                else if (devw <= 991) {

                    //console.log("mobile");

                    jQuery('.qs-form .qs-fields select.lp option:first-child').text('Min. Price');

                    jQuery('.qs-form .qs-fields select.hp option:first-child').text('Max. Price');

                    

                    jQuery('.qs-property-type').on('change', function(){

                        jQuery('.qs-form .qs-fields select.lp option:first-child').text('Min. Price');

                        jQuery('.qs-form .qs-fields select.hp option:first-child').text('Max. Price');

                    

                    });			

                }

            };

		},

		initSkipToContents: function(){

			var id_h = 'inner-page-wrapper';

			  if (jQuery('body').hasClass('home')) {

			    id_h = jQuery('main > div').eq(0).attr('id');

			  }

			  jQuery('div#main-wrapper').prepend('<a href="#'+id_h+'" title="Skip Navigation" class="skiptobtn notvisible" tabindex="1">Skip Navigation</a>');

			  if (jQuery('body').hasClass('home')) {

		            jQuery('main > div').each(function(){

		            var id = jQuery(this).attr('id');

		            var data_section = jQuery(this).attr('data-section');

		            var next_id = jQuery(this).next('section').attr('id');

				// console.log(next_id != undefined);

			  if (next_id != undefined) {

		   	    console.log(data_section);

			    jQuery(this).prepend('<a href="#'+next_id+'" title="Skip '+data_section+'" class="skiptobtn notvisible top-lower">Skip '+data_section+'</a>');

		    		}

		 	  })

			}

		    // mobile header

		        jQuery('.amh-navigation-trigger').attr('role','button');

		        jQuery('.amh-navigation-trigger').attr('title','Burger Menu');

		        jQuery('.amh-navigation-trigger').attr('aria-label','Burger Menu');

		        jQuery('.amh-header-right-btn').attr('role', 'button');

		        

		        var mobile_header_email = jQuery('.amh-header-right-btn a').attr('href');

		        jQuery('.amh-header-right-btn').attr('title', mobile_header_email);

		        jQuery('.amh-header-right-btn').attr('aria-label', mobile_header_email);

		},

		initIframeFix: function(){

			setTimeout(function(){

			    jQuery('.vid-main-single iframe').attr('title', 'Video Collection');

			}, 1000);

		},

		initFIXRecaptcha: function(){

		    setTimeout(function() {

		        jQuery('textarea.g-recaptcha-response').attr('aria-label','recaptcha response');

		        jQuery('.grecaptcha-badge .grecaptcha-logo iframe').attr('title','Google Recaptcha');

		    }, 100);

		},

		initCustomRoleFixes: function(){

			jQuery('.git-form .git-dual-field input#git-name').attr('role', 'field');

			jQuery('.git-form .git-dual-field input#git-email').attr('role', 'field');

			jQuery('.git-form .git-field textarea#git-msg').attr('role', 'textarea');

			jQuery(".nav > li").each(function() {

			        var navtext = jQuery(this).find('>a').text();

			        jQuery(this).find('>a').attr('aria-label', "" + navtext);

			});

			

		},

		landingPage: function(){

			// if(window.location.href.indexOf('luxury-condos') > -1 ){

			// 	jQuery('.lcd-panels').hover(function(){

			// 		jQuery('#lcd-list-active>.lcd-prop>a').each(function(){

			// 			var oldUrl = jQuery(this).attr("href");

			// 			var newUrl = oldUrl.replace("https://jillszeder.idxbroker.com/", "https://www.jillszeder.com/homes-for-sale-listing-page/?i=\\");

			// 			jQuery(this).attr("href", newUrl);

			// 		});

			// 	})

			// }

			// //HEADER SETTINGS

   //          jQuery(document).ready(function(){

   //              if(window.location.href.indexOf('?lp=1') > -1){

   //                  jQuery('header').empty();

   //                  jQuery('header').append('<header class="header"><div class="main-header"><div id="header-container" class="container"><div class="mh-wrapper"><div class="mh-navs"><nav class="navigation"><div class="menu-main-navigation-container"><div class="logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name" aria-label="Logo"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><ul class="aios-split-nav nav" id="ul-nav"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default;pointer-events:none">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="mh-contact"><div class="textwidget custom-html-widget"><ul class="contact-list"><li><button class="btn btn-lg" id="header-contact-btn"><span class="ai-font-phone" role="icon"></span> Call Us</button><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li></ul></li></ul></div></div></div></div></div><div class="header-sm blend-white"><div class="sm-wrapper"><div class="textwidget custom-html-widget"><ul class="sm-list"><li><a href="https://www.facebook.com/thejillszedergroup/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><em role="icon" class="ai-font-facebook"></em> <em class="hidden">Facebook</em></a></li><li><a href="https://www.youtube.com/c/thejillsteam/featured" target="_blank" aria-label="Youtube" rel="noopener noreferrer"><em role="icon" class="ai-font-youtube"></em> <em class="hidden">Youtube</em></a></li><li><a href="https://www.linkedin.com/company/1631196/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer"><em role="icon" class="ai-font-linkedin"></em> <em class="hidden">Linkedin</em></a></li><li><a href="https://twitter.com/jillszeder" target="_blank" aria-label="Twitter" rel="noopener noreferrer"><em role="icon" class="ai-font-twitter"></em> <em class="hidden">Twitter</em></a></li><li class="fixed-instagram"><span><em role="icon" class="ai-font-instagram"></em></span><ul><li><a href="https://www.instagram.com/jillszedergables" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Coral Gables</a></li><li><a href="https://www.instagram.com/jillszederbeach/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><em role="icon" class="ai-font-instagram"></em> Miami Beach</a></li></ul></li></ul></div></div></div><div class="fixed-header"><div class="fh-wrapper"><div class="fh-logo"><a href="https://www.jillszeder.com/homes-for-sale/" class="site-name"><div class="textwidget custom-html-widget"><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/logo.png" alt="Jills Zeder Group" class="img-responsive"></div></a></div><div class="fh-nav"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="fixednav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div><div class="fh-contact"><div class="textwidget custom-html-widget"><ul><li><a href="tel:+1.305.722.5721"><span>Coral Gables Office</span> 305.722.5721</a></li><li><a href="tel:+1.305.341.7447"><span>Miami Beach Office</span> 305.341.7447</a></li><li><div class="nav-trigger"><span></span> <span></span> <span></span></div></li></ul></div></div></div></div><div class="mobile-nav"><div class="mobnav-close"><span role="close" class="ai-font-close-b"></span></div><div class="nav-wrapper"><nav class="navigation"><div class="menu-main-navigation-container"><ul id="mobnav" class="menu"><li id="menu-item-home" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-home jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale/" data-title="Home" aria-label="Home">Home</a></li><li id="menu-item-exclusive-listing" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-exclusive-listing jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-exclusive-listings/" data-title="Exclusive Listings" aria-label="Exclusive Listings">Exclusive Listings</a></li><li id="menu-item-sbpt" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-sbpt jquery-nav-tab-parent"><a href="#" data-title="Search by Property Type" aria-label="Search by Property Type" style="cursor:default">Search by Property Type</a><ul class="sub-menu"><li id="menu-item-3454" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3454 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-condos/" data-title="List with us">Luxury Condos</a></li><li id="menu-item-3455" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3455 jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-luxury-homes/" data-title="Our Numbers">Luxury Homes</a></li></ul></li><li id="menu-item-contact-us" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-contact-us jquery-nav-tab-parent"><a href="https://www.jillszeder.com/homes-for-sale-contact-us/" data-title="Contact Us" aria-label="Contact Us">Contact Us</a></li></ul></div></nav></div></div></header>');

   //                  jQuery('.custom-breadcrumbs').remove();

   //                  jQuery('.ip-banner').css('height', '475px');

   //                  jQuery('head').append('<link rel="stylesheet" href="https://www.jillszeder.com/wp-content/themes/jillszeder.com/index-landing-page/style-index.css" type="text/css" media="all">')

   //                  jQuery('.lcd-page-links>a').eq(0).attr('href', 'https://www.jillszeder.com/homes-for-sale-luxury-condos/');

   //                  jQuery('.lcd-page-links>a').eq(1).attr('href', 'https://www.jillszeder.com/homes-for-sale-exclusive-listings/');

   //                  jQuery(window).scroll(function () {

			// 	        if (jQuery(this).scrollTop() > 100) {

			// 	            jQuery('.header').addClass('fixed');

			// 	            jQuery('#header-container').hide();

			// 	        }

			// 	        else {

			// 	            jQuery('.header').removeClass('fixed');

			// 	            jQuery('#header-container').show();

			// 	        }

			// 	    });

   //              }

   //          })

		},

		introProcess: function(){

			setTimeout(function(){

				jQuery('#hp-top').addClass('done-intro');

			},5000);

		},

		sourceLead: function() {

			jQuery('#cf7-source-link').val(window.location.href);

		},

		initFixQS: function(){

			jQuery('.qs-property-type').removeAttr('name');

			jQuery('.qs-property-type').change(function() {

				if(jQuery(this).val() != ""){

					jQuery('.qs-property-type').attr('name', 'pt');

				}else{

					jQuery('.qs-property-type').removeAttr('name');

				}

			});

		},

		blogBreadcrumbs: function() {

			if(window.location.href.indexOf('/blog/') > -1) {

				var url = window.location.origin; 

				if (jQuery('.blogdet-title').length) {

					jQuery('#breadcrumbs').html('<span><span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="'+url+'"><span property="name">Home</span></a><meta property="position" content="1"></span> » <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="/blog/"><span property="name">Blog</span></a><meta property="position" content="2"></span> » <span class="breadcrumb_last" property="itemListElement" typeof="ListItem"><span property="name">'+jQuery('.blogdet-title').text()+'</span><meta property="position" content="3"></span></span>');

				} else {

					jQuery('#breadcrumbs').html('<span><span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="'+url+'"><span property="name">Home</span></a><meta property="position" content="1"></span> » <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="/blog/"><span property="name">Blog</span></a><meta property="position" content="2"></span><span class="breadcrumb_last" property="itemListElement" typeof="ListItem"><span property="name">'+jQuery('.blogdet-title').text()+'</span><meta property="position" content="3"></span></span>');

				}	

			}



			if (jQuery('body').hasClass('single-post')) {



				if (jQuery('.breadcrumb_last').prev().find('a').text() == "Blog") {

					jQuery('.breadcrumb_last').prev().find('a').attr('href', '/blog/');

				}

			}

			

		},

		initBreadcrumbFixes: function() {

			if(window.location.href.indexOf('/sellers/marketing-masters/') > -1 ||

				window.location.href.indexOf('/sellers/industry-experts/') > -1 ) {

				if (jQuery('.breadcrumb_last').prev().find('a').text() == "Sellers") {

					jQuery('.breadcrumb_last').prev().find('a').attr('href', '/list-with-us/');

				}

			}

		},

		initAutoCompleteOff: function () {

			jQuery('input[type="text"]').attr('autocomplete', 'off');

		},



		initIPIDXB: function() {

			if (location.href.indexOf('/idx/details/listing/d016/A11175166/') > 0) {

				setTimeout(function(){

				jQuery('.stat-single.det-living').html('<span> Total Sq.Ft.:</span>13,144');

				},1000);

			}

	

			$link = location.href;

			if($link.indexOf('/idx/featured') > -1){

			jQuery('.fl-qs h3').html('Search <span>Our Current Listings</span>');

			}

	

			setTimeout(function(){

				jQuery('.lcd-prop a').each(function(){

					var hre = jQuery(this).attr('href');

					console.log(hre);

					if(hre == 'https://jillszeder.idxbroker.com/idx/details/listing/d016/A11342643&chkpopup=true'){

						jQuery(this).parents('.lcd-prop').remove();

					}

	

					if(hre == 'https://jillszeder.idxbroker.com/idx/details/listing/d016/A11323077&chkpopup=true'){

						jQuery(this).parents('.lcd-prop').remove();

					}

		

				});

			},1000)



			if (location.href.indexOf('/idx/details/listing/d016/A11175166/') > 0) {

				jQuery('.stat-single.det-living').html('<span> Total Sq.Ft.:</span>13,144');

			}



			if($link.indexOf('/idx/details/listing/d016/A11323077/1455-Ocean-Dr-710-Miami-Beach-FL-33139') > -1){

				window.location.href = 'https://www.jillszeder.com/404-page-not-found/';

			}



			if($link.indexOf('/idx/details/listing/d016/A11342643/1455-Ocean-Dr-1008-Miami-Beach-FL-33139') > -1){

				window.location.href = 'https://www.jillszeder.com/404-page-not-found/';

			}



			jQuery('.fl-list .fl-prop a').each(function(){

				var _href = jQuery(this).attr('href');

				jQuery(this).parents('.fl-prop').remove();



				if(_href.indexOf('/idx/details/listing/d016/A11323077/1455-Ocean-Dr-710-Miami-Beach-FL-33139') > -1){

					jQuery(this).parents('.fl-prop').remove();

				}



				if(_href.indexOf('/idx/details/listing/d016/A11342643/1455-Ocean-Dr-1008-Miami-Beach-FL-33139') > -1){

					jQuery(this).parents('.fl-prop').remove();

				}

			});

		},



		initQS: function() {

			jQuery('.cityID').change(function(){

				console.log(jQuery(this).val())

				var fi = jQuery(this).val();

				if(fi == 'FISHER ISLAND' || fi == 'INDIAN CREEK'){

					jQuery(this).attr('name', 'a_subdivision[]');

				}else{

					jQuery(this).attr('name', 'city[]');

				}

			});

		},



		delayInitialization: function(){

			function initDelayThirdParty() {

				// START GTAG

				// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

				// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],

				// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=

				// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);

				// })(window,document,'script','dataLayer','GTM-WDWR84S');

				// END GTAG

				// START GTAG

				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],

				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=

				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);

				})(window,document,'script','dataLayer','GTM-PNF76NS');

				// END GTAG

				// START GA

				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				

				ga('create', 'UA-179540051-1', 'auto');

				ga('send', 'pageview');

				// END GA

				// START AW

				window.dataLayer = window.dataLayer || [];

				function gtag(){dataLayer.push(arguments);}

				gtag('js', new Date());

			 

				gtag('config', 'AW-10785785882');

				// END AW

				// START accessiBe

				(function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, disableBgProcess : false, language : 'en', position : 'left', leadColor : '#014046', triggerColor : '#014046', triggerRadius : '50%', triggerPositionX : 'left', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'center', triggerOffsetX : 10, triggerOffsetY : 0, triggerRadius : '50%' } }); }; h.appendChild(s); })();

				// END accessiBe



				// START Facebook

				!function(f,b,e,v,n,t,s)



				{if(f.fbq)return;n=f.fbq=function(){n.callMethod?

				

				n.callMethod.apply(n,arguments):n.queue.push(arguments)};

				

				if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';

				

				n.queue=[];t=b.createElement(e);t.async=!0;

				

				t.src=v;s=b.getElementsByTagName(e)[0];

				

				s.parentNode.insertBefore(t,s)}(window, document,'script',

				

				'https://connect.facebook.net/en_US/fbevents.js');

				

				fbq('init', '545981834267540');

				

				fbq('track', 'PageView');

				// END Facebook







				const third_party_scripts = [

					// 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',

					// 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js',

					'https://www.recaptcha.net/recaptcha/api.js?render=6LcEoPcdAAAAAGQbodtiCOm_akCZiUZsseD6tDy5',

					'https://www.googletagmanager.com/gtag/js?id=AW-10785785882',

				];

	

				jQuery.each(third_party_scripts, function (i, item) {

					var scrpt = document.createElement('script');

					scrpt.src = item;

					scrpt.defer = true;

					document.body.appendChild(scrpt);

				});

			}

	

			function initSectionVisibility(){

				

				// app.IntroPopup();

				app.initPopupFormRegister();


				// jQuery.ajax({

				// 	url: aios_cparams.ajax_url,

				// 	data: {

				// 		'action': 'fetch_the_sidebar',

				// 	},

				// 	type: 'GET',

				// 	dataType : 'html',

				// 	success: function (sections) {

				// 		let section = JSON.parse(sections);

	

						// Append HP Sidebar sections

						// jQuery(section[0]).insertAfter('.home #hp-top');

						// jQuery('.footer').html(section[1]);

	

						// app.initFeaturedProperties();

						// app.initTestimonials();

						// app.initMedia();

						// app.initVideoCollection();

						// app.initInstagram();

						// initCustomLazyload();

						// document.querySelectorAll('.wpcf7-form').forEach(function(form) {

						// 	wpcf7.init(form);

						// });

						

				// 	}

				// });



				app.initFeaturedProperties();

				

				app.initMedia();

				app.initVideoCollection();

				app.initInstagram();

				initCustomLazyload();

				// document.querySelectorAll('.wpcf7-form').forEach(function(form) {

				// 	wpcf7.init(form);

				// });



			}

			function initCustomLazyload() {

				jQuery(".home .fl-img").each(function(){

					var datasrc = jQuery(this).find('img').attr("src");

					if (datasrc != '') {

						jQuery(this).find('canvas').attr("style","background-image: url(" + datasrc + ");");

						jQuery(this).find('img').remove();

					}

				  

				});

	

				jQuery(".page-template-index-landing-page .fl-img").each(function(){

					var datasrc = jQuery(this).find('img').attr("src");

					if (datasrc != '') {

						jQuery(this).find('canvas').attr("style","background-image: url(" + datasrc + ");");

						jQuery(this).find('img').remove();

					}

				});

	

	

				

				jQuery(".ig-single canvas").each(function(){

					var datasrc = jQuery(this).attr("data-ig-image");

					if (datasrc != '') {

						jQuery(this).attr("style","background-image: url(" + datasrc + ");");

					}

				});

				jQuery("body.home .media-single").each(function(){

					var datacanvas = jQuery(this).find('canvas').attr("data-canvas");

					var datasrc = jQuery(this).find('img').attr("data-src");

					if (datacanvas != '' && datasrc != '') {

						jQuery(this).find('canvas').attr("style","background-image: url(" + datacanvas + ");");

						jQuery(this).find('img').attr("src",datasrc);

					}

				});

		        // jQuery(".vid-main-single canvas").each(function(){

		        //      var datasrc = jQuery(this).attr("data-yt-main");

		        //     jQuery(this).attr("style","background-image: url(" + datasrc + ");");

		        // });

		        // jQuery(".vid-thumb-single canvas").each(function(){

		        //      var datasrc = jQuery(this).attr("data-yt-thumb");

		        //     jQuery(this).attr("style","background-image: url(" + datasrc + ");");

		        // });

				jQuery(".img-opt").each(function(){

					var datasrc = jQuery(this).attr("data-src");

					//jQuery(this).parent().attr("style","background-image: url(" + datasrc + ");");

					if (datasrc != '') {

						jQuery(this).attr('src', datasrc);

					}

				});

				jQuery('#hp-testi').attr('style','background: url(https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/testi-bg.jpg) center center no-repeat');

				jQuery('.footer-content').attr('style','background: url(https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/footer-bg.jpg) center center no-repeat');

			}

	

			// initDelayThirdParty();

			// initSectionVisibility();

			var fired = false;

			window.addEventListener('scroll', function() {

				let scroll = window.scrollY;

				if (scroll > 0  && fired === false) {

					initDelayThirdParty();

					initSectionVisibility();

					app.adaFixes();

					fired = true;

				}

			},{

				passive: true

			});



			document.addEventListener('mousemove', function(e) {

				let m_move = e.screenY;

				if (m_move > 0  && fired === false) {

					initDelayThirdParty();

					initSectionVisibility();

					fired = true;

				}

			});



			document.addEventListener('touchmove', function(e) {

				let t_move = e.isTrusted;

				if (t_move > 0  && fired === false) {

					initDelayThirdParty();

					initSectionVisibility();

					fired = true;

				}

			});

		},

		IntroPopup: function(){



		    if(jQuery('body').hasClass('home')){

		    	 if (sessionStorage.getItem("popup") == null) {



				    setTimeout(function(){

						jQuery('#hp-popup').addClass('active');

						jQuery('body').addClass('popup-active');

					}, 5000);



					jQuery('.popup-bd, .popup-close').click(function(){

						jQuery('#hp-popup').removeClass('active');

						jQuery('body').removeClass('popup-active');

					});



			         sessionStorage.setItem("popup", "show");

			     }

		    }



		},



		cf7DetectForeignLanguage: function(){

			jQuery('.wpcf7-submit').each(function(){

				var submitForm = jQuery(this);

				submitForm.click(function(e) {

				    e.preventDefault();

				    formWithForeignLang = '';

					hasForeign = false;



					function isNonEnglishLang(text) {

				      for (let i = 0; i < text.length; i++) {

				        const charCode = text.charCodeAt(i);

				        // Check if the character is outside the basic Latin range

				        if (charCode > 127) {

				          return true;

				        }

				      }

				      return false;

				    }





					jQuery('.wpcf7-form input[type=text]').each(function(){

						if(isNonEnglishLang(jQuery(this).val())){

							console.log('Foreign Language Detected');

							hasForeign = true;

							formWithForeignLang = jQuery(this).parents('form:first');

						}

					});

					jQuery('.wpcf7-form textarea').each(function(){

						if(isNonEnglishLang(jQuery(this).val())){

							console.log('Foreign Language Detected');

							hasForeign = true;

							formWithForeignLang = jQuery(this).parents('form:first');

						}

					});

					console.log(formWithForeignLang);

					if(!formWithForeignLang && !hasForeign){

						console.log('English Language Detected');

						// jQuery(submitForm).parents('form:first').submit();	

						if(jQuery(submitForm).parents('form:first').find('#form-errors').length >= 1){						

							jQuery(submitForm).parents('form:first').find('#form-errors').remove();		

							jQuery(submitForm).unbind('click').click();					

						}

					}else{

						if(jQuery(submitForm).parents('form:first').find('#form-errors').length <= 0)

							jQuery(submitForm).parents('form:first').append('<span id="form-errors" class="text-danger">Foreign Language Detected.</span>');					

					}

				})

			});

			

		},

		
		updateContactForm: function() {

			if( jQuery('.wpcf7 form').length > 0 ) {

				jQuery('.wpcf7 form').each(function(){

					var this_form = jQuery(this);

					this_form.find('.wpcf7-submit').click(function(){

						// console.log('clicked');

						const myInterval = setInterval(myTimer, 1000);

						function myTimer() {

							// console.log('interval');

							if( this_form.find('.wpcf7-response-output') != '' ) {

								// console.log('clear');

								// this_form.find('.wpcf7-not-valid-tip').hover(function() {

								// 	jQuery(this).fadeOut();
								// } );

								jQuery(document).on('hover', '.use-floating-validation-tip span.wpcf7-not-valid-tip', function() {
								    jQuery(this).fadeOut(); 
								});

								clearInterval(myInterval);
							}
						}
					});
				});
			}
		},
		
		initPopupFormRegister: function(){

			document.addEventListener( 'wpcf7mailsent', function( event ) {
			    // Set a cookie in local storage
			    localStorage.setItem('popup_register', true);

			});

			if(jQuery('body').hasClass('home')){
				// Check if the cookie is present in local storage
			    var popup_register = localStorage.getItem('popup_register');

			    if(popup_register) {
			        // Do something if the cookie is present
			        console.log('Cookie is present');
			        // You can replace console.log with any action you want to perform
			        jQuery('#hp-popup').removeClass('active');

					jQuery('body').removeClass('popup-active');
			    }else{
			    	setTimeout(function(){

						jQuery('#hp-popup').addClass('active');

						jQuery('body').addClass('popup-active');

					}, 5000);
			    }
			}

			// Set close function on popup
			jQuery("#hp-popup .ai-font-close-c").bind( "click", function() {
				jQuery('#hp-popup').removeClass('active');
				jQuery('body').removeClass('popup-active');
			});
			
		},

		addTabindex: function () {
			$('#hp-testi .testi-stars img').each(function (index, element) {
				$(this).attr('tabindex', 0);
	
			});
		},
		accessibeFix: function () {
			if(window.location.href.indexOf('/contact-us/') > -1){

				jQuery('.mask-131 input').attr('aria-required', 'true');
				jQuery('.your-phone-number input').attr('aria-required', 'true');
			}

			jQuery('#fixednav .menu-item-has-children').each(function(){
				jQuery(this).find('a').first().attr('aria-expanded', 'false');
				jQuery(this).find('a').first().attr('aria-haspopup', 'true');
			});

			setTimeout(function(){
				jQuery('#fixednav .menu-item-has-children a').first().hover(
				  function () {
				    jQuery(this).attr('aria-expanded', 'true');
				  },
				  function () {
				    jQuery(this).attr('aria-expanded', 'false');
				  }
				);
			},500);  
			
		},
		cf7Tooltip: function() {
			jQuery(document).on('mouseover', '.use-floating-validation-tip .wpcf7-not-valid-tip', function() {
				jQuery(this).fadeOut();
			});
		},
		adaFixes: function() {
			setTimeout(function(){
				jQuery('iframe:not([title])').each(function() {
					jQuery(this).attr('title', '3rd party iframe');
				});
				jQuery('textarea:not([title])').each(function() {
					jQuery(this).attr('title', '3rd party textarea');
				});
				jQuery('link:not([title])').each(function() {
					jQuery(this).attr('title', '3rd party stylesheet');
				});
				jQuery('.acsb-trigger[role="button"]').attr('aria-label','acsb-trigger');	
				jQuery('#scrollzipPoint').remove();
				
				jQuery('.page-id-105870 .contact-form-wrap input[type="text"], .page-id-105870 .contact-form-wrap input[type="email"],.page-id-105870 .contact-form-wrap input[type="tel"],.page-id-105870 .contact-form-wrap select,.page-id-105870 .contact-form-wrap textarea, .reloc-fillup .contact-form-wrap input[type="text"], .reloc-fillup .contact-form-wrap input[type="email"],.reloc-fillup .contact-form-wrap input[type="tel"],.reloc-fillup .contact-form-wrap select,.reloc-fillup .contact-form-wrap textarea, .reloc-fields .reloc-field input[type="text"], .reloc-fields .reloc-field input[type="email"],.reloc-fields .reloc-field input[type="tel"],.reloc-fields .reloc-field select,.reloc-fields .reloc-field textarea, input[name="kc_honeypot"]').each(function(){
					var get_input = jQuery(this);
					var get_placeholder = get_input.attr('placeholder');

					if(!get_placeholder){
						get_input.attr('aria-label', 'Form Input');
					}else{
						get_input.attr('aria-label', get_placeholder);
					}
				});


				jQuery('.join-network-dual-field input[type="text"], .join-network-dual-field input[type="tel"], .join-network-dual-field input[type="email"], .join-network-dual-field textarea, .join-network-dual-field select').each(function(){
					var get_input = jQuery(this);
					var get_placeholder = get_input.attr('placeholder');

					if(!get_placeholder){
						get_input.attr('aria-label', 'Form Input');
					}else{
						get_input.attr('aria-label', get_placeholder);
					}
				});

				var content_img = jQuery('img');
				content_img.each(function(){
					var this_img = jQuery(this);
					var img_alt = this_img.attr('alt');
					var imageUrl = this_img.attr('src');
					var fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);

					if(!img_alt){
						this_img.attr('alt', fileName);
					}
				});

				jQuery('.team-item .agent-img a').each(function(){
					jQuery(this).attr('aria-label', jQuery(this).attr('title'))
				});	
			}, 1000);
		},


	}

	jQuery(document).ready( function() {	

		

		app.landingPage();

		app.sourceLead();

		app.accessibeFix();

		/* Initialize navigation */

		setTimeout(function(){

			app.initNavigation();	

		}, 500);

		

		/* Initialize featured properties */

		 //app.initFeaturedProperties();

		/* Initialize featured communities */

		app.initFeaturedCommunities();

		// app.initAgentAdjust();

		

		/* Initialize testimonials */

		 //app.initTestimonials();

		

		/* Initialize quick search */

		app.initQuickSearch();

		

		app.initSplitNav();

		

		app.initFixedHeader();

		

		//app.initHeaderSM();

		app.initQSSlide();

		//app.initQSSlideLots();

		app.initWWWUChainHeight();

		 //app.initMedia();

		 //app.initVideoCollection();

		// app.initInstagram();

		app.initSideNavigation();

		app.initMobileNav();

		app.initSetFormSource();

		/* app.initPopup(); */

		app.getMinMaxPerPtype();

        

        app.initMobileCustomSripts();

        app.initSkipToContents();

        app.initIframeFix();

        app.initFIXRecaptcha();

        app.initCustomRoleFixes();

        app.introProcess();

        app.initFixQS();

        

        app.initAutoCompleteOff();

       // app.cf7DetectForeignLanguage();

        app.delayInitialization();

        // app.IntroPopup();

		app.initQS();

		app.updateContactForm();

		if(!jQuery('body').hasClass('home')) {

			app.initIPIDXB();

			app.blogBreadcrumbs();

			app.initBreadcrumbFixes();

		}

        

		

		if(window.location.href.indexOf('/idx/details/listing/a672/F10268366/382-S-Beach-Rd-Hobe-Sound-FL-33455') > -1){

			location.href = 'https://www.jillszeder.com/nolisting';  

		}



		if(window.location.href.indexOf('/idx/details/listing/d016/A10988126/382-S-Beach-Rd-Hobe-Sound-FL-33455') > -1){

			location.href = 'https://www.jillszeder.com/nolisting';  

		}

		

		if(window.location.href.indexOf('/idx/details/listing/d016/A11525690/6800-Fisher-Island-Dr-6823-Miami-Beach-FL-33109') > -1){

			jQuery('<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/lu5WpmG_dMk?si=XewX5SX_BqIH2mkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>').insertAfter('.det-l p');

		}

		app.initTestimonials();
		
		app.cf7Tooltip();

		app.adaFixes();

	});

	

	jQuery(document).scroll(function(){

		app.initFixedHeader();

		app.initHeaderSM();

	});

	

	jQuery(window).on('load', function(){

        if(!jQuery('body').hasClass('home')) {

			app.initCommunitiesSingle();

			app.initAgentAdjust();		
			
		}else{
			app.addTabindex();

			/* play hp sliders */
			setTimeout(function() {
				aiosSliderInstances['aios-slider-hp-slideshow'].Components.Autoplay.play();
				aiosSliderInstances['aios-slider-hp-mobile-slideshow'].Components.Autoplay.play();
				console.log(x);
			}, 8000);

			jQuery('a.slide-property-link').each(function() {
				var $url = jQuery(this).attr('href');
				var $text = jQuery(this).text();
				jQuery(this).parents('.aios-slider-slide').prepend('<a class="slide-property-link-desktop" href="'+$url+'"><span class="sr-only">'+$text+'</span></a>');
			});

		}

		app.adaFixes();

	});

	

	

})();