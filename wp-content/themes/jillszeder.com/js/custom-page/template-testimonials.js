/***Search Results***/



jQuery(document).ready(function(){

	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
	
	if(jQuery('body').hasClass('post-type-archive-testimonials')) {
	    var headerHeight = jQuery('.fixed-header').outerHeight();
	    var mobileHeader = jQuery('.amh-header-buttons').outerHeight();
	    var offset       = jQuery(window).width() <= 991 ? mobileHeader : headerHeight;
	    jQuery('html, body').animate(
	        {
	            scrollTop: (jQuery('#inner-page-wrapper').offset().top - offset)
	        },
	        1000
	    );
	}


	//This limit you can set after how much characters you want to show Read More.
	        var carLmt = 510;
	        // Text to show when text is collapsed
	        var readMoreTxt = "Read More";
	        // Text to show when text is expanded
	        var readLessTxt = " Read Less";


	        //Traverse all selectors with this class and manupulate HTML part to show Read More
	        console.log( 'load' );
	        jQuery(".addReadMore").each(function() {
	        	if ( jQuery(this).hasClass('loaded') === false ) {

		            var allstr = jQuery(this).text();
		            if (allstr.length > carLmt) {
		                var firstSet = allstr.substring(0, carLmt);
		                var secdHalf = allstr.substring(carLmt, allstr.length);
		                var strtoadd = firstSet + "<span class='readmoredot'>...</span><span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
		                jQuery(this).html(strtoadd);
		                jQuery(this).addClass( 'loaded' );
		            }

	        	}


	        });
	        //Read More and Read Less Click Event binding
	        // jQuery(document).on("click", ".readMore,.readLess", function() {
	        // 	if ( jQuery(this).closest(".addReadMore").hasClass('showlesscontent') ) {
	        // 		jQuery(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
	        // 	}
	        // });

	        jQuery('.readMore').click(function() {
        		jQuery(this).parent().find('span.readmoredot').css('display','none');
        		jQuery(this).parent().removeClass('showlesscontent');
        		jQuery(this).parent().addClass('showmorecontent');
			  
			});

			jQuery('.readLess').click(function() {
        		jQuery(this).parent().find('span.readmoredot').css('display','inline');
        		jQuery(this).parent().removeClass('showmorecontent');
        		jQuery(this).parent().addClass('showlesscontent');
			  
			});

});