( function($) {

	var app = {

		initIDXBAjax: function(){

			var obj =  this;

			jQuery.ajax({

	            type: "POST",

	            url: ajax_object.ajax_url,

	            data: {

	                action: "idxb_get_colisting_agents",

	                listingId: jQuery('#IDX-detailsTopActions a').attr('data-listingid'),

	                status: jQuery('#IDX-similar-listings-data').attr('data-idxstatus')

	            },

	            success: function (response) {

	            	var data = jQuery.parseJSON(response);

	            	console.log('AJAX IS SUCCESSFULLY EXECUTED');
	            	// console.log(data);

	            	var currentUrl = jQuery(location).attr('href');

	                //if( currentUrl.indexOf(listingId) != -1){

	                	if(data.html){

	                		jQuery('.agents-slide ul').html(data.html);

	                		obj.otherSlider();

	                	}if(data.html == "<h2>No Agent found</h2>"){

	                		jQuery('.listd-agents').hide();

	                	} 

	                //} 

	            }

	        });

		},

		otherSlider: function(){

			// jQuery('.agents-slide ul').slick({

			// 	infinite: true,

			// 	slidesToShow: 2,

			// 	slidesToScroll: 1,

			// 	arrows: false,

			// 	autoplay: true,

			// 	autoplaySpeed: 5000,

			// 	responsive: [

			// 		{

			// 			breakpoint: 481,

			// 			settings: {

			// 				slidesToShow: 1,

			// 				slidesToScroll: 1

			// 			}

			// 		}

			// 	]

			// });

			jQuery(window).on('load resize orientationchange', function() {
				setTimeout(()=>{
					jQuery('.agents-slide ul').each(function(){
						var $carousel = jQuery(this);
						/* Initializes a slick carousel only on mobile screens */
						// slick on mobile
						if (jQuery(window).width() < 481) {
							if ($carousel.hasClass('slick-initialized')) {
								$carousel.slick('unslick');
							}
						}
						else{
							if (!$carousel.hasClass('slick-initialized')) {
								$carousel.slick({
									infinite: true,
	
									slidesToShow: 2,
	
									slidesToScroll: 1,
	
									arrows: false,
	
									autoplay: false,
	
									autoplaySpeed: 5000,
								});
							}
						}
					});
				},1000);
				
			});

		}

	}

	jQuery(document).ready( function() {



		app.initIDXBAjax();	



	});

	jQuery(window).on('load', function(){



	})

})(jQuery);

