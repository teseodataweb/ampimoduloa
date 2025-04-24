function aios_listing_map( address, infobox, zoom, map_type ){
	lat_lng= '';
	zoom = ( zoom )?zoom:5;
	map_type= ( map_type )?map_type:1;
	geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address': address }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var sel_map_type = google.maps.MapTypeId.ROADMAP;
			switch( map_type ){
				case '1':
					sel_map_type = google.maps.MapTypeId.ROADMAP;
				break;
				case '2':
					sel_map_type = google.maps.MapTypeId.SATELLITE;
				break;
				case '3':
					sel_map_type = google.maps.MapTypeId.HYBRID;
				break;
				case '4':
					sel_map_type = google.maps.MapTypeId.TERRAIN;
				break;
				default:
					sel_map_type = google.maps.MapTypeId.ROADMAP;
				break;
			}
			lat_lng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng() );
			map_options = {
				zoom: parseInt( zoom ),
				center: lat_lng,
				mapTypeId: sel_map_type
			}
			map = new google.maps.Map(document.getElementById('listing-map-canvas'), map_options);
			
			if( map_type == 5 ){
				//panoramic street view
				panorama = new google.maps.StreetViewPanorama(
					document.getElementById('listing-map-canvas'), {
						position: lat_lng,
						pov: {
						heading: 34,
						pitch: 10
						}
					});
				map.setStreetView(panorama);
			}
				//normal map
				marker = new google.maps.Marker({
					position: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
					map: map,
					title: 'marker'
				});

				infowindow = new google.maps.InfoWindow({
					content: infobox
				});

				google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
				});
			
		} else {
		console.log("Geocode was not successful for the following reason: " + status);
		}
	});
}

function aios_listing_map_leaflet() {

}

function aios_listing_change_view(){
	/** adjust margin */
	jQuery('.grid li:nth-child(3n)').next().addClass('re-margin')
	
	/** list */
	jQuery('.list-bttn').click(function(){		
		jQuery(this).addClass('active');
		jQuery('.grid-bttn').removeClass('active');
		jQuery('.tabled-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeIn();
		jQuery('.grid').stop(true).fadeOut();
		jQuery('.list-wrapper').stop(true).fadeOut();
		return false;

	})

	/** grid */
	jQuery('.grid-bttn').click(function(){
		jQuery(this).addClass('active');
		jQuery('.list-bttn').removeClass('active');
		jQuery('.tabled-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeOut();
		jQuery('.grid').stop(true).fadeIn();
		jQuery('.list-wrapper').stop(true).fadeOut();
		if(jQuery(window).width() > 991){

			jQuery(".grid-property-content").aiosListingsChainHeight({refreshDelay:0});
			jQuery(".grid-property-others").aiosListingsChainHeight({refreshDelay:0});
		}
		return false;
	})

	/** tabled */
	jQuery('.tabled-bttn').click(function(){
		jQuery(this).addClass('active');
		jQuery('.list-bttn').removeClass('active');
		jQuery('.grid-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeOut();
		jQuery('.grid').stop(true).fadeOut();
		jQuery('.list-wrapper').stop(true).fadeIn();
		return false;
	})
}

function aios_listing_slideshow( ){
	jQuery('.photo-slideshow').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		asNavFor: '.pop-gallery',
		focusOnSelect: true
	});

	jQuery('.pop-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		fade: true,
		asNavFor: '.photo-slideshow', 
		dots: false,
		arrows: true,
	});			

	jQuery('.photo-list a').click(function(e){
		e.preventDefault();
		jQuery('.pop-gallery-wrap').css({
			"top": "0"
		});
		jQuery('.pop-container').css({
			"top": "50%"
		})
		jQuery('.pop-gallery-wrap').animate({
			opacity: 1
		})
	});

	jQuery('.close-pop, .pop-outside').click(function(e){
		e.preventDefault();
		jQuery('.pop-gallery-wrap').css({
			"top": "-100%"
		});
		jQuery('.pop-container').css({
			"top": "0"
		})
		jQuery('.pop-gallery-wrap').animate({
			opacity: 0
		})
	});
}	

function aios_listing_popup(){
	jQuery('.mortage-calculator-bttn, .requ-info, .sc-showing').click(function(e){
		e.preventDefault();
		jQuery('.' + jQuery(this).data('popup')).fadeIn();
	})

	jQuery('.close').click(function(e){
		jQuery('.' + jQuery(this).data('class')).fadeOut();
	});
}

function aios_listing_scroll_by_height(){
	innerHeight = jQuery(window).innerHeight()
	if( innerHeight < 768){
		jQuery('.scroll-wrap ').addClass('scroll-parent')
	} else {
		jQuery('.scroll-wrap ').removeClass('scroll-parent')
	}
}

function aios_listing_fetch_sold( ){
	jQuery('.listing-item').click( function( ){
		jQuery('#pop-light').find('.popup-holder').html('').css('opacity',0);
		jQuery('#pop-light').prepend('<div class="loading"></div>');
		listing_id = jQuery(this).data('listing-id');
		jQuery.post(
			shared_var.ajax_url, 
			{
				'action': 'sold_popup',
				'data':   { id: listing_id }
			}, 
			function(response){
				jQuery('#pop-light .popup-holder').html(response).css('opacity',1);
				jQuery('.loading').remove();

				aios_listing_slideshow();
			}
		);
	} );	

	/** popsold */
	jQuery('.pop-sold').click(function(){
		jQuery('.property-pop').fadeIn();
	});
	jQuery('.close-pop, .pop-bg').click(function(){
		jQuery('.property-pop').fadeOut();
	});
} 

function aios_listing_tab_order( default_view ){

	/** List */
	if( default_view == 'List' ){
		jQuery('.list-bttn').addClass('active');
		jQuery('.grid-bttn').removeClass('active');
		jQuery('.tabled-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeIn();
		jQuery('.grid').stop(true).fadeOut();
		jQuery('.list-wrapper').stop(true).fadeOut();

	}

	/** grid */
	else if( default_view == 'Grid' ){
		jQuery('.grid-bttn').addClass('active');
		jQuery('.list-bttn').removeClass('active');
		jQuery('.tabled-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeOut();
		jQuery('.grid').stop(true).fadeIn();
		jQuery('.list-wrapper').stop(true).fadeOut();


	}	

	/** tabled */
	else if( default_view == 'Table' ){	
		jQuery('.tabled-bttn').addClass('active');
		jQuery('.list-bttn').removeClass('active');
		jQuery('.grid-bttn').removeClass('active');

		jQuery('.list').stop(true).fadeOut();
		jQuery('.grid').stop(true).fadeOut();
		jQuery('.list-wrapper').stop(true).fadeIn();
	}
}

function aios_listing_sorting( ){
	jQuery(".aios-listings-sorter").change( function(){
		if( jQuery(".aios-listings-sorter").val() != '' ) {
			window.location.href = jQuery(this).val() + '&view=' + jQuery('.sort-left').find('.active').data('view');	
		}			
	});

	jQuery('.page-nation a').click(function(){
		view = '';
		
		to_replace = ['&view=Table' ,'&view=Grid', '&view=List', '?view=Table', '?view=Grid', '?view=List'];
		anchor = jQuery(this).attr('href').replace( '#038;', '&' );
		for( i=0;i<6;i++){
			anchor = anchor.replace( to_replace[i], '' );
		}

		if( anchor.indexOf("?") >= 0 ){
			view = '&view=';
		} else {
			view = '?view=';
		}

		jQuery(this).attr('href', anchor + view + jQuery('.sort-left').find('.active').data('view') );
	
		return true;
	});
	
}

function aios_listing_form_defaults( address ){
	sched = "Please Schedule me a Showing of " + address + "\n\n" + jQuery(location).attr('href');
	req = "Please send me more information of " + address + "\n\n" + jQuery(location).attr('href');;
	jQuery('.popup-wrap-schedule>.schedule-showing .message textarea').val(sched);
	jQuery('.popup-wrap-request>.request-more-info .message textarea').val(req);
}

/** Detach popup on ready */
function single_addition(){
	jQuery('#pop-light').prependTo('body')
	jQuery('.pop-wrap').prependTo('body')
	jQuery('.pop-gallery-wrap').prependTo('body')

	/** close popup when you click outside the white area. */
	jQuery('.pop-outside').click(function(){
		jQuery('.pop-wrap').fadeOut();
	})
}

function aios_listing_map_alternative( _maplat, _maplon, zoom = 17 ) {
	if ( _maplat == '' && _maplon == '' ) {
		console.log( 'Set the latitude and longitude of property.' );
	} else {
		var _attribution    = '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
			_mapStyle       = 'https://api.maptiler.com/maps/streets/style.json?key=3i8dcrACEAmtPrc6lzeW';
			coor  			= [ _maplat, _maplon ];

		/** Initialize Map */
		var mapid = L.map( 'listing-map-canvas' ).setView( coor, zoom );

		/** Create marker */
		var marker = L.marker( coor, { 
			draggable: true, 
			riseOnHover:true, 
			riseOffset: 500 
		} ).addTo( mapid );

		/** Add map data */
		L.mapboxGL( {
			attribution: _attribution,
			accessToken: 'not-needed',
			style: _mapStyle
		} ).addTo( mapid );
	}
}