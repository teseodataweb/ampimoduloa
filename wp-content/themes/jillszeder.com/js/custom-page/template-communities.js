/***Communities***/

( function($) {


	var chkClick = false;
	var app = {

		initSort: function(){

			var obj = this;
			

			$('#search-building-text, #areas').on('change', function(){    // 2nd (A)
				chkClick = true;
			    obj.initGetCommunityListing(chkClick, true);
			    jQuery('.comm-list').html('<center><img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/modules/luxury-condos/images/loading.gif" style="height:70px;    margin-top: 5%;"></center>');
				
			});
			$('#communities').on('change', function(){    // 2nd (A)
			    window.location.href = jQuery(this).val();
			});

		},

		initGetCommunityListing: function(chkClick, onChngd){
			var obj = this;
	        jQuery.ajax({
	            type: "POST",
	            url: ajaxurl,
	            data: {
	                action: "luxury_communities",
	                building: jQuery('select#search-building-text').val(),
	                community: jQuery('select#communities').val(),
	                area: jQuery('select#areas').val(),
	                page: (onChngd ? 1 : jQuery('.page-value').val()),
	                //results: jQuery('.lc-nav-view .results').val(),
	            },

	            success: function (response) {
	            	var data = jQuery.parseJSON(response);
	            	console.log(data.args);
	                jQuery('.comm-list').html(data.html);
	                jQuery('.comm-pagination-control').html(data.pagination);
	                if(jQuery('.comm-item').length){
	                	obj.initPageOf();
	                	if(chkClick == true){
	                		obj.initDbltap();
	                	}
	                	
	                }else{
	                	jQuery('.comm-list-page-indicator').html('<span>No community Found</span>');
	                }
	            }
	        });
		},
		initCustomSelect: function() {

			var $select = jQuery('.comm-list-sort-areas, .comm-list-sort-communities');



			$select.parent().on('click', '.custom-selected', function () {

			    var $this = jQuery(this),

			        $parent = $this.parent(),

			        $custom_list = $parent.find('.custom-select-list');



			    if (!$custom_list.is(':visible')) {

			        closeAllList();

			        $custom_list.show();

			        $parent.css({zIndex: 100});

			    } else {

			        closeAllList();

			    }



			});



			$select.parent().on('click', '.custom-select-list-option', function () {

			    var $this = jQuery(this),

			        $parents = $this.parents('.custom-select'),

			        _selectId = $parents.data('select'),

			        _selectedVal = $this.data('value')

			        $display = $parents.find('.custom-selected'),

			        $custom_list = $parents.find('.custom-select-list'),

			        _search = false;



			    $parents.find('~ select' ).val(_selectedVal);



			    $display.text($this.text());

			    $custom_list.hide();

			    $parents.css({zIndex: 100});

			    

			});



			jQuery(document).keyup(function (e) {

			    if (e.keyCode == 27) closeAllList();

			});



			jQuery(document).on('click', function (e) {

			    if (!jQuery(e.target).closest('.custom-select').length) {

			        if (jQuery('.custom-select').is(":visible")) {

			            closeAllList();

			        }

			    }

			});



			function closeAllList() {

			    jQuery('.custom-select-list').hide();

			    jQuery('.custom-select').css({zIndex: 0});

			}

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



			jQuery('.comm-list-page-indicator').html('Page '+page+ ' of ' +lastpage+ ' - <span>'+total+' communities Found</span>');

		},

		initDbltap: function() {

			setTimeout(function(){
				console.log('test1');

				jQuery('.comm-item a').click(function(c){
					console.log('test2');
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
		app.initGetCommunityListing();

		app.initSort();

		app.initCustomSelect();

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

