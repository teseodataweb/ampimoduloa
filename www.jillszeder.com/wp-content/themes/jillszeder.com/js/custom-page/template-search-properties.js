/***Featured Listings***/

( function($) {



	var app = {

		initAction: function(){

			//Reset Advanced Search Field

			var form_adv = jQuery('#form-adv');

			jQuery('#adv-reset-btn').click( function(){

				if (form_adv) {

					form_adv.find('.custom-search-field').each(function () {

	                    $(this).val('');
	                    jQuery('.lp').html('<option value="">Minimum Price</option>');
						jQuery('.hp').html('<option value="">Maximum Price</option>');

	                });

				}

			});	



			//Reset Search Listing ID

			var form_listingid = jQuery('#form-listingid');

			jQuery('#listingid-reset-btn').click( function(){

				if (form_listingid) {

					form_listingid.find('.custom-search-field').each(function () {

	                    $(this).val('');

	                });

				}

			});



			// Reset Address Search

			var form_add = jQuery('#form-add');

			jQuery('#address-reset-btn').click( function(){

				if (form_listingid) {

					form_listingid.find('.custom-search-field').each(function () {

	                    $(this).val('');

	                });

				}

			});



			// Add placeholder

			jQuery('#sqft').focus( function(){

				jQuery(this).attr('placeholder', 'Enter any number');

			});

			jQuery('#sqft').focusout(function(){

			  	jQuery(this).removeAttr('placeholder');

			});


			jQuery('#minPrice').focus( function(){

				jQuery(this).attr('placeholder', 'Enter Min Price');

			});

			jQuery('#minPrice').focusout(function(){

			  	jQuery(this).removeAttr('placeholder');

			});

			jQuery('#maxPrice').focus( function(){

				jQuery(this).attr('placeholder', 'Enter Max Price');

			});

			jQuery('#maxPrice').focusout(function(){

			  	jQuery(this).removeAttr('placeholder');

			});


		},

		getMinMaxPerPtype: function(){
			jQuery('.qs-property-type').on('change', function(){
				console.log('clicked');
				var htmlSqft = '';
				jQuery('.lp').html('<option value="">Minimum Price</option>');
				jQuery('.hp').html('<option value="">Maximum Price</option>');

				if(jQuery(this).val() == 3){


					/*jQuery('<div class="subproptype"><label for="ptype">Sub Property Type</label><select name="a_propSubType[]" aria-label="Property Type" class="custom-search-field qs-property-type" required>'+
								'<option value="">Sub Property Type</option>'+
								 '<option value="Single Family Residence">Single Family Residence</option>'+
								 '<option value="Condominium">Condominium</option>'+
								 '</select></div>').insertAfter(jQuery('.qs-property-type'));	*/
					// min
					jQuery('.lp').append('<option value="0">$0</option>');
					jQuery('.lp').append('<option value="3000">$3,000/month</option>');
					jQuery('.lp').append('<option value="4000">$4,000/month</option>');
					jQuery('.lp').append('<option value="5000">$5,000/month</option>');
					jQuery('.lp').append('<option value="6000">$6,00/month</option>');
					jQuery('.lp').append('<option value="7000">$7,000/month</option>');
					jQuery('.lp').append('<option value="8000">$8,000/month</option>');
					jQuery('.lp').append('<option value="9000">$9,000/month</option>');
					jQuery('.lp').append('<option value="10000">$10,000/month</option>');
					jQuery('.lp').append('<option value="20000">$20,000/month</option>');
					jQuery('.lp').append('<option value="30000">$30,000/month</option>');
					jQuery('.lp').append('<option value="40000">$40,000/month</option>');
					jQuery('.lp').append('<option value="50000">$50,000/month</option>');
					jQuery('.lp').append('<option value="60000">$60,000/month</option>');
					jQuery('.lp').append('<option value="70000">$70,000/month</option>');
					jQuery('.lp').append('<option value="80000">$80,000/month</option>');
					jQuery('.lp').append('<option value="90000">$90,000/month</option>');
					jQuery('.lp').append('<option value="100000">$100,000/month</option>');
					jQuery('.lp').append('<option value="110000">$110,000/month</option>');
					jQuery('.lp').append('<option value="120000">$120,000/month</option>');
					jQuery('.lp').append('<option value="130000">$130,000/month</option>');
					jQuery('.lp').append('<option value="140000">$140,000/month</option>');
					jQuery('.lp').append('<option value="150000">$150,000/month</option>');
					jQuery('.lp').append('<option value="200000">$200,000/month</option>');
					jQuery('.lp').append('<option value="250000">$250,000/month</option>');
					jQuery('.lp').append('<option value="300000">$300,000/month</option>');
					jQuery('.lp').append('<option value="350000">$350,000/month</option>');
					jQuery('.lp').append('<option value="400000">$400,000/month</option>');
					jQuery('.lp').append('<option value="450000">$450,000/month</option>');
					jQuery('.lp').append('<option value="500000">$500,000/month</option>');
					jQuery('.lp').append('<option value="550000">$550,000/month</option>');
					jQuery('.lp').append('<option value="600000">$600,000/month</option>');
					jQuery('.lp').append('<option value="650000">$650,000/month</option>');
					jQuery('.lp').append('<option value="700000">$700,000/month</option>');
					jQuery('.lp').append('<option value="750000">$750,000/month</option>');

					// max
					jQuery('.hp').append('<option value="10000">$10,000/month</option>');
					jQuery('.hp').append('<option value="20000">$20,000/month</option>');
					jQuery('.hp').append('<option value="30000">$30,000/month</option>');
					jQuery('.hp').append('<option value="40000">$40,000/month</option>');
					jQuery('.hp').append('<option value="50000">$50,000/month</option>');
					jQuery('.hp').append('<option value="60000">$60,000/month</option>');
					jQuery('.hp').append('<option value="70000">$70,000/month</option>');
					jQuery('.hp').append('<option value="80000">$80,000/month</option>');
					jQuery('.hp').append('<option value="90000">$90,000/month</option>');
					jQuery('.hp').append('<option value="100000">$100,000/month</option>');
					jQuery('.hp').append('<option value="110000">$110,000/month</option>');
					jQuery('.hp').append('<option value="120000">$120,000/month</option>');
					jQuery('.hp').append('<option value="130000">$130,000/month</option>');
					jQuery('.hp').append('<option value="140000">$140,000/month</option>');
					jQuery('.hp').append('<option value="150000">$150,000/month</option>');
					jQuery('.hp').append('<option value="200000">$200,000/month</option>');
					jQuery('.hp').append('<option value="250000">$250,000/month</option>');
					jQuery('.hp').append('<option value="300000">$300,000/month</option>');
					jQuery('.hp').append('<option value="350000">$350,000/month</option>');
					jQuery('.lp').append('<option value="400000">$400,000/month</option>');
					jQuery('.hp').append('<option value="450000">$450,000/month</option>');
					jQuery('.hp').append('<option value="500000">$500,000/month</option>');
					jQuery('.hp').append('<option value="550000">$550,000/month</option>');
					jQuery('.hp').append('<option value="600000">$600,000/month</option>');
					jQuery('.hp').append('<option value="650000">$650,000/month</option>');
					jQuery('.hp').append('<option value="700000">$700,000/month</option>');
					jQuery('.hp').append('<option value="750000">$750,000/month</option>');
			
				}
				else{

					jQuery('.subproptype').remove();
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

				if(jQuery(this).val() == 7){
					
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Boat Slip" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Duplex" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Multi Family" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Other" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Residential" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));
				    jQuery('<input type="hidden" name="a_propSubType[]" value="Unimproved Land" class="ipqs-propertyLand">').insertAfter(jQuery('.qs-property-type'));

				    $htmlSqft = 
				    '<label for="lot-size">Lot Size</label>'+
					'<div class="form-lot-size">'+
						'<div class="lot-size-field">'+
							'<label for="lot-size_price" class="hidden"></label>'+
							'<select name="amin_sqFt" aria-label="Minimum Lot Size" class="amin_sqFt">'+
							    '<option value="">Minimum Lot Size</option>'+
							    '<option value="5000">5,000</option>'+
							    '<option value="10000">10,000</option>'+
							    '<option value="20000">20,000</option>'+
							    '<option value="30000">30,000</option>'+
							    '<option value="40000">40,000</option>'+
							    '<option value="50000">50,000</option>'+
							    '<option value="60000">60,000</option>'+
							    '<option value="70000">70,000</option>'+
							    '<option value="80000">80,000</option>'+
							    '<option value="90000">90,000</option>'+
							'</select>'+
						'</div>'+
						'<div id="lot-size-to">to</div>'+
						'<div class="lot-size-field">'+
							'<label for="lot-size_price" class="hidden"></label>'+
							'<select name="amax_sqFt" aria-label="Maximum Lot Size" class="amax_sqFt">'+
							    '<option value="">Maximum Lot Size</option>'+
							    '<option value="10000">10,000</option>'+
							    '<option value="20000">20,000</option>'+
							    '<option value="30000">30,000</option>'+
							    '<option value="40000">40,000</option>'+
							    '<option value="50000">50,000</option>'+
							    '<option value="60000">60,000</option>'+
							    '<option value="70000">70,000</option>'+
							    '<option value="80000">80,000</option>'+
							    '<option value="90000">90,000</option>'+
							    '<option value="100000">100,000+</option>'+
							'</select>'+
						'</div>'+
					'</div>';
				    
				}else{
					jQuery('.ipqs-propertyLand').remove();
					$htmlSqft = 
					'<label for="sqft">Living Size Sq. Ft.</label>'+
					'<select name="sqft" title="Living Area">'+
					    '<option value="" selected="">Sqft</option>'+
					    '<option value="300">300+</option>'+
					    '<option value="500">500+</option>'+
					    '<option value="750">750+</option>'+
					    '<option value="1000">1000+</option>'+
					    '<option value="1500">1500+</option>'+
					    '<option value="2000">2000+</option>'+
					    '<option value="2500">2500+</option>'+
					    '<option value="3000">3000+</option>'+
					    '<option value="3500">3500+</option>'+
					    '<option value="4000">4000+</option>'+
					    '<option value="4500">4500+</option>'+
					    '<option value="5000">5000+</option>'+
					    '<option value="6000">6000+</option>'+
					    '<option value="7000">7000+</option>'+
					    '<option value="8000">8000+</option>'+
					'</select>';
				}

				jQuery('.ipqs-living-sqft').html($htmlSqft);
			});			
		}

	}

	jQuery(document).ready( function() {

		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');



		jQuery('.sp-tabs span').click(function(){

			var spanclass = jQuery(this).attr('class');

			jQuery('.forms-content .form-single, .sp-tabs span').removeClass('active');

			jQuery(this).addClass('active');

			jQuery('.forms-content #form-' + spanclass).addClass('active');

		});



		var currentUrl = jQuery( location ).attr('href');

		if(currentUrl.indexOf('/search-properties/') !== -1){

			jQuery('.sp-tabs .map').html('<a href="https://jillszeder.idxbroker.com/idx/map/mapsearch">Map Search</a>');

		}

		if(currentUrl.indexOf('/idx/map/mapsearch') !== -1){

			jQuery('.forms-content .form-single, .sp-tabs span').removeClass('active');

			jQuery('.sp-tabs .map').addClass('active');

			jQuery('#form-map').addClass('active');

		}

		app.initAction();

		app.getMinMaxPerPtype();

		

	});

	

	jQuery(window).on('load', function(){

		

		setTimeout(function(){

			jQuery('#form-map .sp-map > img').remove();

			jQuery('#IDX-main').detach().appendTo(jQuery('#form-map .sp-map'));

		 }, 3000);





	})





})(jQuery);

