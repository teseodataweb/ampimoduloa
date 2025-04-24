( function($) {
	var app = {
		initIDXBAjax: function(){

			console.log(ajax_object.ajax_url);
			jQuery.ajax({
	            type: "POST",
	            url: ajax_object.ajax_url,
	            data: {
	                action: "ihf_custom_fields",
	                listingNumber: jQuery('#IDX-detailsTopActions a').attr('data-listingid')
	            },
	            success: function (response) {
	            	var data = jQuery.parseJSON(response);

	                if(jQuery('#IDX-detailsTopActions a').attr('data-listingid') == data.listingNumber){

	                	if(data.video_link){
	                		//jQuery('#ihf-cf-video').removeClass('hide');

	                		//https://www.youtube.com/watch?v=QH2-TGUlwu4&feature=youtu.be
							
							VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
	                		jQuery('.video-section').attr('data-video-url', data.video_link);

	                		// jQuery('.video-section').append('<iframe width="650" height="315" src="https://www.youtube.com/embed/'+data.video_link.match(VID_REGEX)[1]+'"></iframe>');

	                	} 
                		/*printable*/
                		printable = '';
                		if ( data.printable_digital ) {
                			printable = data.printable_digital;
                		} else if ( data.printable_pdf ) {
                			printable = data.printable_pdf;
                		}
                		
                		if ( printable ) {
                			link = '<a href="'+printable+'" target="_blank"><span>Printable Flyer</span></a>';
                			jQuery('.det-vtour').append(link);
                		}
	                }
	                
	            }
	        });
		},
	}
	jQuery(document).ready( function() {

		app.initIDXBAjax();	

	});
	jQuery(window).on('load', function(){

	})
})(jQuery);
