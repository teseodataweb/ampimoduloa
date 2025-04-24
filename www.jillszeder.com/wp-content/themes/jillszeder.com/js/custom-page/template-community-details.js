/*** Community Details  ***/
(function ($) {

	var app = {
		tabSelection: function () {
			jQuery('ul.scom-property-tabnav button.tabnav-btn').click(function () {
				var thisTab = jQuery(this).attr('data-tab');

				jQuery('.scomm-prop-item a').removeClass('clicked_once');

				if (!jQuery(this).hasClass('active')) {
					//remove active tab
					jQuery('ul.scom-property-tabnav button.tabnav-btn').removeClass('active');
					jQuery(this).addClass('active');
					// jQuery('.scomm-property-content').removeClass('active');

					jQuery('.scomm-property-middle .scomm-property-content').slideUp(1000);

					jQuery('.scomm-property-middle').find('.scomm-property-content[data-tab="' + thisTab + '"]').addClass('active');
					jQuery('.scomm-property-middle').find('.scomm-property-content[data-tab="' + thisTab + '"]').slideDown(1000);
				}
			});
		},
		initPagination: function () {
			var obj = this;
			jQuery('#scomm-property-list-exclusive').easyPaginateExclusive({
			    paginateElement: 'div.scomm-prop-item',
			    elementsPerPage: 16
			});
			jQuery('#scomm-list-active').easyPaginateMoreSale({
			    paginateElement: 'div.scomm-prop-item',
			    elementsPerPage: 24
			});
			jQuery('#scomm-list-rent').easyPaginateMoreRent({
			    paginateElement: 'div.scomm-prop-item',
			    elementsPerPage: 24
			});
			jQuery('#scomm-list-sold').easyPaginateMoreSold({
			    paginateElement: 'div.scomm-prop-item',
			    elementsPerPage: 24
			});
			jQuery('.scomm-property-middle a.prev').html('<span class="ai-font-arrow-b-p"></span><em>Prev</em>');
			jQuery('.scomm-property-middle a.next').html('<em>Next</em><span class="ai-font-arrow-b-n"></span>');
			jQuery('#exclusive-panel a.prev').html('<span class="ai-font-arrow-b-p"></span><em>Prev</em>');
			jQuery('#exclusive-panel a.next').html('<em>Next</em><span class="ai-font-arrow-b-n"></span>');

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


			jQuery('.scomm-property-middle .ip-fp-pagi-inner').find('a').each(function(){
			    jQuery(this).click(function(){
			        jQuery('html, body').animate({
			            scrollTop: jQuery(".scomm-property-middle").offset().top - 250
			        }, 1000);
			    })
			});

			// jQuery('.ip-fp-pagi-inner a.next, .ip-fp-pagi-inner a.prev').click( function (){
			// 	var first = parseInt(jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(5)').text());
			// 	var second = parseInt(jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(6)').text());
			// 	var last = parseInt(jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(7)').text());
			// 	if(first > second){
			// 		jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(6)').hide();
			// 	}
			// 	if(first == last){
			// 		jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(7)').hide();
			// 		jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(8)').hide();
			// 	}else{
			// 		jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(7)').show();
			// 		jQuery('.scomm-property-content.active .ip-fp-pagi-inner > span:eq(8)').show();
			// 	}
			// });
		}, 
		initReadMore: function(){
			// var total_height = 0;
			// jQuery('.scomm-dtails-text.addReadMore').children().each(function(){
			// 	var child_height = jQuery(this).height();
			// 	// console.log(child_height);
			// 	total_height = child_height + total_height;
			// 	if (total_height > 500) {
			// 		jQuery('.readmore-btn').fadeIn();
			// 	}else{
			// 		jQuery('.readmore-btn').fadeOut();
			// 	}
			// });


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
		}, 
		initExclusiveListings: function(){
			
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
		},
		initDoubleTapSale: function(){
			
			jQuery('#forsale-panel .scomm-property-list .scomm-prop-item a').click(function(c){
				var devW = jQuery(window).width();
				if(devW < 1200){
					c.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}
					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});
		},
		initDoubleTapRent: function(){
			
			jQuery('#forrent-panel .scomm-property-list .scomm-prop-item a').click(function(c){
				var devW = jQuery(window).width();
				if(devW < 1200){
					c.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}
					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});
		},
		initDoubleTapSold: function(){
			
			jQuery('#sold-panel .scomm-property-list .scomm-prop-item a').click(function(c){
				var devW = jQuery(window).width();
				if(devW < 1200){
					c.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}
					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});
		},
		initDoubleTapExclusive: function(){

			jQuery('#exclusive-panel .scomm-prop-item a').click(function(c){
				var devW = jQuery(window).width();
				if(devW < 1200){
					c.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}
					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});

			setTimeout(function(){
				jQuery('#exclusive-panel .lcd-el-single a').click(function(el){
					var devW = jQuery(window).width();
					if(devW < 1200){
						el.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						jQuery(this).parent().parent().parent().siblings().find('> a').removeClass('clicked_once');
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 1500);
		},
		initELPagination: function(){
			var pagiCon = jQuery('#exclusive-panel .lcd-page-num');
			var reHtml = '';
			var showPerPage = jQuery('#scomm-property-list-exclusive .scomm-prop-item').length;
			showPerPage = showPerPage / 4;
			if( showPerPage == Math.floor(showPerPage) ){
			}else{
				showPerPage++;
			}
			var totalPagination = Math.floor(showPerPage);

			for (var i = 1; i <= totalPagination; i++) {
				reHtml += '<a '+ ( ( i == 1 ) ? 'class="active"' : '' ) +'>'+i+'</a>';
			}
			pagiCon.html(reHtml);
		},
		initSetFormSource: function(){
			var $current_url = window.location.href;
			jQuery('.cf7-source-link').val($current_url);
		},
		initExclusivesShow: function(){
			// Jan 29 2021
			if(jQuery(location).attr('href').indexOf('communities/') != -1){

				// change display none from single communities
				jQuery('.exclusive-section').css('display', 'block');

				setTimeout(function() { 
				   // hide exlusive listings section if no listings
			       if( jQuery('#scomm-property-list-exclusive').text().indexOf('No Available Listings') != -1 ){
			       		jQuery('.exclusive-section').css('display','none');	
			       }
			    }, 2000);
			}
		},
	}
	jQuery(document).ready(function () {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		jQuery('p#breadcrumbs span:nth-child(2) a').attr('href', '/search-by-community/');
		jQuery('p#breadcrumbs span:nth-child(2) a > span').text('Luxury Communities');
		app.tabSelection();
		app.initPagination();
		app.initReadMore();
		app.initExclusiveListings();
		app.initDoubleTapExclusive();
		app.initDoubleTapSale();
		app.initDoubleTapRent();
		app.initDoubleTapSold();
		app.initSetFormSource();

		if (jQuery('.exclusive-section .scomm-prop-item').length == 0) {
			jQuery('.exclusive-section').hide()
		}
	});

	jQuery(window).on('load', function () {

		app.initExclusivesShow();

		
	});

})(jQuery);
