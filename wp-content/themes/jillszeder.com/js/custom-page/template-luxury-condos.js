/***Luxury Condos***/
( function($) {
	var chkClick = false;
	var app = {
		initSort: function(){
			var obj = this;
			$('#search-building-text, #areas').on('change', function(){    // 2nd (A)
				chkClick = true;
			    obj.initGetCondoListing(chkClick, true);
			    jQuery('.comm-list').html('<center><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/luxury-condos/images/loading.gif" style="height:70px;    margin-top: 5%;"></center>');
			});
			// $('#search-building-text').on('input', function(){    // 2nd (A)
			//     obj.initGetCondoListing();
			//     jQuery('.comm-list').html('<center><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/luxury-condos/images/loading.gif" style="height:70px;    margin-top: 5%;"></center>')
			// });
			$('#communities').on('change', function(){    // 2nd (A)
			    window.location.href = jQuery(this).val();
			});
		},
		initGetCondoListing: function(chkClick, onChngd){
			var obj = this;
	        jQuery.ajax({
	            type: "POST",
	            url: ajaxurl,
	            data: {
	                action: "luxury_condo",
	                building: jQuery('select#search-building-text').val(),
	                condo: jQuery('select#communities').val(),
	                area: jQuery('select#areas').val(),
	                page: (onChngd ? 1 : jQuery('.page-value').val()) ,
	                //results: jQuery('.lc-nav-view .results').val(),

	            },
	            success: function (response) {
	            	var data = jQuery.parseJSON(response);
	                jQuery('.comm-list').html(data.html);
	                jQuery('.comm-pagination-control').html(data.pagination);
	                if(jQuery('.comm-item').length){
	                	obj.initPageOf();
	                	if(chkClick == true){
	                		obj.initDbltap();
	                	}
	                }else{
	                	jQuery('.comm-list-page-indicator').html('<span>No Condominiums Found</span>');
	                }
	            }
	        });
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

			jQuery('.comm-list-page-indicator').html('Page '+page+ ' of ' +lastpage+ ' - <span>'+total+' Condominiums Found</span>');
		},
		pagination: function () {
                var obj = this;
                jQuery(document).on('click', '.ip-agents-pagination-inner a', function (e) {
                    e.preventDefault();
                    var d = jQuery(this),
                        url = d.attr('href');
                    obj.page = obj.getUrlParameter(url, 'paged');
                    obj.initGetCondoListing();
                });
        },
        getUrlParameter: function (url, sParam) {
            var results = new RegExp('[\?&]' + sParam + '=([^]*)').exec(url);
            if (results == null) {
                return null;
            } else {
                return results[1] || '';
            }
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
		app.initGetCondoListing();
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
