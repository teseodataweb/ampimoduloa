/***In The Media***/
( function($) {

	var app = {
		initPopUpiframe: function(){
			jQuery('.aios-content-popup').click(function() {  jQuery.aiosPopup.open({
			    items: {
			     	type: 'iframe',
			     	src: jQuery(this).attr('data-pdf')
			    }
			});
			});
		},
		initTabFunction: function() {
			// Javascript to enable link to tab
			var hash = document.location.hash;
			var prefix = "tab_";
			if (hash) {
			    $('.nav-tabs a[href='+hash.replace(prefix,"")+']').tab('show');
			} 

			// Change hash for page-reload
			$('.nav-tabs a').on('shown.bs.tab', function (e) {
			    window.location.hash = e.target.hash.replace("#", "#" + prefix);
			});

			
		},
		initMediaPagination: function() {
			// Number Paginate
			totalpage = jQuery('.ip-media-pagination ul li').length;
			jQuery( '.ip-media-pagination li a' ).on( "click", function() {
				var currentClick = jQuery(this);
				var activeTab = jQuery('.ip-media-filter ul li.active').text();
				var page = jQuery(this).text();
				var toShow = activeTab+'_page_'+page;
				jQuery(this).parent().removeClass('active');

				// Highlight new button
				jQuery('.ip-media-pagination li').each( function() {
					jQuery(this).removeClass('active');
				});
				currentClick.parent().addClass('active');
				if(currentClick.text() == 1 ){
					jQuery('.ip-media-pagination-prev').hide();
				}else{
					jQuery('.ip-media-pagination-prev').show();
				}
				if(currentClick.text() == totalpage ){
					jQuery('.ip-media-pagination-next').hide();
				}else{
					jQuery('.ip-media-pagination-next').show();
				}

				// Display New Paginate
				jQuery('#'+activeTab +' .ip-media-col').each( function() {
					if(jQuery(this).hasClass(toShow)){
						jQuery(this).removeClass('hide');
					}else{
						jQuery(this).addClass('hide');
					}
				});
			});

			jQuery('.ip-media-pagination a').click(function(){
				jQuery('html, body').animate({ scrollTop: jQuery('.ip-media-content').offset().top }, 1000);
			});
		},
		initMediaPaginationNextPrev: function() {
			// Next Paginate
			totalpage = jQuery('.ip-media-pagination ul li').length;
			jQuery( '.ip-media-pagination-next' ).on( "click", function() {
				var n_activeTab = jQuery('.ip-media-filter ul li.active').text();
				n_activePage = null;
				n_activePage = parseInt(jQuery('.ip-media-pagination li.active').text());
	
				n_activePage = n_activePage + 1;
				n_totalPage = parseInt(jQuery('.ip-media-pagination li').length);

				if(n_activePage <= n_totalPage){
					jQuery('.ip-media-pagination li.active').removeClass('active');	
					var n_toShow = n_activeTab+'_page_'+n_activePage;

					// Highlight new button
					jQuery('.ip-media-pagination li').each( function() {
						if(parseInt(jQuery(this).text()) == n_activePage){
							jQuery(this).addClass('active');
						}
					});
					// Display New Paginate
					jQuery('#'+n_activeTab +' .ip-media-col').each( function() {
						if(jQuery(this).hasClass(n_toShow)){
							jQuery(this).removeClass('hide');
						}else{
							jQuery(this).addClass('hide');
						}
					});
				}

				if(n_activePage == totalpage ){
					jQuery('.ip-media-pagination-next').hide();
				}else{
					jQuery('.ip-media-pagination-next').show();
				}
				if(n_activePage > 1 ){
					jQuery('.ip-media-pagination-prev').show();
				}else{
					jQuery('.ip-media-pagination-prev').hide();
				}

			});

			// Prev Paginate
			jQuery( '.ip-media-pagination-prev' ).on( "click", function() {
				var p_activeTab = jQuery('.ip-media-filter ul li.active').text();
				var p_activePage = 0;
				p_activePage = parseInt(jQuery('.ip-media-pagination li.active').text());
				p_activePage = p_activePage - 1;

				if(p_activePage > 0){
					jQuery('.ip-media-pagination li.active').removeClass('active');	
					var p_toShow = p_activeTab+'_page_'+p_activePage;

					// Highlight new button
					jQuery('.ip-media-pagination li').each( function() {
						if(parseInt(jQuery(this).text()) == p_activePage){
							jQuery(this).addClass('active');
						}
					});
					// Display New Paginate
					jQuery('#'+p_activeTab +' .ip-media-col').each( function() {
						if(jQuery(this).hasClass(p_toShow)){
							jQuery(this).removeClass('hide');
						}else{
							jQuery(this).addClass('hide');
						}
					});
				}

				if(p_activePage == 1 ){
					jQuery('.ip-media-pagination-prev').hide();
				}else{
					jQuery('.ip-media-pagination-prev').show();
				}
				if(p_activePage < totalpage ){
					jQuery('.ip-media-pagination-next').show();
				}else{
					jQuery('.ip-media-pagination-next').hide();
				}
			});
		},

		initTogglePagination: function(){
			var $obj = this;
			//jQuery( '.ip-media-filter ul li a' ).on( "click", function() {
				var pagiCon = jQuery('.ip-media-pagination ul');
				var reHtml = '';
				var click_tab = jQuery('.ip-media-filter li.active').text();
				var showPerPage = jQuery('#'+click_tab + ' .ip-media-col').length;

				showPerPage = showPerPage / 6;

				if( showPerPage == Math.floor(showPerPage) ){
				}else{
					showPerPage++;
				}

				var totalPagination = Math.floor(showPerPage);

				for (var i = 1; i <= totalPagination; i++) {
					reHtml += '<li '+ ( ( i == 1 ) ? 'class="active"' : '' ) +'><a href="#">'+i+'</a></li>';
				}

				pagiCon.html(reHtml);
				n_activePage = null;
				$obj.initMediaPagination();
			
			//});


			
		},

		initImageLazyLoad: function(){
			jQuery('.ip-media-col').each( function(){
				var image = jQuery(this).find('canvas').attr('data-image');
				var logo = jQuery(this).find('img').attr('data-logo');
				var iframe = jQuery(this).find('iframe').attr('data-iframe');
				jQuery(this).find('canvas').attr('style', 'background-image: url('+image+')');
				jQuery(this).find('img').attr('src', logo);
				jQuery(this).find('img').removeClass('hide');
				jQuery(this).find('iframe').attr('src', iframe);
			});
		},
		initAjaxMedia: function(){
			var obj = this;
			$('.ip-media-filter a').on('click', function(){
				jQuery('.ip-media-pagination-prev').hide();
				var tab = jQuery(this).text();

				//if(jQuery('.ip-media-list #'+tab + ' .row .ip-media-col').length == 0){
					jQuery('.ip-media-list #'+tab+ ' .row').html('<img src="https://www.jillszeder.com/wp-content/themes/jillszeder.com/images/loading.gif" style="background-position: center center; width: 10%; margin-left: 45%;">');
			    
				    jQuery.ajax({
			            type: "POST",
			            url: ajaxurl,
			            data: {
			                action: "in_the_media",
			                tab: tab,
			            },
			            success: function (response) {
			            	// var data = jQuery.parseJSON(response);
			                jQuery('.ip-media-list #'+tab+ ' .row').html(response);

			                // obj.initImageLazyLoad();
			                obj.initTogglePagination();
			            }
			        });
				//}
				
			});
			
			jQuery('.ip-media-col').chainHeight();
		}
		
	}
	jQuery(document).ready( function() {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
		app.initPopUpiframe();
		app.initTabFunction();
		app.initMediaPagination();
		app.initMediaPaginationNextPrev();
		//app.initTogglePagination();
		app.initAjaxMedia();
		
	});
	
	jQuery(window).on('load', function(){
		// app.initImageLazyLoad();
	})


})(jQuery);
