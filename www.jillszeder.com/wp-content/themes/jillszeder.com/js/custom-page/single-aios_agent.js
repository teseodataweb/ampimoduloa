/***Single Agent***/
( function($) {

	var app = {
		initReadMoreBtn: function(){
			if(jQuery('.moreless-button').length == 0){
				jQuery('.addReadMore').css({'height': 'auto'});
			}
			jQuery('.moreless-button').click(function(e) {

				if (jQuery('.moreless-button').text() == "Read More") {
				    jQuery(this).html('<span>Read Less</span>');
				    jQuery('.addReadMore').css('height','auto');
				    jQuery('.addReadMore').css('overflow','visible');
				} else {
				    jQuery(this).html('<span>Read More</span>');
				    jQuery('.addReadMore').css('height','200px');
					jQuery('.addReadMore').css('overflow','hidden');
					
				    jQuery('html, body').animate({
				    	scrollTop: jQuery(".moreless-button").offset().top - (jQuery(window).height() / 2) - 100
				    }, 500);
				}
			});
		},
		initActiveListingOffset: function() {
			if(jQuery('body').hasClass('single-aios_agent')) {
			    var headerHeight = jQuery('.fixed-header').outerHeight();
			    var mobileHeader = jQuery('.amh-header-buttons').outerHeight();
			    var offset       = jQuery(window).width() <= 991 ? mobileHeader : headerHeight;
			    jQuery('html, body').animate(
			        {
			            scrollTop: (jQuery('#idxb-active-listing').offset().top - offset)
			        },
			        1000
			    );
			}
		},
		iniSoldListingOffset: function() {
			if(jQuery('body').hasClass('single-aios_agent')) {
			    var headerHeight = jQuery('.fixed-header').outerHeight();
			    var mobileHeader = jQuery('.amh-header-buttons').outerHeight();
			    var offset       = jQuery(window).width() <= 991 ? mobileHeader : headerHeight;
			    jQuery('html, body').animate(
			        {
			            scrollTop: (jQuery('#idxb-sold-listing').offset().top - offset)
			        },
			        1000
			    );
			}
		},
		initActivePaginationAction: function(){
			var obj_active = this;
			jQuery('.active-container .ip-fp-pagi-inner a.page').click( function(){
				obj_active.initActiveListingOffset();
			});
		},
		initSoldPaginationAction: function(){
			var obj_sold = this;
			jQuery('.sold-container .ip-fp-pagi-inner a.page').click( function(){
				obj_sold.iniSoldListingOffset();
			});
		}
		
	}
	jQuery(document).ready( function() {

		app.initReadMoreBtn();

	});
	
	jQuery(window).on('load', function(){
		app.initActivePaginationAction();
		app.initSoldPaginationAction();

	})


})(jQuery);
