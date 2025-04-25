/***New Development***/
( function($) {
	var chkClick = false;
	var app = {
		initSort: function(){
			var obj = this;
			$('#search-building-text, #areas').on('change', function(){    // 2nd (A)
			    chkClick = true;
			    obj.initGetNewConstruction(chkClick, true);
			    jQuery('.comm-list').html('<center><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/luxury-condos/images/loading.gif" style="height:70px;    margin-top: 5%;"></center>');
			});
			$('#communities').on('change', function(){    // 2nd (A)
			    window.location.href = jQuery(this).val();
			});
		},
		initGetNewConstruction: function(chkClick, onChngd){

			setTimeout(() => {

					// Manual
					html = '';

					_url = 'https://homes.jillszeder.com/i/the-roads-townhomes';
					_address = 'The Roads Townhomes';
					_img = 'https://www.jillszeder.com/wp-content/uploads/2024/01/The-Roads-Townhomes-thumbnail.jpg';
					prop_details = [];

					html = ''+
						'<div class="comm-item">' +

							'<a href="' + _url + '" title="' + _address + '">' +

								'<div class="comm-item-inner">' +

									'<div class="comm-item-photo" style="background-image: url(' + _img + ');">' +

										'<div class="comm-item-address">' + _address + '</div>' +

										'<div class="comm-item-hover-content">' +

											'<div class="comm-item-hover-content-table">' + prop_details.join('') + '</div>' +

											'<div class="comm-item-hover-bottom-content">' +

												'<div class="comm-item-hover-bottom-content-address">' + _address + '</div>' +

												'<div class="comm-item-hover-bottom-content-link-label-wrap">' +

													'<div class="comm-item-hover-bottom-content-link-label">' +

														'<img src="' + window.location.origin + '/wp-content/themes/jillszeder.com/images/communities/ip-communities-item-link-icon.png" alt="Explore">' +

														'Explore' +

													'</div>' +

												'</div>' +

											'</div>' +

										'</div>' +

									'</div>' +

								'</div>' +

							'</a>' +

						'</div>';

				jQuery('.comm-list').html(html);
				jQuery('.comm-pagination-control').hide();
			}, 1000);


			// setTimeout(function() {
			// 	var html = '';
	
			// 	jQuery("#IDX-showcaseGallery-49067 .IDX-showcaseRow>.IDX-showcaseCell").each(function(i, v){
			// 		var _url = jQuery(v).find(".IDX-showcaseContainer>a").attr("href");
			// 		var _img = jQuery(v).find(".IDX-showcaseContainer>a>img").attr("src");
			// 		var _price = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcasePrice").html();
			// 		var _beds = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseBeds").html();
			// 		var _baths = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseBaths").html();
			// 		var _address = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseAddressElement").html();
			// 		var _city = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseCityStateZip>.IDX-showcaseCity").html();
			// 		var _state = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseCityStateZip>.IDX-showcaseState").html();
			// 		var _stateAbrv = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseCityStateZip>.IDX-showcaseStateAbrv").html();
			// 		var _zipcode = jQuery(v).find(".IDX-showcaseContainer>.IDX-showcaseCityStateZip>.IDX-showcaseZipcode").html();
	
			// 		_beds = _beds.replace(/[^\d.-]/g, '');
			// 		_baths = _baths.replace(/[^\d.-]/g, '');

			// 		prop_details = [];

			// 		if(_city) {
			// 			city = '<span>Area:</span> ' + _city + '<br/>';
			// 			prop_details.push(city);
			// 		}
			// 		if(_address) {
			// 			address = '<span>Address:</span> ' + _address + '<br/>';
			// 			prop_details.push(address);
			// 		}
			// 		if(_price) {
			// 			price = '<span>Price:</span> ' + _price + '<br/>';
			// 			prop_details.push(price);
			// 		}

			// 		if(_beds) {
			// 			beds = '<span>Beds:</span> ' + _beds + '<br/>';
			// 			prop_details.push(beds);
			// 		}
	
			// 		if(_baths) {
			// 			baths ='<span>Baths:</span> ' + _baths + '<br/>';
			// 			prop_details.push(baths);
			// 		}
				
			// 		html += ''+
			// 			'<div class="comm-item">' +

			// 				'<a href="' + _url + '" title="' + _address + '">' +

			// 					'<div class="comm-item-inner">' +

			// 						'<div class="comm-item-photo" style="background-image: url(' + _img + ');">' +

			// 							'<div class="comm-item-address">' + _address + '</div>' +

			// 							'<div class="comm-item-hover-content">' +

			// 								'<div class="comm-item-hover-content-table">' + prop_details.join('') + '</div>' +

			// 								'<div class="comm-item-hover-bottom-content">' +

			// 									'<div class="comm-item-hover-bottom-content-address">' + _address + '</div>' +

			// 									'<div class="comm-item-hover-bottom-content-link-label-wrap">' +

			// 										'<div class="comm-item-hover-bottom-content-link-label">' +

			// 											'<img src="' + window.location.origin + '/wp-content/themes/jillszeder.com/images/communities/ip-communities-item-link-icon.png" alt="Explore">' +

			// 											'Explore' +

			// 										'</div>' +

			// 									'</div>' +

			// 								'</div>' +

			// 							'</div>' +

			// 						'</div>' +

			// 					'</div>' +

			// 				'</a>' +

			// 			'</div>';
	
						
			// 	});

			// 	jQuery('.comm-list').html(html);
			// 	jQuery('.comm-pagination-control').hide();

			// }, 1000); 



			// BEFORE - Based from - luxury-condos Post type

			// var obj = this;
	        // jQuery.ajax({
	        //     type: "POST",
	        //     url: ajaxurl,
	        //     data: {
	        //         action: "new_development",
	        //         building: jQuery('select#search-building-text').val(),
	        //         condo: jQuery('select#communities').val(),
	        //         area: jQuery('select#areas').val(),
	        //         page: (onChngd ? 1 : jQuery('.page-value').val()),
	        //         //results: jQuery('.lc-nav-view .results').val(),
	        //     },
	        //     success: function (response) {
	        //     	var data = jQuery.parseJSON(response);
	        //         jQuery('.comm-list').html(data.html);
	        //         jQuery('.comm-pagination-control').html(data.pagination);
	        //         if(jQuery('.comm-item').length){
	        //         	obj.initPageOf();
	        //         	if(chkClick == true){
	        //         		obj.initDbltap();
	        //         	}
	        //         }else{
	        //         	jQuery('.comm-list-page-indicator').html('<span>No New Developments Found</span>');
	        //         }

	        //     }
	        // });
		},
		initPageOf: function() {
			var page = jQuery('.page-value').val();
			var lastpage = 0;
			var total = parseInt(jQuery('.comm-item').attr('data-total'));

			lastpage = total/18;
			
			if(parseInt(lastpage) != lastpage){
				lastpage++;
				lastpage = parseInt(lastpage);
		    }

			jQuery('.comm-list-page-indicator').html('Page '+page+ ' of ' +lastpage+ ' - <span>'+total+' New Developments Found</span>');
		},
		initDbltap: function() {
			setTimeout(function(){
				jQuery('.comm-item a').click(function(c){
					var devW = jQuery(window).width();
					if(devW < 1200){
						c.preventDefault();
						if(jQuery(this).hasClass('clicked_once')){
							window.location.href = jQuery(this).attr('href');
						}
						jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
						jQuery(this).addClass('clicked_once');
					}
				});
			}, 500);
		}
		
	}
	jQuery(document).ready( function() {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		jQuery("#search-building-text").select2({
			placeholder: "Type here...",
		});
		app.initGetNewConstruction();
		app.initSort();
		//app.pagination();
        
        var commListSearchWidth = jQuery('.comm-list-search').width();
        var commListSearchLabelWidth = jQuery('.comm-list-search > span').width();
        
        jQuery('.comm-list-search .search-building').width(commListSearchWidth - (commListSearchLabelWidth + 10));

	});
	jQuery(window).on('load', function(){
		app.initDbltap();
	})
    
    jQuery(window).resize(function () {
        var commListSearchWidth = jQuery('.comm-list-search').width();
        var commListSearchLabelWidth = jQuery('.comm-list-search > span').width();
        
        jQuery('.comm-list-search .search-building').width(commListSearchWidth - (commListSearchLabelWidth + 10));
    });
})(jQuery);
