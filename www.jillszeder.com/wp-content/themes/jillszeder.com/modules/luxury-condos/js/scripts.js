( function($) {
	var app = {
		initListingForm: function(){
			jQuery('#hidden-url').val(jQuery(location).attr('href'));
			jQuery('#hidden-url2').val(jQuery(location).attr('href'));
			jQuery('#hidden-url3').val(jQuery(location).attr('href'));
		},
	}
	jQuery(document).ready( function() {

		app.initListingForm();	
		if( jQuery('.exclusive-section .lcd-prop').length == 0){
			jQuery('.exclusive-section').hide()
		}

	});
	jQuery(window).on('load', function(){

	})
})(jQuery);
