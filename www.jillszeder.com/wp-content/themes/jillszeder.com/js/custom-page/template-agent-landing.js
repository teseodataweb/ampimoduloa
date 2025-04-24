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
			if(jQuery('body').hasClass('page-template-template-agent-landing')) {
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
			if(jQuery('body').hasClass('page-template-template-agent-landing')) {
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
		},
		initPagination: function(){
			var obj = this;

			jQuery('#al-list').easyPaginateAgentActive({
			    paginateElement: 'div.al-prop',
			    elementsPerPage: 6
			});
			jQuery('#al-list-sold').easyPaginateAgentSold({
			    paginateElement: 'div.al-prop',
			    elementsPerPage: 6
			});

			jQuery('.active-container .ip-fp-pagi-inner a').click( function(){
				obj.initDbltapActive();
			});
			jQuery('.sold-container .ip-fp-pagi-inner a').click( function(){
				obj.initDbltapSold();
			});
			jQuery('#agentEmail').val(jQuery('.agent-email-custom').attr('data-email'));
			jQuery('a.prev').html('<span class="ai-font-arrow-b-p"></span><em>Prev</em>');
			jQuery('a.next').html('<em>Next</em><span class="ai-font-arrow-b-n"></span>');
			setTimeout(function(){ 
				jQuery('.agent-listing-loader').remove();
				jQuery('.al-list').removeClass('hide');
			}, 2500);
		},
		
	}
	jQuery(document).ready( function() {

		app.initReadMoreBtn();
		app.initPagination();
		
	});
	
	jQuery(window).on('load', function(){

		jQuery('.agtd-breadcrumbs').appendTo('.ip-banner');
		app.initActivePaginationAction();
		app.initSoldPaginationAction();

	})


})(jQuery);
