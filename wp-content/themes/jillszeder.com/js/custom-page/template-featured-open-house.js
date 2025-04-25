/***Featured Listings***/

$idxb_property = {

	init : function() {
		this.idxb_properties();
		this.idxb_save_favorite();
		this.idxb_pagination();
		this.idxb_sort();
	}, 

	idxb_properties : function(){

		var num = 0;
		jQuery('.IDX-resultsCell').each( function(){
			var listing_id = ( jQuery(this).find('.IDX-field-listingID', 0) ) ? jQuery(this).find('.IDX-field-listingID .IDX-resultsText').text().trim() : false;
			var link = ( jQuery(this).find('a.IDX-resultsPhotoLink', 0).attr('href') ) ? jQuery(this).find('a.IDX-resultsPhotoLink').attr('href') : false;
			if(listing_id == 'A11288096' && link == 'https://homes.jillszeder.com/idx/details/listing/d016/A11288096/1514-Urbino-Ave-Coral-Gables-FL-33146'){
				jQuery(this).remove();
				num = num + 1;
			}
		});

		// Get total listing
		var default_number = jQuery('.IDX-resultsCount').text();
		default_number = parseInt(default_number);
		var total_num = default_number - num;


		jQuery('.fl-found').text(total_num + ' Properties Found');
			
		// Featured Custom
		var idxbContainer = jQuery('.fl-list');
		var htmlfeatured ='';
		var favorite = '';
		var page = ''
		var soldStat = '';

		setTimeout(function(){
			if(jQuery('.IDX-resultsCell').length){
				jQuery('.IDX-resultsCell').each( function(){
					var listingid = ( jQuery(this).find('.IDX-field-listingID', 0) ) ? jQuery(this).find('.IDX-field-listingID .IDX-resultsText').text() : false;
					var link = ( jQuery(this).find('a.IDX-resultsPhotoLink', 0).attr('href') ) ? jQuery(this).find('a.IDX-resultsPhotoLink').attr('href') : false;
					var img = ( jQuery(this).find('.IDX-resultsPhotoImg', 0) ) ? jQuery(this).find('.IDX-resultsPhotoImg').attr('src') : false;
					var street_number = ( jQuery(this).find('.IDX-resultsAddressNumber', 0) ) ? jQuery(this).find('.IDX-resultsAddressNumber').text() : false;
			        var street_name = ( jQuery(this).find('.IDX-resultsAddressName', 0) ) ? jQuery(this).find('.IDX-resultsAddressName').text() : false;
			        var city = ( jQuery(this).find('.IDX-resultsAddressCity', 0) ) ? jQuery(this).find('.IDX-resultsAddressCity').text() : false;
			        var state = ( jQuery(this).find('.IDX-resultsAddressState', 0) ) ? jQuery(this).find('.IDX-resultsAddressState').text() : false;
			        var state_abbrv = ( jQuery(this).find('.IDX-resultsAddressStateAbrv', 0) ) ? jQuery(this).find('.IDX-resultsAddressStateAbrv').text() : false;
			        var zip = ( jQuery(this).find('.IDX-resultsAddressZip', 0) ) ? jQuery(this).find('.IDX-resultsAddressZip').text() : false;
			        var price = ( jQuery(this).find('.IDX-field-listingPrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-listingPrice .IDX-text').text() : false;
			        var beds = ( jQuery(this).find('.IDX-field-bedrooms .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-bedrooms .IDX-resultsText').text() : false;
			        var baths = ( jQuery(this).find('.IDX-field-totalBaths .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-totalBaths .IDX-resultsText').text() : false;
			        var fbaths = ( jQuery(this).find('.IDX-field-fullBaths .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-fullBaths .IDX-resultsText').text() : false;
			        var pbaths = ( jQuery(this).find('.IDX-field-partialBaths .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-partialBaths .IDX-resultsText').text() : false;
			        

			        var sqFt = ( jQuery(this).find('.IDX-field-sqFt .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-sqFt .IDX-text').text() : false;
			        var saved_favorite = ( jQuery(this).find('.IDX-resultsSaveProperty', 0) ) ? jQuery(this).find('.IDX-resultsSaveProperty').text().trim() : false;
			        var status = ( jQuery(this).find('.IDX-field-propStatus .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-propStatus .IDX-resultsText').text().trim() : false;
			        if (status == 'Closed') {
			        	status = 'Sold'
			        }
			        var fullpatial = fbaths;
			        if(pbaths){
			        	fullpatial = fbaths +'<em> | </em>'+ pbaths;
			        }

			        if(saved_favorite == 'Unfavorite'){
			        	favorite = 'favorite';
			        }else{
			        	favorite = '';
			        }

			        var currentUrl = jQuery(location).attr('href');
			        if(currentUrl.indexOf('soldpending') !== -1){
			        	jQuery('.fl-title h1 strong.font-term').text('Recent');
			        	jQuery('.fl-title h1 span').text('Sales');
			        	jQuery( "span.breadcrumb_last").text("Recent Sales");
			        	page = 'sold';
			        	price = ( jQuery(this).find('.IDX-field-soldPrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-soldPrice .IDX-text').text() : false;
			        }else{
			        	page = 'active';
			        }

			        if(page == 'sold'){
			        	soldStat = ' | '+status;
			        }

			        htmlfeatured +=
			        '<div class="fl-prop">'+
						'<a href="'+link+'&chkpopup=true">'+
							'<div class="fl-img">'+
								'<canvas width="488" height="349" style="background-image: url('+img+');"></canvas>'+
							'</div>'+
							'<div class="fl-det">'+
								'<div class="fl-name">'+
									city + soldStat +
								'</div>'+
								'<div class="fl-add-price font-term">'+
									'<span>'+street_number+' '+street_name+'</span>  <em>|</em>  <span>'+price+'</span>'+
								'</div>'+
								'<div class="fl-bb-ex">'+
									'<div class="fl-bb">'+
										( (beds) ? '<div>'+beds+' Beds</div>' : '' ) +
										( (baths) ? '<div>'+fullpatial+' Baths</div>' : '' ) +
										( (sqFt) ? '<div>'+sqFt+' Sq.Ft.</div>' : '' ) +
									'</div>'+
									'<div class="fl-ex font-term">'+
										'<span>Explore</span>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="fl-heart '+favorite+'" data-id="'+listingid+' ">'+
								'<span class="ai-font-heart-outline"></span>'+
							'</div>'+
						'</a>'+
					'</div>';

				});
				idxbContainer.html(htmlfeatured);
			}else{
				idxbContainer.html('<p class="no-open-houses">We currently don’t have any open houses this week. Please call us if you’d like to schedule a showing or request more information on a property</p>');
				jQuery('.fl-pagination').addClass('hidden');
			}
		},1000);
		

	},
	idxb_save_favorite: function(){
		jQuery('.fl-prop .fl-heart').on('click', function( e ) {
			e.preventDefault();
			var updateBtn = '';
			var currentProperty = jQuery(this);
			//currentProperty.html('<img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/loading.gif" style="background-position: center center; width: 100%;">');
			var listingId = jQuery(this).attr('data-id').trim();
			jQuery('.IDX-resultsCell').each(function(){
				if(jQuery(this).find('.IDX-field-listingID .IDX-resultsText').text().trim() == listingId){
					idx('#IDX-SP-d016-'+listingId).trigger('click');
					updateBtn = '#IDX-SP-d016-'+listingId;
				}
			});
			
			var chkBtn = jQuery(updateBtn).parent().text().trim();
			console.log(chkBtn)
			setTimeout(function(){
				var newchkBtn = jQuery(updateBtn).parent().text().trim();
				console.log(newchkBtn)
				if(chkBtn != newchkBtn){
					if(!currentProperty.hasClass('favorite')){
						currentProperty.addClass('favorite');
					}else{
						currentProperty.removeClass('favorite');
					}
				}
				currentProperty.html('<span class="ai-font-heart-outline"></span>');
				
			}, 1000);

				
			
	   });


	},
	idxb_pagination: function(){
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
		};

		var htmlpagination = '';
		var totalpagination = jQuery('#select2-chosen-1').text();
		totalpagination = totalpagination.split('/');
		totalpagination = parseInt(totalpagination[1]);

		var getstart = getUrlParameter('start');
		var staticStart = 1;

		if(!getstart){
			getstart = staticStart;
		} else {
			getstart = parseInt(getstart);
		}

		var paginateShow = getstart;
		var ctrbtn = 0;
		var currentPage = '';
		var last = totalpagination - paginateShow;
		if(totalpagination){
			for (var i = 1; i <= totalpagination; i++) {
				if(getstart <= paginateShow + 4 && getstart <= totalpagination){
					if(ctrbtn == 0){
						currentPage = 'class="active"';
					}else{
						currentPage = '';
					}

					htmlpagination +='<a href="'+'?per=24&start='+getstart+'#fl-wrap" '+currentPage+'>'+getstart+'</a>';
					ctrbtn++;
				}
				getstart++;
			}
		}

		jQuery('.fl-page-num').html(htmlpagination);

		jQuery('.fl-pagination .fl-nav').each( function(){

			if(jQuery(this).hasClass('fl-prev')){
				if(paginateShow == 1){
					jQuery(this).hide();
				}else{
					jQuery(this).show();
					prev = paginateShow - 1;
					newLocation = location.origin + location.pathname + '?per=24&start=' + prev + '#fl-wrap' ;
					jQuery(this).attr('href', newLocation);
				}
				
			}else if(jQuery(this).hasClass('fl-next')){
				if(last < 5){
					jQuery(this).hide();
				}else{
					jQuery(this).show();
					next = paginateShow + 1;
					newLocation = location.origin + location.pathname + '?per=24&start=' + next + '#fl-wrap' ;
					jQuery(this).attr('href', newLocation);
				}
				
			}
				

		});

	},
	idxb_sort: function(){
		//jQuery( '.idxb-sort' ).change(function() {
		jQuery('select.idxb-sort').on('change',function(){
			var currentUrl = jQuery(location).attr('href');
			var valueSelected = jQuery(this).val();
			var per = GetURLParameter('per');
			var start = GetURLParameter('start');

		  	if(GetURLParameter('start') == undefined){
				newLocation = location.origin + location.pathname + '?per=' + per + '&srt=' + valueSelected ;
			}
			else{
				newLocation = location.origin + location.pathname + '?per=' + per + '&start=' + start + '&srt=' + valueSelected ;
			}

			window.location = newLocation;
		});

		var currentSort = GetURLParameter('srt');
		if(currentSort){
			jQuery('.idxb-sort option').each( function(){
				if(jQuery(this).val() == currentSort){
					jQuery(this).attr('selected', 'selected');
				}
			});
		}

		function GetURLParameter(sParam){
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++)
			{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam)
				{
					return sParameterName[1];
				}
			}
		}
	},

}
jQuery(document).ready(function(){
    
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
    jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">Sign</span> Up');
});

jQuery(window).on('load', function() {
    $idxb_property.init();
    jQuery('.fl-list .fl-prop a').aiosDoubleTap();

    jQuery('img.IDX-resultsPhotoImg').attr('alt', 'IDX Image');
	jQuery('#IDX-pagination-pagers-header').attr('aria-label', 'Header Pagination');
	jQuery('#IDX-pagination-header-next').attr('aria-label', 'Header Next');
	jQuery('#IDX-pagination-header-prev').attr('aria-label', 'Header Prev');
	jQuery('#IDX-pagination-pagers-footer').attr('aria-label', 'Footer Pagination');
	jQuery('#IDX-pagination-footer-next').attr('aria-label', 'Footer Next');
	jQuery('#IDX-pagination-footer-prev').attr('aria-label', 'Footer Prev');
	
	jQuery('#IDX-start').attr('aria-label', 'Start');
	jQuery('#IDX-pagination-pagers-header').wrap('<label for="pagination"></label>');
	jQuery('#IDX-pagination-pagers-footer').wrap('<label for="pagination"></label>');
});
 