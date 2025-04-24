/***Contact***/
( function($) {
	var app = {
		initGoogleMap1: function(){
			var baseUrl = location.origin;
			var map1;
			map1 = new google.maps.Map(document.getElementById('map1'), {
                zoom: 16,
                center: new google.maps.LatLng(25.733810, -80.258730),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            });
            var markerIcon = {
				url: baseUrl+'/wp-content/themes/jillszeder.com/images/contact/ip-contact-map-marker.png',
				//scaledSize: new google.maps.Size(80, 80),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32,65),
				labelOrigin: new google.maps.Point(25,80)
			};

		    var selected_marker = new google.maps.Marker({
		        position: new google.maps.LatLng(25.733810, -80.258730),
		        map: map1,
		        icon: markerIcon,
		        label: {
				    text:'CORAL GABLES OFFICE',
				    color: "#1b666d",
				    fontSize: "24px",
				    fontWeight: "bold"
				}
		    });	

		 //    var marker = new google.maps.Marker({
			//     position: myLatLng,
			//     map: map,
			//     icon: iconBase + 'parking_lot_maps.png'
			// })
		},
		initGoogleMap2: function(){
			var baseUrl = location.origin;
			var map1;
			map1 = new google.maps.Map(document.getElementById('map2'), {
                zoom: 16,
                center: new google.maps.LatLng(25.791660, -80.137970),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            });
            var markerIcon = {
				url: baseUrl+'/wp-content/themes/jillszeder.com/images/contact/ip-contact-map-marker.png',
				//scaledSize: new google.maps.Size(80, 80),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(32,65),
				labelOrigin: new google.maps.Point(25,80)
			};

		    var selected_marker = new google.maps.Marker({
		        position: new google.maps.LatLng(25.791660, -80.137970),
		        map: map1,
		        icon: markerIcon,
		        label: {
				    text:'MIAMI BEACH OFFICE',
				    color: "#1b666d",
				    fontSize: "24px",
				    fontWeight: "bold"
				}
		    });	

		 //    var marker = new google.maps.Marker({
			//     position: myLatLng,
			//     map: map,
			//     icon: iconBase + 'parking_lot_maps.png'
			// })
		}
	}
	jQuery(document).ready( function() {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		//jQuery('#contact-subscribe input').click()
		// app.initGoogleMap1();
		// app.initGoogleMap2();

		if (jQuery('.contact-subscribe .wpcf7-list-item.first input[type=checkbox]').attr('checked')){
		    jQuery('.contact-subscribe .wpcf7-list-item.first input[type=checkbox]').val('Yes');
		    jQuery('.contact-subscribe .wpcf7-list-item.last input[type=checkbox]').removeAttr('checked');
		}else{
			jQuery('.contact-subscribe .wpcf7-list-item.last input[type=checkbox]').attr('checked','checked');
		}

		jQuery(".contact-subscribe .wpcf7-list-item.first input[type=checkbox]").change(function() {
		    if(this.checked) {
		       	jQuery('.contact-subscribe .wpcf7-list-item.last input[type=checkbox]').removeAttr('checked'); 
		    }else{
		    	jQuery('.contact-subscribe .wpcf7-list-item.first input[type=checkbox]').removeAttr('checked');
		    	jQuery('.contact-subscribe .wpcf7-list-item.last input[type=checkbox]').val('No');
		    	jQuery('.contact-subscribe .wpcf7-list-item.last input[type=checkbox]').attr('checked','checked');
			}
		});

		var wpcf7Form = document.querySelector( '#wpcf7-f1494-o1' );

        // wpcf7Form.addEventListener( 'wpcf7submit', function( event ) {
        //     var _checkOutput = jQuery('.wpcf7-response-output').html()
      
        //     if(!_checkOutput){
        //         jQuery('.contact-form-disclaimer').addClass('output-active');
        //     }
        // }, false );

		$(".contact-checkbox-container.contact-agree input[type=checkbox]").val('Yes');
		$(".contact-checkbox-container.contact-agree .wpcf7-list-item-label").html('By checking this box, I consent to receive text messages related to information requests and showing requests from The Jills Zeder Group. You can reply "STOP" at any time to opt-out. Message and data rates may apply. Message frequency may vary. Text "HELP" to (786) 472-4091 for assistance. For more information, please visit our <a href="https://www.jillszeder.com/privacy-policy/">Privacy Policy</a> and <a href="https://www.jillszeder.com/sms-terms-conditions/">SMS Terms &amp; Conditions</a> ');

	});
	jQuery(window).on('load', function(){

	})
})(jQuery);
