/***Recent Sales***/



$idxb_property = {



	init : function() {

		this.initCustomQSFields();

		this.idxb_properties();

		this.idxb_save_favorite();

		this.idxb_pagination();

		this.idxb_sort();

		this.idxb_doubletap();

		this.getMinMaxPerPtype();

		this.reset();

	},

	reset: function(){

		jQuery('.fl-qs .fl-qs-form .qs-dual-fields input[type="reset"]').click(function(){

			jQuery('.lp').html('<option value="">Minimum Price</option>');

			jQuery('.hp').html('<option value="">Maximum Price</option>');

		});

	}, 

	initCustomQSFields: function(){

		jQuery('.ip-qs-address, .ip-qs-mls').on('change keyup paste', function() {

		    if(jQuery('.ip-qs-address').val() != "" || jQuery('.ip-qs-mls').val() != "" ){

		    	jQuery('.ip-qs-city').attr('disabled', 'disabled');

		    	jQuery('.qs-property-type').attr('disabled', 'disabled');

		    }else{

		    	jQuery('.ip-qs-city').removeAttr('disabled');

		    	jQuery('.qs-property-type').removeAttr('disabled');

		    }

		});

	},



	idxb_properties : function(){



		// Get total listing

			jQuery('.fl-found').text(jQuery('.IDX-resultsCount').text() + ' Properties Found');

			

		// Featured Custom

		var idxbContainer = jQuery('.fl-list');

		var htmlfeatured ='';

		var favorite = '';

		var page = ''

		var soldStat = '';

		jQuery('.IDX-resultsCell').each( function(){

			var listingid = ( jQuery(this).find('.IDX-field-listingID', 0) ) ? jQuery(this).find('.IDX-field-listingID .IDX-resultsText').text() : false;

			var link = ( jQuery(this).find('a.IDX-resultsPhotoLink', 0).attr('href') ) ? jQuery(this).find('a.IDX-resultsPhotoLink').attr('href') : false;

			var imgdata = ( jQuery(this).find('.IDX-resultsPhoto', 0) ) ? jQuery(this).find('.IDX-resultsPhoto noscript').attr('data-src') : false;

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



	        if(!price && jQuery('.IDX-field-rntLsePrice').length){

	        	price = ( jQuery(this).find('.IDX-field-rntLsePrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-rntLsePrice .IDX-text').text() : false;

	        }



			imgdata = jQuery.trim(imgdata);

	        htmlfeatured +=

	        '<div class="fl-prop">'+

				'<a href="'+link+'&soldlisting=true">'+

					'<div class="fl-img">'+

						'<canvas width="488" height="349" style="background-image: url(https://imageproxy.agentimage.com/540x380/'+imgdata+');"></canvas>'+

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

		jQuery('.idxb-info-disc').text(jQuery('#IDX-resultsMLSRights').text());

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

		var getsrt = getUrlParameter('srt');

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



					htmlpagination +='<a href="'+'?per=24&start='+getstart+(getsrt?'&srt='+getsrt:'')+'#fl-wrap" '+currentPage+'>'+getstart+'</a>';

					ctrbtn++;

				}

				getstart++;

			}

		}



		jQuery('.fl-page-num').html(htmlpagination);



		jQuery('.fl-pagination .fl-nav').each( function(){



			if(jQuery(this).hasClass('fl-prev')){
				//console.log('hi' + paginateShow);
				if(paginateShow == 1){
					jQuery('.fl-pagination').hide();
					jQuery(this).hide();

				}else{

					jQuery(this).show();

					prev = paginateShow - 1;

					newLocation = location.origin + location.pathname + '?per=24&start=' + prev + (getsrt?'&srt='+getsrt:'')+'#fl-wrap' ;

					jQuery(this).attr('href', newLocation);

				}

				

			}else if(jQuery(this).hasClass('fl-next')){

				if(last < 5){

					jQuery(this).hide();

				}else{

					jQuery(this).show();

					next = paginateShow + 1;

					newLocation = location.origin + location.pathname + '?per=24&start=' + next + (getsrt?'&srt='+getsrt:'')+'#fl-wrap' ;

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

	idxb_doubletap: function(){

		jQuery('.fl-list .fl-prop a').click(function(e){

			var devW = jQuery(window).width();

			if(devW < 1200){

				e.preventDefault();

				if(jQuery(this).hasClass('clicked_once')){

					window.location.href = jQuery(this).attr('href');

				}

				jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');

				jQuery(this).addClass('clicked_once');

			}

		});

	},

	getMinMaxPerPtype: function(){

		jQuery('.qs-property-type').on('change', function(){



			jQuery('.lp').html('<option value="">Minimum Price</option>');

			jQuery('.hp').html('<option value="">Maximum Price</option>');

			var min = '';

			var max = '';

			var minprice = 0;

			var maxprice = 10000;

			if(jQuery('.qs-property-type').val() == 3 || jQuery('.qs-property-type').val() == 'lse'){

				// min



				/*for (var i = 0; i <= 10; i++) {

					min +='<option value="'+minprice+'">$'+minprice.toLocaleString()+'</option>';

					max +='<option value="'+maxprice+'">$'+maxprice.toLocaleString()+'</option>';

					minprice = minprice + 10000;

					maxprice = maxprice + 10000;

				}

				jQuery('.lp').html('<option value="">Minimum Price</option>'+min);

				jQuery('.hp').html('<option value="">Maximum Price</option>'+max);*/



				// min

					jQuery('.lp').append('<option value="0">$0</option>');

					jQuery('.lp').append('<option value="10000">$10,000</option>');

					jQuery('.lp').append('<option value="20000">$20,000</option>');

					jQuery('.lp').append('<option value="30000">$30,000</option>');

					jQuery('.lp').append('<option value="40000">$40,000</option>');

					jQuery('.lp').append('<option value="50000">$50,000</option>');

					jQuery('.lp').append('<option value="60000">$60,000</option>');

					jQuery('.lp').append('<option value="70000">$70,000</option>');

					jQuery('.lp').append('<option value="80000">$80,000</option>');

					jQuery('.lp').append('<option value="90000">$90,000</option>');



					// max

					jQuery('.hp').append('<option value="10000">$10,000</option>');

					jQuery('.hp').append('<option value="20000">$20,000</option>');

					jQuery('.hp').append('<option value="30000">$30,000</option>');

					jQuery('.hp').append('<option value="40000">$40,000</option>');

					jQuery('.hp').append('<option value="50000">$50,000</option>');

					jQuery('.hp').append('<option value="60000">$60,000</option>');

					jQuery('.hp').append('<option value="70000">$70,000</option>');

					jQuery('.hp').append('<option value="80000">$80,000</option>');

					jQuery('.hp').append('<option value="90000">$90,000</option>');

					jQuery('.hp').append('<option value="100000">$100,000</option>');

					jQuery('.hp').append('<option value="110000">$110,000</option>');

					jQuery('.hp').append('<option value="120000">$120,000</option>');

					jQuery('.hp').append('<option value="130000">$130,000</option>');

					jQuery('.hp').append('<option value="140000">$140,000</option>');

					jQuery('.hp').append('<option value="150000">$150,000</option>');

			}

			else{

				jQuery('.lp').html('<option value="">Minimum Price</option>');

				jQuery('.hp').html('<option value="">Maximum Price</option>');

				// min

				jQuery('.lp').append('<option value="150000">$150,000</option>');

				jQuery('.lp').append('<option value="200000">$200,000</option>');

				jQuery('.lp').append('<option value="250000">$250,000</option>');

				jQuery('.lp').append('<option value="300000">$300,000</option>');

				jQuery('.lp').append('<option value="350000">$350,000</option>');

				jQuery('.lp').append('<option value="400000">$400,000</option>');

				jQuery('.lp').append('<option value="450000">$450,000</option>');

				jQuery('.lp').append('<option value="500000">$500,000</option>');

				jQuery('.lp').append('<option value="550000">$550,000</option>');

				jQuery('.lp').append('<option value="600000">$600,000</option>');

				jQuery('.lp').append('<option value="650000">$650,000</option>');

				jQuery('.lp').append('<option value="700000">$700,000</option>');

				jQuery('.lp').append('<option value="750000">$750,000</option>');

				jQuery('.lp').append('<option value="800000">$800,000</option>');

				jQuery('.lp').append('<option value="850000">$850,000</option>');

				jQuery('.lp').append('<option value="900000">$900,000</option>');

				jQuery('.lp').append('<option value="950000">$950,000</option>');

				jQuery('.lp').append('<option value="1000000">$1,000,000</option>');

				jQuery('.lp').append('<option value="1250000">$1,250,000</option>');

				jQuery('.lp').append('<option value="1500000">$1,500,000</option>');

				jQuery('.lp').append('<option value="1750000">$1,750,000</option>');

				jQuery('.lp').append('<option value="2000000">$2,000,000</option>');

				jQuery('.lp').append('<option value="2250000">$2,250,000</option>');

				jQuery('.lp').append('<option value="2500000">$2,500,000</option>');

				jQuery('.lp').append('<option value="2750000">$2,750,000</option>');

				jQuery('.lp').append('<option value="3000000">$3,000,000</option>');

				jQuery('.lp').append('<option value="3250000">$3,250,000</option>');

				jQuery('.lp').append('<option value="3500000">$3,500,000</option>');

				jQuery('.lp').append('<option value="3750000">$3,750,000</option>');

				jQuery('.lp').append('<option value="4000000">$4,000,000</option>');

				jQuery('.lp').append('<option value="4250000">$4,250,000</option>');

				jQuery('.lp').append('<option value="4500000">$4,500,000</option>');

				jQuery('.lp').append('<option value="4750000">$4,750,000</option>');

				jQuery('.lp').append('<option value="5000000">$5,000,000</option>');

				jQuery('.lp').append('<option value="6000000">$6,000,000</option>');

				jQuery('.lp').append('<option value="7000000">$7,000,000</option>');

				jQuery('.lp').append('<option value="8000000">$8,000,000</option>');

				jQuery('.lp').append('<option value="9000000">$9,000,000</option>');

				jQuery('.lp').append('<option value="10000000">$10,000,000</option>');

				jQuery('.lp').append('<option value="15000000">$15,000,000</option>');

				jQuery('.lp').append('<option value="20000000">$20,000,000</option>');

				jQuery('.lp').append('<option value="25000000">$25,000,000</option>');

				jQuery('.lp').append('<option value="30000000">$30,000,000</option>');

				jQuery('.lp').append('<option value="35000000">$35,000,000</option>');

				jQuery('.lp').append('<option value="40000000">$40,000,000</option>');

				jQuery('.lp').append('<option value="45000000">$45,000,000</option>');

				jQuery('.lp').append('<option value="50000000">$50,000,000</option>');

				jQuery('.lp').append('<option value="60000000">$60,000,000</option>');

				jQuery('.lp').append('<option value="70000000">$70,000,000</option>');

				jQuery('.lp').append('<option value="80000000">$80,000,000</option>');

				jQuery('.lp').append('<option value="90000000">$90,000,000</option>');

				jQuery('.lp').append('<option value="100000000">$100,000,000</option>');



				// max

				jQuery('.hp').append('<option value="200000">$200,000</option>');

				jQuery('.hp').append('<option value="250000">$250,000</option>');

				jQuery('.hp').append('<option value="300000">$300,000</option>');

				jQuery('.hp').append('<option value="350000">$350,000</option>');

				jQuery('.hp').append('<option value="400000">$400,000</option>');

				jQuery('.hp').append('<option value="450000">$450,000</option>');

				jQuery('.hp').append('<option value="500000">$500,000</option>');

				jQuery('.hp').append('<option value="550000">$550,000</option>');

				jQuery('.hp').append('<option value="600000">$600,000</option>');

				jQuery('.hp').append('<option value="650000">$650,000</option>');

				jQuery('.hp').append('<option value="700000">$700,000</option>');

				jQuery('.hp').append('<option value="750000">$750,000</option>');

				jQuery('.hp').append('<option value="800000">$800,000</option>');

				jQuery('.hp').append('<option value="850000">$850,000</option>');

				jQuery('.hp').append('<option value="900000">$900,000</option>');

				jQuery('.hp').append('<option value="950000">$950,000</option>');

				jQuery('.hp').append('<option value="1000000">$1,000,000</option>');

				jQuery('.hp').append('<option value="1250000">$1,250,000</option>');

				jQuery('.hp').append('<option value="1500000">$1,500,000</option>');

				jQuery('.hp').append('<option value="1750000">$1,750,000</option>');

				jQuery('.hp').append('<option value="2000000">$2,000,000</option>');

				jQuery('.hp').append('<option value="2250000">$2,250,000</option>');

				jQuery('.hp').append('<option value="2500000">$2,500,000</option>');

				jQuery('.hp').append('<option value="2750000">$2,750,000</option>');

				jQuery('.hp').append('<option value="3000000">$3,000,000</option>');

				jQuery('.hp').append('<option value="3250000">$3,250,000</option>');

				jQuery('.hp').append('<option value="3500000">$3,500,000</option>');

				jQuery('.hp').append('<option value="3750000">$3,750,000</option>');

				jQuery('.hp').append('<option value="4000000">$4,000,000</option>');

				jQuery('.hp').append('<option value="4250000">$4,250,000</option>');

				jQuery('.hp').append('<option value="4500000">$4,500,000</option>');

				jQuery('.hp').append('<option value="4750000">$4,750,000</option>');

				jQuery('.hp').append('<option value="5000000">$5,000,000</option>');

				jQuery('.hp').append('<option value="6000000">$6,000,000</option>');

				jQuery('.hp').append('<option value="7000000">$7,000,000</option>');

				jQuery('.hp').append('<option value="8000000">$8,000,000</option>');

				jQuery('.hp').append('<option value="9000000">$9,000,000</option>');

				jQuery('.hp').append('<option value="10000000">$10,000,000</option>');

				jQuery('.hp').append('<option value="15000000">$15,000,000</option>');

				jQuery('.hp').append('<option value="20000000">$20,000,000</option>');

				jQuery('.hp').append('<option value="25000000">$25,000,000</option>');

				jQuery('.hp').append('<option value="30000000">$30,000,000</option>');

				jQuery('.hp').append('<option value="35000000">$35,000,000</option>');

				jQuery('.hp').append('<option value="40000000">$40,000,000</option>');

				jQuery('.hp').append('<option value="45000000">$45,000,000</option>');

				jQuery('.hp').append('<option value="50000000">$50,000,000</option>');

				jQuery('.hp').append('<option value="60000000">$60,000,000</option>');

				jQuery('.hp').append('<option value="70000000">$70,000,000</option>');

				jQuery('.hp').append('<option value="80000000">$80,000,000</option>');

				jQuery('.hp').append('<option value="90000000">$90,000,000</option>');

				jQuery('.hp').append('<option value="100000000">$100,000,000</option>');

				jQuery('.hp').append('<option value="110000000">$110,000,000</option>');

				jQuery('.hp').append('<option value="120000000">$120,000,000</option>');

				jQuery('.hp').append('<option value="130000000">$130,000,000</option>');

				jQuery('.hp').append('<option value="140000000">$140,000,000</option>');

				jQuery('.hp').append('<option value="150000000">$150,000,000</option>');

			}

		});			

	}



}

jQuery(document).ready(function(){

	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

	$idxb_property.init();



});



jQuery(window).on('load', function() {

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

