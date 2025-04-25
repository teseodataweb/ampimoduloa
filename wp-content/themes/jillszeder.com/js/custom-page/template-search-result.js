/*Search Results***/

( function($) {

	var app = {
		init_GetUrlParameter: function(sParam){
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
		},


		idxb_properties : function(){
			var obj = this;
			var pro_subtype = obj.init_GetUrlParameter('a_propSubType%5B%5D');

			var idxbContainer = jQuery('.sres-list');

			var htmlSres ='';

			var favorite = '';

			var soldStat = '';

			jQuery('.IDX-resultsCell').each( function(e){
				var subdivision_name = "";
				var listingid = ( jQuery(this).find('.IDX-field-listingID', 0) ) ? jQuery(this).find('.IDX-field-listingID .IDX-resultsText').text() : false;

				var link = ( jQuery(this).find('a.IDX-resultsPhotoLink', 0).attr('href') ) ? jQuery(this).find('a.IDX-resultsPhotoLink').attr('href') : false;

				var imgdata = ( jQuery(this).find('.IDX-resultsPhoto', 0) ) ? jQuery(this).find('.IDX-resultsPhoto noscript').attr('data-src') : false;

				var street_number = ( jQuery(this).find('.IDX-resultsAddressNumber', 0) ) ? jQuery(this).find('.IDX-resultsAddressNumber').text() : false;

		        var street_name = ( jQuery(this).find('.IDX-resultsAddressName', 0) ) ? jQuery(this).find('.IDX-resultsAddressName').text() : false;

		        var condo_unit = ( jQuery(this).find('.IDX-resultsAddressUnitNumber', 0) ) ? jQuery(this).find('.IDX-resultsAddressUnitNumber').text() : false;

		        var city = ( jQuery(this).find('.IDX-resultsAddressCity', 0) ) ? jQuery(this).find('.IDX-resultsAddressCity').text() : false;

		        var state = ( jQuery(this).find('.IDX-resultsAddressState', 0) ) ? jQuery(this).find('.IDX-resultsAddressState').text() : false;

		        var state_abbrv = ( jQuery(this).find('.IDX-resultsAddressStateAbrv', 0) ) ? jQuery(this).find('.IDX-resultsAddressStateAbrv').text() : false;

		        var zip = ( jQuery(this).find('.IDX-resultsAddressZip', 0) ) ? jQuery(this).find('.IDX-resultsAddressZip').text() : false;

		        var price = ( jQuery(this).find('.IDX-field-listingPrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-listingPrice .IDX-text').text() : false;
		        //var price = ( jQuery(this).attr('data-price', 0) ) ? jQuery(this).attr('data-price') : false;

		        var beds = ( jQuery(this).find('.IDX-field-bedrooms .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-bedrooms .IDX-resultsText').text() : false;

		        var baths = ( jQuery(this).find('.IDX-field-totalBaths .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-totalBaths .IDX-resultsText').text() : false;

		        var sqFt = ( jQuery(this).find('.IDX-field-sqFt .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-sqFt .IDX-text').text() : false;

		        var saved_favorite = ( jQuery(this).find('.IDX-resultsSaveProperty', 0) ) ? jQuery(this).find('.IDX-resultsSaveProperty').text().trim() : false;

		        var status = ( jQuery(this).find('.IDX-field-propStatus .IDX-resultsText', 0) ) ? jQuery(this).find('.IDX-field-propStatus .IDX-resultsText').text().trim() : false;

		        if(location.href.indexOf('a_propSubType%5B%5D=Condominium') != -1){
		        	var subdivision_name = ( jQuery(this).find('.IDX-field-subdivision', 0) ) ? jQuery(this).find('.IDX-field-subdivision .IDX-resultsText').text() : false;
		        }

		        if(saved_favorite == 'Unfavorite'){

		        	favorite = 'favorite';

		        }else{

		        	favorite = '';

		        }

		        if(!price){

		        	price = ( jQuery(this).find('.IDX-field-soldPrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-soldPrice .IDX-text').text() : false;

		        }
		        if(!price){
		        	price = ( jQuery(this).find('.IDX-field-rntLsePrice .IDX-text', 0) ) ? jQuery(this).find('.IDX-field-rntLsePrice .IDX-text').text() : false;
		        }

		        if(baths){
		        	baths = baths + ' Baths';
		        }

		        if(beds){
		        	beds = beds + ' Beds';
		        }

		        if(sqFt){
		        	sqFt = sqFt + ' Sq. Ft.';
		        }

		         if(listingid == 'A11049206'){
	        		imgdata= 'https://s3.amazonaws.com/clientphotos.idxbroker.com/listings/client_39893/3b7233e58e2341c4fc659375719d1e081644441764';
	        	}


		        imgdata = jQuery.trim(imgdata);
				htmlSres +=

				'<div class="sres-prop">'+

					'<a href="'+link+'&searchresult=true&chkpopup=true">'+

						'<div class="sres-img">'+

							'<canvas width="488" height="349" style="background-image: url(https://imageproxy.saturn.forge99.com/640x480/'+imgdata+');"></canvas>'+

						'</div>'+

						'<div class="sres-det">'+

							'<div class="sres-name">'+

								city +

							'</div>'+

							'<div class="sres-add-price font-term">'+

								'<span>'+street_number+' '+street_name+' '+ ( (condo_unit) ? '#'+ condo_unit : '' ) +'</span> '+ ( ( subdivision_name ) ? '  <em>|</em>  <span>'+subdivision_name+'</span>' : '' ) +'  <em>|</em>  <span>'+price+'</span>'+

							'</div>'+

							'<div class="sres-bb-ex">'+

								'<div class="sres-bb">'+

									'<div>'+beds+'</div>'+

									'<div>'+baths+'</div>'+

									'<div>'+sqFt+'</div>'+

								'</div>'+

								'<div class="sres-ex font-term">'+

									'<span>Explore</span>'+

								'</div>'+

							'</div>'+

						'</div>'+

						'<div class="sres-heart '+favorite+'" data-id="'+listingid+' ">'+

							'<span class="ai-font-heart-outline"></span>'+

						'</div>'+

					'</a>'+

				'</div>';



			});

			

			idxbContainer.html(htmlSres);
			var n = jQuery('.sres-prop').length;
			if(n == 0){
				idxbContainer.html('<p style="color:#ffff" id="noresultsfound">No Results Found<p>');
			}

			jQuery('.idxb-info-disc').text(jQuery('#IDX-resultsMLSRights').text());

		},

		idxb_save_favorite: function(){

			jQuery('.sres-prop .sres-heart').on('click', function( e ) {

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

		idxb_remove_param: function (sParam)

		{

		    var url = window.location.href.split('?')[0]+'?';

		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),

		        sURLVariables = sPageURL.split('&'),

		        sParameterName,

		        i;

		 

		    for (i = 0; i < sURLVariables.length; i++) {

		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] != sParam) {

		            url = url + sParameterName[0] + '=' + sParameterName[1] + '&'

		        }

		    }

		    return url.substring(0,url.length-1);

		},

		idxb_pagination: function(){

			$obj = this;



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
			var btnPagi = $obj.idxb_remove_param('start');

			if(btnPagi.indexOf('per') != -1){

			}else{

				btnPagi = btnPagi + '&per=28';

			}

			btnPagi = btnPagi.replace('#currentview','');

			if(totalpagination > 1){

				for (var i = 1; i <= totalpagination; i++) {

					if(getstart <= paginateShow + 4 && getstart <= totalpagination){

						if(ctrbtn == 0){

							currentPage = 'class="active"';

						}else{

							currentPage = '';

						}

						htmlpagination +='<a href="'+btnPagi+'&start='+getstart+'#currentview" '+currentPage+'>'+getstart+'</a>';

						ctrbtn++;

					}

					getstart++;

				}

			}



			jQuery('.sres-page-num').html(htmlpagination);



			jQuery('.sres-pagination .sres-nav').each( function(){



				if(jQuery(this).hasClass('fl-prev')){

					if(paginateShow == 1){

						jQuery(this).hide();

					}else{

						jQuery(this).show();

						prev = paginateShow - 1;

						newLocation = btnPagi + '&start=' + prev + '#currentview';

						jQuery(this).attr('href', newLocation);

					}

					

				}else if(jQuery(this).hasClass('fl-next')){

					if(last < 5){

						jQuery(this).hide();

					}else{

						jQuery(this).show();

						next = paginateShow + 1;

						newLocation = btnPagi + '&start=' + next +'#currentview';

						jQuery(this).attr('href', newLocation);

					}

					

				}

					



			});



		},
		setCookie: function () {
			jQuery('.sres-list').click( function () {
				document.cookie = 'lastbreadcrumbs='+window.location.href+'; path=/'; // setting cookie
			});
		},
		idxb_doubletap: function(){
			jQuery('.sres-list .sres-prop a').click(function(e){
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
		}

	}

	jQuery(document).ready( function() {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		jQuery('.custom-breadcrumbs').appendTo('.listd-slide');

		app.idxb_properties();
		app.idxb_save_favorite();
		app.idxb_remove_param();
		app.idxb_pagination();
		app.idxb_doubletap();
		app.setCookie();

		jQuery('.IDX-resultsCell').each( function(e){

	    	var city = ( jQuery(this).find('.IDX-resultsAddressCity', 0) ) ? jQuery(this).find('.IDX-resultsAddressCity').text() : false;

	   		if( e == 0){

	        	//jQuery('<span>'+city+'</span>').appendTo(jQuery('.sres-title h1'));

	        }

	   	});



	   	if(window.location.href.indexOf('start=') > -1){

	        jQuery('.sres-top').attr('id', 'currentview');

	    }

	    var _location = location.href;
            console.log(_location);
            if (_location.indexOf('/idx/results/listings') > -1) { 
			console.log('checker');
                jQuery('html, body').animate({
                    scrollTop: jQuery("#sres-wrap").offset().top - 100
                }, 1700);

            }

        jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">Sign</span> Up');



	});

	

	jQuery(window).on('load', function(){

	});





})(jQuery);

