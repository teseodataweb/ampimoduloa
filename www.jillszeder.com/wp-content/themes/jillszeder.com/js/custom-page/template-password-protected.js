/***Contact***/
( function($) {
	var app = {
		formAccordion: function(){
			jQuery('.accordion-trigger').click(function(){
				jQuery(this).toggleClass('open');
				jQuery('.content-accordion').toggleClass('open');
			})
		},
		password:function(){
			jQuery('.ip-user-login .form-button input').click(function(){

				var getUrlParameter = function getUrlParameter(sParam) {
				    var sPageURL = window.location.search.substring(1),
				        sURLVariables = sPageURL.split('&'),
				        sParameterName,
				        i;

				    for (i = 0; i < sURLVariables.length; i++) {
				        sParameterName = sURLVariables[i].split('=');

				        if (sParameterName[0] === sParam) {
				            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
				        }
				    }
				    return false;
				};


				var main_password = 'Citadel2022';
				var get_field_password = jQuery('input#pwd').val();
				var get_url_redirection = getUrlParameter('url');


				if (main_password == get_field_password) {
					window.location.href = get_url_redirection;
				}else{
					jQuery('.error-holder').html('<p class="text-danger" style="font-size: 14px; text-align:center;">Invalid Password</p>');
				}
			});
		}
	}
	jQuery(document).ready( function() {
		app.formAccordion();
		app.password();

	});
	jQuery(window).on('load', function(){

	})
})(jQuery);
