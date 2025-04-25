/***Luxury Condo Details***/
(function ($) {
	var app = {
		initPagination: function(){
			var obj = this;
			jQuery('#lcd-list-exclusive').easyPaginateExclusive({
		    paginateElement: 'div.lcd-prop',
		    elementsPerPage: 16
			});
			jQuery('#lcd-list-active').easyPaginateMoreSale({
			    paginateElement: 'div.lcd-prop',
			    elementsPerPage: 24
			});
			jQuery('#lcd-list-rent').easyPaginateMoreRent({
			    paginateElement: 'div.lcd-prop',
			    elementsPerPage: 24
			});
			jQuery('#lcd-list-sold').easyPaginateMoreSold({
			    paginateElement: 'div.lcd-prop',
			    elementsPerPage: 24
			});

			jQuery('.lcd-panels a.prev').html('<span class="ai-font-arrow-b-p"></span><em>Prev</em>');

			jQuery('.lcd-panels a.next').html('<em>Next</em><span class="ai-font-arrow-b-n"></span>');

			jQuery('#forsale-panel .ip-fp-pagi-inner a').click( function(){
				obj.initDoubleTapSale();
			});
			jQuery('#forrent-panel .ip-fp-pagi-inner a').click( function(){
				obj.initDoubleTapRent();
			});
			jQuery('#sold-panel .ip-fp-pagi-inner a').click( function(){
				obj.initDoubleTapSold();
			});

			jQuery('#exclusive-panel .ip-fp-pagi-inner a').click( function(){
				obj.initDoubleTapExclusive();
			});
		},
		initDoubleTapExclusive: function(){
			setTimeout(function(){
				jQuery('#exclusive-panel .lcd-el-single a').click(function(el){
					var devW = jQuery(window).width();
					if(devW < 1200){
						el.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						//jQuery(this).parent().parent().parent().siblings().find('> a').removeClass('clicked_once');
						jQuery('.lcd-prop a').removeClass('clicked_once');
						jQuery('.lcd-el-single a').removeClass('clicked_once');
						
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 1500);
		},
		initDoubleTapSale: function(){
			setTimeout(function(){
				jQuery('#forsale-panel .lcd-prop a').click(function(el){
					var devW = jQuery(window).width();
					if(devW < 1200){
						el.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						//jQuery(this).parent().parent().parent().siblings().find('> a').removeClass('clicked_once');
						jQuery('.lcd-prop a').removeClass('clicked_once');
						jQuery('.lcd-el-single a').removeClass('clicked_once');
						
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 1500);
		},
		initDoubleTapRent: function(){
			setTimeout(function(){
				jQuery('#forrent-panel .lcd-prop a').click(function(el){
					var devW = jQuery(window).width();
					if(devW < 1200){
						el.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						//jQuery(this).parent().parent().parent().siblings().find('> a').removeClass('clicked_once');
						jQuery('.lcd-prop a').removeClass('clicked_once');
						jQuery('.lcd-el-single a').removeClass('clicked_once');
						
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 1500);
		},
		initDoubleTapSold: function(){
			setTimeout(function(){
				jQuery('#sold-panel .lcd-prop a').click(function(el){
					var devW = jQuery(window).width();
					if(devW < 1200){
						el.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						//jQuery(this).parent().parent().parent().siblings().find('> a').removeClass('clicked_once');
						jQuery('.lcd-prop a').removeClass('clicked_once');
						jQuery('.lcd-el-single a').removeClass('clicked_once');
						
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 1500);
		},
		initReadMore: function() {
			jQuery('.moreless-button').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				if (jQuery('.moreless-button').text() == "Read More") {
				    jQuery(this).html('<span>Read Less</span>');
				    jQuery('.addReadMore').css('height','auto');
				    jQuery('.addReadMore').css('overflow','visible');
				} else {
				    jQuery(this).html('<span>Read More</span>');
				    jQuery('.addReadMore').css('height','400px');
				    jQuery('.addReadMore').css('overflow','hidden');
					
					jQuery('html, body').animate({
				    	scrollTop: jQuery(".moreless-button").offset().top - (jQuery(window).height() / 2) - 100
				    }, 500);
				}
			});
		}
	}
	jQuery(document).ready(function(){
		app.initPagination();
		app.initDoubleTapExclusive();
		app.initDoubleTapSale();
		app.initDoubleTapRent();
		app.initDoubleTapSold();
		app.initReadMore();

		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		jQuery('p#breadcrumbs span:nth-child(2) a').attr('href', '/luxury-condos/');
		jQuery('p#breadcrumbs span:nth-child(2) a > span').text('Luxury Condos');


		jQuery('.lcd-listing-tabs .lcd-tabs span').click(function(){

			var spanid = jQuery(this).attr('id');

			jQuery('.lcd-panel-single').removeClass('active');

			jQuery('.lcd-listing-tabs .lcd-tabs span').removeClass('active');

			jQuery(this).addClass('active');

			jQuery('#' + spanid + '-panel').addClass('active');

			jQuery('.lcd-prop a').removeClass('clicked_once');
			jQuery('.lcd-el-single a').removeClass('clicked_once');


		});

		jQuery('.lcd-info-tab .lcd-info-tab-col').click(function(){
	        jQuery('.lcd-info-tab .lcd-info-tab-col a').removeClass('active');
	        jQuery('.lcd-info-body .lcd-desc_cs').removeClass('active');
	        var tabIndex = jQuery(this).attr('data-tabIndex');
	        jQuery(this).find('a').addClass('active');
	        jQuery('.lcd-info-body').find('.lcd-desc_cs[data-tabindex="'+tabIndex+'"]').addClass('active');
			if (jQuery(this).find('span').text().indexOf('Description') > -1){
				jQuery('.readmore-btn').removeClass('aiosp-hide');
			}else{
				jQuery('.readmore-btn').addClass('aiosp-hide');				
			}
	        
	    });

	    jQuery('#exclusive-panel ul').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 5000,
			appendDots: jQuery('.lcd-el-dots'),
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		jQuery('.lcd-el-navs .lcd-el-next').click(function(){
			jQuery('#exclusive-panel ul').slick('slickNext');
		});


	});

})(jQuery);