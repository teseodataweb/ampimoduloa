/***Agent Details***/
( function($) {

	var app = {
		initShowListingAgent: function(){
			// var obj = this;
			// var ids;
			// jQuery('.listing-agent-lists').each( function() {
			// 	if(jQuery('#IDX-detailsActionSave a').attr('data-listingid') == jQuery(this).attr('data-title')){
			// 		ids = jQuery(this).find('span').text();
			// 	}
			// });
			// if(ids){
			// 	ids = ids.split(",");
			// 	jQuery('.agents-slide li').each( function(){
			// 		if(jQuery.inArray(jQuery(this).attr('data-id'), ids) != -1) {
			// 		    jQuery(this).removeClass('hide');
			// 		}else{
			// 			jQuery(this).remove();
			// 		}
			// 	});
			// 	obj.otherSlider();
			// }else{
			// 	jQuery('.listd-agents').hide();
			// }
		},
		getCookie: function (cname) { // getting cookie
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
				for(var i = 0; i <ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
			return "";
		},
		fixBreadcrumbs: function(){
			var obj = this;
			var lastresult = obj.getCookie('lastbreadcrumbs');

			var url = window.location.href;
			if(url.includes('featured')){
			  	jQuery('<span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="https://jillszeder.idxbroker.com/idx/featured?per=24">Featured Listings</a></span> > ').insertBefore(jQuery('.breadcrumb_last'));
			}
			else if(url.includes('soldlisting')){
			  	jQuery('<span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="https://jillszeder.idxbroker.com/idx/soldpending?per=24">Recent Sales</a></span> > ').insertBefore(jQuery('.breadcrumb_last'));
			}
			else if(url.includes('searchresult')){
			  	jQuery('<span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage" href="'+lastresult+'">Search Results</a></span> > ').insertBefore(jQuery('.breadcrumb_last'));
			}
			jQuery('#breadcrumbs').css('opacity','1');
		},
		checkListing: function(){
			var defSlide = '';
			if(jQuery('#IDX-detailsMissingPropertyAlert').length){
				jQuery('#listd-wrap > div:not(.listd-slide)').hide();
					defSlide =
							'<li>'+
								'<canvas width="1600" height="785" style="background-image:url(https://www.jillszeder.com/wp-content/uploads/2020/06/ip-banner.jpg);"></canvas>'+
							'</li>';
				jQuery('.listd-slide ul').html(defSlide);
				jQuery('<div class="errListing"><h2>Listing Not Available</h2></div>').insertAfter(jQuery('.listd-slide'));
			}
		},
		IconShare : function(){
			setTimeout(function(){
				// share icons
				jQuery('#IDX-sharethis .st-btn').each( function(){
					var icons = jQuery(this).attr('data-network');
					var showIcons = '.ai-font-'+icons;
					jQuery(showIcons).removeClass('hideme');
					if(icons == 'email'){
						jQuery('.ai-font-envelope').removeClass('hideme');
					}
				});
				jQuery('.ai-font-facebook, .ai-font-twitter, .ai-font-linkedin, .ai-font-pinterest, .ai-font-envelope').on("click", function(){
					var currentClick = jQuery(this).attr('class');
					jQuery('#IDX-sharethis .st-btn').each( function(){
						var icons = jQuery(this).attr('data-network');
							if(currentClick.indexOf(icons) != -1){
								jQuery(this).click();
							}
							if('email' == icons && currentClick == "ai-font-envelope"){
								jQuery(this).click();
							}
					});
				});


			}, 500);
		},
		sliderAndSimilarListing : function(){
			var $obj = this;
			// Featured Custom
			setTimeout(function(){




				var htmlSlider = '';
				var counter = 0;
				var arrImg = [];
				var totalimg = jQuery('.IDX-carouselWrapper a img').length;

				/*Video*/

				setTimeout(function(){
				var  getvideo = jQuery('.video-section').data('video-url');

				if(getvideo)
				{

						getvideo = getvideo.split('v=');
						getvideo = getvideo[1];
						//console.log(getvideo);

						var _partition = getvideo;

						var _newurl = 'https://www.youtube.com/embed/'+_partition+'?autoplay=1&mute=1&rel=0';


						// jQuery('.video-section').append('<iframe src  ="'+_newurl+'" width = "100%" height = "500"></iframe>');

						if ( !getvideo == "") {
							htmlSlider += '<li>'+'<iframe src  ="'+_newurl+'" width = "100%" height = "785"></iframe>'+'</li>';
						}


				   }




				/*end Video*/

				console.log(totalimg);

				jQuery('.IDX-carouselWrapper a').each( function( x ) {

					counter++;
					//var src = jQuery(this).find('img').attr('src');
					var src = jQuery(this).find('img').attr('data-src' ).trim();
					var chkImg = '';
					if(src=="https://s3.amazonaws.com/mlsphotos.idxbroker.com/defaultNoPhoto/noPhotoFull.png"){
						chkImg = 'class="default-image"';
						src = 'https://s3.amazonaws.com/mlsphotos.idxbroker.com/defaultNoPhoto/noPhotoFull.png';
					}else{
						chkImg = '';
					}
					//slider
					if(counter <= totalimg){
						arrImg.push(src);
						htmlSlider +=
							'<li>'+
								'<canvas width="1600" height="785" '+chkImg+' style="background-image:url('+src+');"></canvas>'+
							'</li>';

						if(totalimg == counter){
							//console.log(arrImg);
							//var totalImg = arrImg.length;
							showGal(arrImg);
						}
					}
				});

				jQuery('.listd-slide ul').html(htmlSlider);



				if(jQuery('.video-section').data('video-url')){

				jQuery('.listd-slide ul').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 140000,
					fade: true
				});

				}
				else{

					jQuery('.listd-slide ul').slick({
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 5000,
					fade: true
				});

				}








				},2000);



				jQuery('.slide-nav.slide-prev').click(function(){
					jQuery('.listd-slide ul').slick('slickPrev');
				});
				jQuery('.slide-nav.slide-next').click(function(){
					jQuery('.listd-slide ul').slick('slickNext');
				});

				var ctrImg = 0;
				var ctrCon = 0;
				var galleryCon = '';
				var imgW = '';
				var imgH = '';

              //  console.log(arrImg.length);
console.log(totalimg);
				var totalImg = totalimg;

				if(totalImg > 4 && totalImg < 8){
					totalImg = 4;
				}
				else if(totalImg > 8 && totalImg < 12){
					totalImg = 8;
				}





	          // setTimeout(function(){
	          	function showGal(arrImg){

	          		//console.log(arrImg);
				jQuery.each(arrImg, function( index, value ) {
				 	ctrImg++;
				 	ctrCon++;

				 	//console.log(value);

				 	if(ctrImg == 1){
				 		galleryCon += '<li>'+
							'<div class="gallery-wrapper">';
				 	}if(ctrImg == 1 || ctrImg == 4){
				 		imgW = 622;
				 	}
				 	if(ctrImg == 2 || ctrImg == 3){
				 		imgW = 840;
				 	}
				 		galleryCon +=
				 		'<div class="gallery-single gallery-img-'+ctrImg+'">'+
							'<a href="'+value+'"  title="Image Gallery"><canvas width="'+imgW+'" height="398" style="background-image:url('+value+');"></canvas></a>'+
						'</div>';
				 	if(ctrImg == 4){
				 		galleryCon += '</div></li>';
				 		ctrImg = 0;
				 	}
				 	if(totalImg < 4){
				 		galleryCon += '</div></li>';
				 	}
				 	if(totalImg > 4 && totalImg < 8){
				 		galleryCon += '</div></li>';
				 	}
				 	if(totalImg > 8 && totalImg <= 12 && ctrCon == 12){
				 		galleryCon += '</div></li>';
				 	}

				});

				jQuery('.listd-gallery ul').html(galleryCon);


				jQuery('.listd-gallery ul').slick({
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 5000
				});

			}

			//})

				//console.log(showGal());

				//jQuery('.listd-gallery ul').html(galleryCon);
				/*jQuery('.listd-gallery ul').slick({
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 5000
				});*/
				jQuery('.aios-image-popup').aiosPopup({
					type: 'image',
					closeOnContentClick: true,
					mainClass: 'aiosp-img-mobile',
					image: {
					verticalFit: true
					}
				});

				// Similar Listing
	      		if(!jQuery('#IDX-similar-listings-result .IDX-similar-listings--item').length){
	      			jQuery('.listd-sl').hide();
	      		}else{
	      			var similarListing = '';

	      			jQuery('#IDX-similar-listings-result .IDX-similar-listings--item').each( function(){
	      				var s_link = jQuery(this).find('a.IDX-similar-listings--item-image').attr('href');
	      				var s_img = jQuery(this).find('img.IDX-similar-listings--item-image').attr('src');
	      				var s_price = jQuery(this).find('.IDX-similar-listings--price').text();
	      				var s_city = jQuery(this).find('.IDX-similar-listings--address-city').text();
	      				var other_info = jQuery(this).find('.IDX-text').html().split(', ');
	      				var beds, baths, sqft = '';
	      				jQuery.each(other_info, function( index, value ) {
	      					if (value.indexOf('bd') > -1) {
	      						beds = value.replace("bd", "");

	      					}if (value.indexOf('bths') > -1) {
	      						baths = value.replace("bths", "");
	      					}
	      					if (value.indexOf('sq.ft.') > -1) {
	      						sqft = value.replace("sq.ft.", "");
	      					}
						});
						if(s_city){
							s_city = s_city.replace(",", "");
						}


	      				// Remove Other Field to get only address
	      				jQuery(this).find('.IDX-similar-listings--price').remove();
	      				jQuery(this).find('.IDX-text').remove();
	      				var s_address = jQuery(this).find('.IDX-similar-listings--details').text();

	      				similarListing +=
	      				'<div class="sl-prop" >'+
							'<a href="'+s_link+'">'+
								'<div class="sl-img">'+
									'<canvas width="488" height="349" style="background-image: url('+s_img+');"></canvas>'+
								'</div>'+
								'<div class="sl-det">'+
									'<div class="sl-name">'+
										s_city+
									'</div>'+
									'<div class="sl-add-price font-term">'+
										'<span>'+s_address+'</span>  <em>|</em>  <span>'+s_price+'</span>'+
									'</div>'+
									'<div class="sl-bb-ex">'+
										'<div class="sl-bb">'+
											'<div>'+baths+' Baths</div>'+
											'<div>'+beds+' Beds</div>'+
											'<div>'+sqft+' Sq.Ft.</div>'+
										'</div>'+
										'<div class="sl-ex font-term">'+
											'<span>Explore</span>'+
										'</div>'+
									'</div>'+
								'</div>'+
								// '<div class="sl-heart">'+
								// 	'<span class="ai-font-heart-outline"></span>'+
								// '</div>'+
							'</a>'+
						'</div>';
	      			});

	      			// Paginate
	      			jQuery('.sl-list').html(similarListing);
	      			jQuery('#sl-list').easyPaginate({
					    paginateElement: 'div.sl-prop',
					    elementsPerPage: 3
					});

					jQuery('.ip-fp-pagi-inner a').click( function(){
						// var totalPage = jQuery('.ip-fp-pagi-inner span').length;
						// var checkLast = 0;
						// checkLast = totalPage - 2;
						// if(jQuery('.ip-fp-pagi-inner span:eq('+checkLast+')').hasClass('active')){
						// 	jQuery('.ip-fp-pagi-inner span a.next').hide();
						// }else{
						// 	jQuery('.ip-fp-pagi-inner span a.next').show();
						// }
						//console.log('hereme');
						$obj.idxb_doubletap();
					});


	      		}

	      		$obj.checkListing();
			}, 500);
			jQuery('.idxB-content').hide();

		},
		details: function(){
			var obj = this;
			jQuery('#IDX-detailsShowcaseSlides').removeClass('IDX-hide');
			// IDXB Values
	        // var addressInfo = jQuery('.IDX-detailsAddressInfo').text().replace(',', ''),
	        var	addressStreetNo =  jQuery('.IDX-detailsAddressNumber').text(),
	        	addressStreetName = jQuery('.IDX-detailsAddressName').text(),
	        	addressUnit = jQuery('.IDX-detailsAddressUnitNumber').text(),
	        	detailsAddressDirection = jQuery('.IDX-detailsAddressDirection').text(),
	        	// addressInfo = jQuery('.IDX-detailsAddressInfo').text().replace(',', '') + ' ' + addressStreetNo,
	        	addressInfo =  addressStreetNo + ' ' + detailsAddressDirection + ' ' + addressStreetName + ' ' + ( (addressUnit) ? '#'+addressUnit :'' ),
	        	addressCity = jQuery('.IDX-detailsAddressCity').text(),
	        	addressState = jQuery('.IDX-detailsAddressState').text(),
	        	addressStateAbrv = jQuery('.IDX-detailsAddressStateAbrv').text(),
	        	addressZIP = jQuery('.IDX-detailsAddressZipcode').text(),

	        	price = jQuery('.IDX-field-listingPrice .IDX-text').text(),
	        	beds = jQuery('.IDX-field-bedrooms .IDX-text').text(),
	        	baths = jQuery('.IDX-field-totalBaths .IDX-text').text(),
	        	f_baths = jQuery('.IDX-field-fullBaths span.IDX-text').text(),
				p_baths = jQuery('.IDX-field-partialBaths span.IDX-text').text(),
	        	sqft = jQuery('.IDX-field-sqFt span.IDX-text').text(),
				lot_size = jQuery('#IDX-field-lotsizesquarefeet span.IDX-text').text(),
	      		status = jQuery('.IDX-field-propStatus .IDX-text').html(),
	      		listingId = jQuery('.IDX-field-listingID .IDX-text').text(),
	      		propertyType = jQuery('.IDX-field-propType .IDX-text').text(),
	      		propertySubType = jQuery('.IDX-field-propSubType .IDX-text').text(),
	      		subdivision = jQuery('.IDX-field-subdivision .IDX-text').text(),
	      		waterfront = jQuery('#IDX-field-waterfrontyn .IDX-text').text();

	      		/*list trac*/
	      		var s = document.createElement("script");
				s.type = "text/javascript";
				s.src = '//code.listtrac.com/sm/dt/x_100779/view/?lid='+listingId+'&zc='+addressZIP;
				jQuery("body").prepend(s);

	      		var fulladress = addressInfo +' '+ addressCity +', '+ addressStateAbrv +' '+ addressZIP;

	      		description = jQuery('#IDX-description').text();

	      		var formatter = new Intl.NumberFormat('en-US', {
				  style: 'currency',
				  currency: 'USD',

				  // These options are needed to round to whole numbers if that's what you want.
				  //minimumFractionDigits: 0,
				  //maximumFractionDigits: 0,
				});

      		if(!price){
      			//price = jQuery('#IDX-similar-listings-data').attr('data-listingprice');

      			//check if rental price is available
      			if(jQuery('.IDX-field-rntLsePrice .IDX-text').text() != ""){
      				price = 'Lease Price: ' + jQuery('.IDX-field-rntLsePrice .IDX-text').text();
      			}
      			else{
      				var labelCon = jQuery('.IDX-field-soldPrice .IDX-label').text();
      				if(labelCon == 'Leased For'){
      					price = ( jQuery('#IDX-field-soldPrice .IDX-text').text() != "" ) ? jQuery('#IDX-field-soldPrice .IDX-text').text() : jQuery('.IDX-field-soldPrice .IDX-text').text();
	      			//price = 'Sold For: ' + formatter.format(price);
	      				price = 'Leased For: ' + price;
      				}else{
      				price = ( jQuery('#IDX-field-soldPrice .IDX-text').text() != "" ) ? jQuery('#IDX-field-soldPrice .IDX-text').text() : jQuery('.IDX-field-soldPrice .IDX-text').text();
	      			//price = 'Sold For: ' + formatter.format(price);
	      			price = 'Sold For: ' + price;
	      		   }
      			}
      		}
      		if (status == 'Closed' || status == 'Sold') {
	        	status = 'Sold'
	        	jQuery('#idxb-schedule-showing').hide();
	        }
	        var labelCon = jQuery('.IDX-field-soldPrice .IDX-label').text();
	        if(labelCon == 'Leased For'){
	        	status = 'Leased';
	        }

	      	jQuery('.det-desc h1').html(addressInfo +' <span>'+addressCity+', '+addressStateAbrv+' '+addressZIP+'</span>');
	      	jQuery( 'span.breadcrumb_last').text(addressInfo +' '+addressCity+', '+addressStateAbrv+' '+addressZIP);
	      	jQuery('.det-status').text(status);
	      	jQuery('.det-desc p').text(description);

	      	/* contact form */
	      	jQuery('.listd-contact-wrap h2').html(' <span>I\'m Interested in</span>' + addressInfo );
	      	jQuery('.listd-contact-wrap #listd_property').val(addressInfo +' '+addressCity+', '+addressState+' '+addressZIP);

	      	//Sidebar
	      	jQuery('.det-price').text(price);
	      	jQuery('.stat-single.det-id').html( ( (listingId) ? '<span>Listing ID:</span> '+listingId : '' ) );
	      	jQuery('.stat-single.det-beds').html( ( (beds) ? '<span>Beds:</span> '+beds : '' ) );
	      	if (f_baths && p_baths) {
				jQuery('.stat-single.det-baths').html( ( (f_baths) ? '<span>Baths:</span> '+f_baths +' full | '+p_baths +' half' : '' ) );
			}else{
				jQuery('.stat-single.det-baths').html( ( (baths) ? '<span>Baths:</span> '+baths : '' ) );
			}

	      	jQuery('.stat-single.det-living').html( ( (sqft) ? '<span>Living Area Sq.Ft.:</span> '+sqft : '' ) );
	      	jQuery('.stat-single.det-sqft').html( ( (lot_size) ? '<span>Lot Square Feet:</span> '+obj.addCommas(lot_size) : '' ) );
	      	jQuery('.stat-single.det-ptype').html( ( (propertyType) ? '<span>Property Type:</span> '+propertyType : '' ) );
	      	jQuery('.stat-single.det-psubtype').html( ( (propertySubType) ? '<span>Property Sub Type:</span> '+propertySubType: '' ) );
	      	jQuery('.stat-single.det-subd').html( ( (subdivision) ? '<span>Subdivision:</span> '+subdivision : '' ) );
	      	// jQuery('.stat-single.det-comminfo').html(price);
	      	// jQuery('.stat-single.det-hoa').html(price);
	      	jQuery('.stat-single.det-waterfront').html( ( (waterfront) ? '<span>Waterfront:</span> '+waterfront : '' ) );

	      	// Property Features
	      	var featureHtml = '';
	      	var featuresContainer = jQuery('.feat-list');
	      	var htmlLeft = '';
	      	var htmlRigth = '';
      		jQuery('#IDX-fieldsWrapper .IDX-field').each( function( e ){
      			//if(jQuery(this).hasClass('IDX-field-propSubType') && jQuery(this).attr('id') == 'IDX-field-propSubType'){
      			//}else{
      				if(e % 2 == 0){
      				htmlLeft +=
      				'<div class="feat-single">'+
						'<span>'+jQuery(this).find('.IDX-label').text()+':</span> <strong>'+jQuery(this).find('.IDX-text').text()+
					'</strong></div>';
	      			}else{
	      				htmlRigth +=
	      				'<div class="feat-single feat-const">'+
							'<span>'+jQuery(this).find('.IDX-label').text()+':</span> <strong>'+jQuery(this).find('.IDX-text').text()+
						'</strong></div>';

	      			}
      			//}

      		});
      		featureHtml +=
      				'<div class="feat-l" data-aios-staggered-child="true" data-aios-animation="fadeInLeft" data-aios-animation-delay="0.5s">'+
						htmlLeft+
					'</div>'+
      				'<div class="feat-r" data-aios-staggered-child="true" data-aios-animation="fadeInRight" data-aios-animation-delay="1s">'+
						htmlRigth+
					'</div>';

      		featuresContainer.html(featureHtml);


      		// Map

      		//var map_address = addressStreetNo +' '+ addressStreetName +' '+addressCity+', '+addressState+' '+addressZIP;
      		//obj.initMap(map_address);
      		var map_address = encodeURIComponent(addressStreetNo +' '+ addressStreetName +' '+addressCity+', '+addressState+' '+addressZIP);

      		if (listingId == "39893C1672249380723") {
      			map_address = '5275+Fisher+Island+Dr+%235275,+Miami+Beach,+FL+33109,+USA';
      		}
      		jQuery('.map-container').html('<iframe src="https://maps.google.com/maps?q='+map_address+'&t=&z=13&ie=UTF8&iwloc=&output=embed" width="1467" height="591" frameborder="0" style="border:0" allowfullscreen></iframe>')

      		// Disclaimer
      		// jQuery('.idxb-info-disc').text(jQuery('div#IDX-main > div:eq(3)').text());
      		jQuery('#IDX-main div').each( function(){
				if(jQuery(this).text().indexOf('All rights reserved') != -1){
					jQuery('.idxb-info-disc').text(jQuery(this).text());
				}
			});

      		jQuery('.disclaimer-rep').html(jQuery('#IDX-main > div').last().html());

      		// Agent Listing
    //   		if(jQuery('#IDX-detailsAgentInfo').length){
    //   			var wp_agent_link = 'https://www.jillszeder.com/agents/';
    //   			var agentHtml = '';
    //   			var agentImg = ( jQuery('#IDX-detailsAgentPhoto', 0) ) ? jQuery('#IDX-detailsAgentPhoto img').attr('src') : false;
    //   			var agentName = ( jQuery('#IDX-detailsFeaturedAgentdisplayname', 0) ) ? jQuery('#IDX-detailsFeaturedAgentdisplayname .IDX-detailsAgentInfoText').text() : false;
    //   			var agentLink = ( jQuery('#IDX-detailsAgentPhoto', 0) ) ? jQuery('#IDX-detailsAgentPhoto a').attr('href') : false;
    //   			wp_agent_link = wp_agent_link + agentName.trim().replace(' ', '-').toLowerCase();
				// jQuery('.agents-img canvas').attr('style','background-image:url('+agentImg+')');
				// jQuery('.agents-det h3').text(agentName);
				// jQuery('.agents-link').attr('href', wp_agent_link);
				// //jQuery('.agents-slide ul').html(agentHtml);
				// if(jQuery('#IDX-detailsFeaturedAgentemail')){
				// 	jQuery('#IDX-detailsFeaturedAgentemail .IDX-detailsAgentInfoText').detach().appendTo(jQuery('span.agent-email'));
				// }
				// if(jQuery('#IDX-detailsFeaturedAgentofficephone').length){
	   //    			jQuery('#IDX-detailsFeaturedAgentofficephone .IDX-detailsAgentInfoText').detach().appendTo(jQuery('span.agent-no'));
	   //    		}
    //   		}else{
    //   			jQuery('.listd-agents').hide();
    //   		}
      		jQuery('footer.footer').attr('id','footerform');

      		var $current_url = window.location.href;
      		jQuery('#listing-source').val($current_url);
			jQuery('#cf7-source-link').val($current_url);

		},
		initMap: function(address){
			// var geocoder = new google.maps.Geocoder();
			// geocoder.geocode( { 'address': address}, function(results, status) {
			// 	console.log(status);
			//   	if (status == google.maps.GeocoderStatus.OK) {
			//     	var latitude = results[0].geometry.location.lat();
			//     	console.log(latitude);
			//   	}
			// });
			//var address = "New Delhi"
			//$.ajax({
			  	//url:"https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&sensor=false&key=AIzaSyDJEydnOungfhC1_J5n7lLLi_M5-4h1bGU",
			  	//type: "POST",
			  	//success:function(res){
			  	//console.log(res);
			     // console.log(res.results[0].geometry.location.lat);
			     // console.log(res.results[0].geometry.location.lng);
			  	//}
			//});
		},
		addCommas: function (nStr){
		    nStr += '';
		    x = nStr.split('.');
		    x1 = x[0];
		    x2 = x.length > 1 ? '.' + x[1] : '';
		    var rgx = /(\d+)(\d{3})/;
		    while (rgx.test(x1)) {
		        x1 = x1.replace(rgx, '$1' + ',' + '$2');
		    }
		    return x1 + x2;
		},

		addVideodetails: function (nStr){

			setTimeout(function(){
		   var  getvideo = jQuery('.video-section').data('video-url');

 if(getvideo){

				getvideo = getvideo.split('v=');
				getvideo = getvideo[1];
			//	console.log(getvideo);

				var _partition = getvideo;

				var _newurl = 'https://www.youtube.com/embed/'+_partition+'';


						jQuery('.video-section').append('<iframe src  ="'+_newurl+'" width = "100%" height = "500"></iframe>');

				   }

	},2000);


		},



		action: function(){



			// Save listing
			jQuery('#ui-dialog-title-IDX-registration').html('<span class="first-word">Sign</span> Up');
			if(jQuery('#IDX-removeProperty').length){
				jQuery('#idxb-save-listing').html('<span>'+jQuery('#IDX-removeProperty').text()+'</span>');
			}
			jQuery('#idxb-save-listing').click( function(){
				if(jQuery('#IDX-saveProperty').length){
					idx('#IDX-saveProperty').click();
				}else if(jQuery('#IDX-removeProperty').length){
					idx('#IDX-removeProperty').click();
					jQuery('#idxb-save-listing').html('<span>'+jQuery('#IDX-removeProperty').text()+'</span>');

				}

			});

			// More Info
			jQuery('#idxb-more-info').attr('href', jQuery('#IDX-moreinfo').attr('href'));
			//Schedule Showing
			jQuery('#idxb-schedule-showing').attr('href', jQuery('#IDX-scheduleShowing').attr('href'));

			// Virtual Tour

			/*if(jQuery('.IDX-detailsVirtualTourAction').length){
				jQuery('.det-vtour a').click( function(){
					idx('.IDX-detailsVirtualTourAction').click();
				});
			}else{
				//jQuery('.det-stats .det-vtour').css('display','none');
			}*/

			var check_vtour = jQuery('#IDX-detailsHotAction-vt');

			if (check_vtour.length > 0) {

				var yt = '';
				var vimeo = '';
				var vt = '';

				var thumb_img = '';

				if (jQuery('.IDX-vtLink').length > 0) {
					jQuery('.IDX-vtLink').each(function(i){
						var _link_ = jQuery(this).attr('onclick');
						const find_vid = _link_.match(/window\.open\('([^']+)'/);

						if (_link_.indexOf('youtu') > 0) {

							yt = _link_;
							if (find_vid && find_vid[1]) {
						        var link_arr = find_vid[1].split('/');
						        var vid_id = link_arr[link_arr.length - 1];
						        if(vid_id.indexOf('watch?v=') > -1){
						        	vid_id = vid_id.replace('watch?v=', '');
						        }
								thumb_img = 'https://img.youtube.com/vi/'+vid_id+'/hqdefault.jpg';
						    }

						} else if (_link_.indexOf('vimeo') > 0) {

							vimeo = _link_;
							if (find_vid && find_vid[1]) {
						        var link_arr = find_vid[1].split('/');
						        var vid_id = link_arr[link_arr.length - 1];

								thumb_img = 'https://vumbnail.com/'+vid_id+'.jpg';
						    }

						} else {

							vt = _link_;
						}

					});
					console.log( yt, vimeo, vt );
					if ( yt ) {
						v_URL = yt;
					} else if ( vimeo ) {
						v_URL = vimeo;
					} else if ( vt ) {
						v_URL = vt;
					}

					jQuery('.det-vtour > a:first-child').attr('onclick',v_URL);

					if(thumb_img){
						jQuery('.det-vtour > a:first-child').after('<img src="'+thumb_img+'" class="vt-img">');
					}


				}else{
					v_URL = jQuery('#IDX-detailsHotAction-vt a').attr('onclick');

					jQuery('.det-vtour a').attr('onclick',v_URL);
				}
			}else{
				jQuery('.det-stats .det-vtour').css('display','none');
			}


		},
		popupGallery: function(){
			setTimeout(function(){
				jQuery('.gallery-single').aiosPopup({
				  delegate: 'a',
				  type: 'image',
				  gallery:{
				    enabled:true
				  }
				});
			}, 8000);
		},
		hideCTAForSold: function() {
			var ctr = jQuery('.gallery-wrapper div.gallery-single').length;
			if(ctr <= 1){
				jQuery('.gallery-wrapper').css('display','none');
			}
		},
		idxb_doubletap: function(){
			setTimeout(function(){
				//console.log('heremeA');
				jQuery('.sl-list .sl-prop a').click(function(e){
					//console.log('heremeB');
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
			}, 500);
		},
		idxb_openhouse: function(){
			if (jQuery('#IDX-openHouses').html()) {
				var oh_up = jQuery('#IDX-openHouses').find('#IDX-openHouseHeader').text();
				var oh_date = jQuery('#IDX-openHouses').find('.IDX-ohFreeFormDate').text();
				var oh_time = jQuery('#IDX-openHouses').find('.IDX-openHouseTime').text();


				jQuery('.listd-openhouse-wrapper').find('.listd-openhouse-up').text(oh_up);
				jQuery('.listd-openhouse-wrapper').find('.listd-openhouse-date').text(oh_date);
				jQuery('.listd-openhouse-wrapper').find('.listd-openhouse-time').text(oh_time);

				jQuery('.listd-openhouse-wrapper').addClass('listd-openhouse-show');


				jQuery('.det-oh').find('.det-oh-up').text(oh_up);
				jQuery('.det-oh').find('.det-oh-date').text(oh_date);
				jQuery('.det-oh').find('.det-oh-time').text(oh_time);

				jQuery('.det-oh').addClass('det-oh-show');
			}
		},

        uniqueListing: function(){
        	var curUrl = jQuery(location).attr('href');

        	if(curUrl.indexOf('A10972067/3561-Avocado-Ave-Miami-FL-33133') != -1){
        		//console.log('im in');
        		jQuery('span.listd-openhouse-up').text('Upcoming Broker Open House');
        		jQuery('span.det-oh-up').text('Upcoming Broker Open House');

        	}
        },


        backToTop: function(){
			jQuery(window).scroll(function(){
               if (jQuery(this).scrollTop() > 100) {
                  // console.log('scrolled');
                   jQuery('#backToTopButton').addClass('show');
               } else {
                   jQuery('#backToTopButton').removeClass('show');
               }
           });
           jQuery('#backToTopButton').click(function(){
               jQuery("html, body").animate({ scrollTop: 0 }, 600);
               return false;
           });




            jQuery('.light, .footer-content').elementPeek({
			    onViewportIn: function(object) {
                    jQuery('#backToTopButton').addClass('light');

			    },

			    peekAmountToTrigger:0.0

			});

            jQuery('.dark, .footer-git').elementPeek({
			    onViewportIn: function(object) {
                   // console.log('Peek');
                    jQuery('#backToTopButton').removeClass('light');
			       jQuery('#backToTopButton').addClass('dark');
			    },

			    peekAmountToTrigger:0.0

			});


		},
		initCustomCTAButtons: function() {
			setTimeout(function(){

				if (window.location.href.indexOf('https://homes.jillszeder.com/idx/details/listing/d016/A11773741/Coral-Gables-FL-33134&featured=true') > -1) {
				    jQuery('.det-stats .det-vtour a[href*="javascript"]').attr({
				        href: "javascript:;",
				        onclick: "window.open('https://www.youtube.com/watch?v=lsYLzq7N468', 'VirtualTour', 'width=800,height=600,resizable=1,scrollbars=1,status=0,titlebar=0')"
				    }).html('<span>Video Tour</span>');
				}



				if (window.location.href.indexOf('https://homes.jillszeder.com/idx/details/listing/d016/A11480052/84-SW-28-Rd-2-Miami-FL-33129&featured=true') > -1) {
					jQuery('<a href="https://www.theroadstownhomes.com/" target="_blank"><span>The Roads Townhomes</span></a>').insertAfter('.det-stats .det-vtour a[href*="javascript"]');
					jQuery('<div class="det-extras new-link"><div class="det-cta"><a href="https://www.theroadstownhomes.com/" target="_blank" id="idxb-save-listing" class="aios-initial-setup-dead-link"><span>Visit the Road Townhomes website for more info</span></a></div></div>').insertAfter('.det-desc > p');
				}


				if (window.location.href.indexOf('https://homes.jillszeder.com/idx/details/listing/d016/A11480068/84-SW-28th-Rd-1-Miami-FL-33129&featured=true') > -1) {
					jQuery('<a href="https://www.theroadstownhomes.com/" target="_blank"><span>The Roads Townhomes</span></a>').insertAfter('.det-stats .det-vtour a[href*="javascript"]');
					jQuery('<div class="det-extras new-link"><div class="det-cta"><a href="https://www.theroadstownhomes.com/" target="_blank" id="idxb-save-listing" class="aios-initial-setup-dead-link"><span>Visit the Road Townhomes website for more info</span></a></div></div>').insertAfter('.det-desc > p');
				}

				if (window.location.href.indexOf('https://homes.jillszeder.com/idx/details/listing/d016/A11479934/84-SW-28th-Rd-7-Miami-FL-33129&featured=true') > -1) {
					jQuery('<a href="https://www.theroadstownhomes.com/" target="_blank"><span>The Roads Townhomes</span></a>').insertAfter('.det-stats .det-vtour a[href*="javascript"]');
					jQuery('<div class="det-extras new-link"><div class="det-cta"><a href="https://www.theroadstownhomes.com/" target="_blank" id="idxb-save-listing" class="aios-initial-setup-dead-link"><span>Visit the Road Townhomes website for more info</span></a></div></div>').insertAfter('.det-desc > p');
				}

				if (window.location.href.indexOf('https://homes.jillszeder.com/idx/details/listing/d016/A11480037/84-SW-28th-Rd-5-Miami-FL-33129&featured=true') > -1) {
					jQuery('<a href="https://www.theroadstownhomes.com/" target="_blank"><span>The Roads Townhomes</span></a>').insertAfter('.det-stats .det-vtour a[href*="javascript"]');
					jQuery('<div class="det-extras new-link"><div class="det-cta"><a href="https://www.theroadstownhomes.com/" target="_blank" id="idxb-save-listing" class="aios-initial-setup-dead-link"><span>Visit the Road Townhomes website for more info</span></a></div></div>').insertAfter('.det-desc > p');
				}

			},200);
		}
		// initPrevNumNext: function(){
		// 	var obj = this;
		// 	jQuery('.ip-fp-pagi-inner a').on('click', function(e) {
		// 		console.log('hereme');
		// 		obj.idxb_doubletap();
		// 	});
		// }

	}
	jQuery(document).ready( function() {


		app.initCustomCTAButtons();
		jQuery('.custom-breadcrumbs').appendTo('.listd-slide');
		app.fixBreadcrumbs();
		app.sliderAndSimilarListing();
		app.details();
		//app.otherSlider();
		app.action();
		//app.initShowListingAgent();
		app.idxb_doubletap();
		app.idxb_openhouse();

        app.backToTop();
        // app.addVideodetails();
        app.uniqueListing();


	});

	jQuery(window).on('load', function(){

		app.IconShare();
		app.popupGallery();
		setTimeout(function(){
			app.hideCTAForSold();
		}, 7000);

	})


})(jQuery);
