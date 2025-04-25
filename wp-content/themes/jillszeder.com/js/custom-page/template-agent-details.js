/***Agent Details***/
( function($) {
	var app = {
		
		initPagination: function(){
			var obj = this;

			jQuery('#al-list').easyPaginateAgentActiveNew({ 
			    paginateElement: 'div.al-prop',
			    elementsPerPage: 6
			});
			jQuery('#al-list-sold').easyPaginateAgentSold({
			    paginateElement: 'div.al-prop',
			    elementsPerPage: 6
			});

			jQuery('.active-container .ip-fp-pagi-inner a').click( function(){
				obj.initDbltapActive();
			});
			jQuery('.sold-container .ip-fp-pagi-inner a').click( function(){
				obj.initDbltapSold();
			});
			jQuery('#agentEmail').val(jQuery('.agent-email-custom').attr('data-email'));
			jQuery('a.prev').html('<span class="ai-font-arrow-b-p"></span><em>Prev</em>');
			jQuery('a.next').html('<em>Next</em><span class="ai-font-arrow-b-n"></span>');
			setTimeout(function(){ 
				jQuery('.agent-listing-loader').remove();
				jQuery('.al-list').removeClass('hide');
			}, 2500);
		},
		initDbltapActive: function(){
			jQuery('.active-container .al-list .al-prop a').click(function(d){
				var devW = jQuery(window).width();
				if(devW < 1200){
					d.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}

					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});
		},
		initDbltapSold: function(){
			jQuery('.sold-container .al-list .al-prop a').click(function(d){
				var devW = jQuery(window).width();
				if(devW < 1200){
					d.preventDefault();
					if(jQuery(this).hasClass('clicked_once')){
						window.location.href = jQuery(this).attr('href');
					}

					jQuery(this).parent().siblings().find('> a').removeClass('clicked_once');
					jQuery(this).addClass('clicked_once');
				}
			});
		},
	}
	jQuery(document).ready(function(){
		app.initPagination();
		app.initDbltapActive();
		app.initDbltapSold();

		jQuery('.agtd-breadcrumbs').appendTo('.ip-banner');
		jQuery('.ip-fp-pagi-inner a').click( function(){

		});
		
	});

	// var ctrFL = 0;  
 //  	var ctr = 0;
	// jQuery(window).scroll(function(){
 //  		ctrFL++;

 //      	if ( ctrFL == 1 ) {
 //      		jQuery(".al-prop canvas").each(function(){
	//              var datasrc = jQuery(this).attr("data-image");
	//             jQuery(this).attr("style","background-image: url(" + datasrc + ");");  
	//         });
 //      	}
	// });
})(jQuery);