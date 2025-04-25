/***IDXB Pop UP***/
( function($) {
	var app = {
		idxb_signup : function(){
			console.log('testme1');
			jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">User </span>Signup');
			jQuery('#IDX-registrationSignup > p').text('To create an account, fill out the form');
			jQuery('#IDX-submitBtn').text('Sign Up');
			jQuery('<span>Have an account? </span>').insertBefore(jQuery('#IDX-toggleLogIn'));

			jQuery('<span>Need an account? </span>').insertBefore(jQuery('#IDX-toggleSignUp'));
		},
		init_action: function () {
			jQuery( '#IDX-toggleLogIn' ).on( 'click', function() {
				jQuery('#ui-dialog-title-IDX-registration').bind('DOMSubtreeModified', function(){
					if(jQuery('#ui-dialog-title-IDX-registration').text() == 'Log in'){
						jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">Existing </span>Users');
						jQuery('#IDX-submitBtn').text('Sign In');
						jQuery('#IDX-toggleSignUp').text('Register Here');
					}
					
				});
			});
			jQuery( '#IDX-toggleSignUp' ).on( 'click', function() {
				jQuery('#ui-dialog-title-IDX-registration').bind('DOMSubtreeModified', function(){
					if(jQuery('#ui-dialog-title-IDX-registration').text() == 'Sign Up'){
					  	jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">User </span>Signup');
						jQuery('#IDX-registrationSignup > p').text('To create an account, fill out the form');
						jQuery('#IDX-submitBtn').text('Sign Up');
					}
				});
			});
		}

	}
	jQuery(document).ready( function() {
		app.idxb_signup();
		app.init_action();
	});
	jQuery(window).on('load', function(){

	})
})(jQuery);
