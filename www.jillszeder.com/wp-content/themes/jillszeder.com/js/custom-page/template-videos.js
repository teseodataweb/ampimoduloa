/***Videos***/

( function($) {

	var chkTab = false;

	var app = {

		initToggleButton: function(){

			var obj = this;

			jQuery('.vid-top-btns a').click(function(e){

				e.preventDefault();

				chkTab = true;

				var toShow = jQuery(this).attr('class');

				toShow =  toShow.replace(" aios-initial-setup-dead-link", "");

				jQuery('.vid-top-btns a').removeClass('active');

				jQuery(this).addClass('active');



				jQuery('.vid-thumb-single').addClass('hide');

				jQuery('.vid-thumb-single.'+toShow).removeClass('hide');	

				if(jQuery(this).hasClass('all')){

					jQuery('.vid-thumb-single').removeClass('hide');

					jQuery('.vid-pagination').removeClass('hide');



					var todisplayLink = jQuery('.vid-thumb div.vid-thumb-single').first().attr('data-vid-thumb-link');

					var todisplayImg = jQuery('.vid-thumb div.vid-thumb-single').first().find('.vid-thumb-img').attr('data-image');

					

					jQuery('.vid-main .aios-frame-container').attr('data-iframe', todisplayLink);

					jQuery('.vid-main canvas').attr('style', 'background-image: url('+todisplayImg+')');

					obj.initAllPagination();

				}else{

					jQuery('.vid-pagination').addClass(' hide');

					var todisplayLink = jQuery('.vid-thumb div.vid-thumb-single.'+toShow).first().attr('data-vid-thumb-link');

					var todisplayImg = jQuery('.vid-thumb div.vid-thumb-single.'+toShow).first().find('.vid-thumb-img').attr('data-image');

					

					jQuery('.vid-main .aios-frame-container').attr('data-iframe', todisplayLink);

					jQuery('.vid-main canvas').attr('style', 'background-image: url('+todisplayImg+')');

				}

			});

			

		},

		initPickThumbnail: function(){
			var devwtop = jQuery(window).width();
			if (devwtop <= 991) {
            	jQuery('.vid-main-img iframe').remove();
                console.log("mobile ip videos");
    			setTimeout(function(){
					jQuery('<iframe width="1140" height="653" src="https://www.youtube.com/embed/'+jQuery('.vid-thumb div.vid-thumb-single').first().attr('data-vid-thumb-link')+'?autoplay=1"></iframe>').appendTo(jQuery('.vid-main-img'));
					// jQuery('iframe[allow="autoplay"]').remove();
				}, 500);
            }
			var todisplayLink = jQuery('.vid-thumb div.vid-thumb-single').first().attr('data-vid-thumb-link');

			var todisplayImg = jQuery('.vid-thumb div.vid-thumb-single').first().find('.vid-thumb-img').attr('data-image');
			var ctr = 0;
			jQuery('.vid-main .aios-frame-container').attr('data-iframe', todisplayLink);

			jQuery('.vid-main canvas').attr('style', 'background-image: url('+todisplayImg+')');

			jQuery('.vid-main-single a').on('click', function() {
				if (!jQuery(this).hasClass('clicked')) {
					jQuery(this).addClass('clicked');

					ctr++;
					jQuery('.vid-main-img iframe').remove();

					var id = jQuery(this).attr('data-iframe');
					var image = jQuery(this).find('.vid-thumb-img').attr('data-image');
					jQuery('.vid-main .aios-frame-container').attr('data-iframe', id);
					jQuery('.vid-main canvas').attr('style', 'background-image: url('+image+')');

					setTimeout(function(){
						console.log('test1');
						jQuery('.vid-main-img iframe').remove();
						jQuery('.aios-frame-container').addClass('active-frame');
						jQuery('<iframe width="1140" height="653" allow="autoplay" src="https://www.youtube.com/embed/'+id+'?autoplay=1"></iframe>').appendTo(jQuery('.vid-main-img'));
						//jQuery('.aios-frame-container').click();
						// jQuery('iframe[allow="autoplay"]').remove();
					}, 500);

				}
			});

			jQuery('.vid-thumb .vid-thumb-single').click( function(){
				ctr++;
				jQuery('.vid-main-img iframe').remove();

				var id = jQuery(this).attr('data-vid-thumb-link');
				var image = jQuery(this).find('.vid-thumb-img').attr('data-image');
				jQuery('.vid-main .aios-frame-container').attr('data-iframe', id);
				jQuery('.vid-main canvas').attr('style', 'background-image: url('+image+')');

				var devw = jQuery(window).width();
				if (devw > 991) {
					setTimeout(function(){
						console.log('test1');
						jQuery('.vid-main-img iframe').remove();
						jQuery('.aios-frame-container').addClass('active-frame');
						jQuery('<iframe width="1140" height="653" allow="autoplay" src="https://www.youtube.com/embed/'+id+'?autoplay=1"></iframe>').appendTo(jQuery('.vid-main-img'));
						//jQuery('.aios-frame-container').click();
						// jQuery('iframe[allow="autoplay"]').remove();
					}, 500);
				}
	            if (devw <= 991) {
	            	console.log('test2');
	            	jQuery('.vid-main-img iframe').remove();
	                console.log("mobile ip videos");
	    			setTimeout(function(){
						jQuery('<iframe width="1140" height="653" src="https://www.youtube.com/embed/'+id+'?autoplay=1"></iframe>').appendTo(jQuery('.vid-main-img'));
						// jQuery('iframe[allow="autoplay"]').remove();
					}, 500);
	            }
				
				// if(jQuery('.vid-main-img iframe').attr('scr').indexOf('rel=0') == -1){
				// 	var removeIframe = jQuery(this);
				// 	jQuery(removeIframe).remove();
				// }
				
                jQuery('html,body').animate({
        	        scrollTop: jQuery('.vid-main-img').offset().top - 110 },
        	    'slow');
        	    console.log('ctr' + ctr);
			});

		},

		// initPickPlayList: function($id){

		// 	console.log($id);

	 //        jQuery.ajax({

	 //            type: "POST",

	 //            url: ajaxurl,

	 //            data: {

	 //                action: "get_by_playlist",

	 //                playlistId: $id

	 //            },

	 //            success: function (response) {

	 //            	var data = jQuery.parseJSON(response);

	 //            	jQuery('.vid-thumb').html(data.html);

	 //            }

	 //        });

		// },

		initAllPagination: function(){

			jQuery('.vid-thumb-single').not('.all-0').addClass('hide');



			var numPage = '';

			var totalPages = jQuery('.vid-thumb-single').length;

			totalPages = totalPages / 4;

			if(parseInt(totalPages) != totalPages){

				totalPages++;

			}

			for (var i = 1; i <= totalPages; i++) {

				numPage +='<a href="#" class="'+ ( ( i == 1) ? 'active' : '' ) +'" >'+i+'</a>';

			}

			jQuery('.vid-page-num').html(numPage);



			jQuery('.vid-page-num a').click( function() {

				jQuery('.vid-page-num a').removeClass('active');

				jQuery(this).addClass('active');



				var toshow = parseInt(jQuery(this).text()) - 1;

				jQuery('.vid-thumb-single').addClass('hide');

				if(jQuery('li a.all').hasClass('active')){

					if(jQuery('.vid-thumb-single.all-'+toshow).length){ 

						jQuery('.vid-thumb-single.all-'+toshow).removeClass('hide');

					}else{

						jQuery('.vid-thumb-single').addClass('hide');

					}

				}

			});

		},

		initAllPaginationPrevNext: function(){

			//Prev

			jQuery('.fl-prev').click( function() {

				var prevtoshow = 0;

				var prev = parseInt(jQuery('.vid-page-num a.active').text());

				if(prev == 1){

					//jQuery('.fl-prev').hide();

				}else{

					var toactive = parseInt(jQuery('.vid-page-num a.active').text());

					toactive = toactive - 1;

					jQuery('.vid-page-num a').removeClass('active');

					jQuery('.vid-page-num a').each( function() {

						if(jQuery(this).text() == toactive){

							jQuery(this).addClass('active');

							prevtoshow = parseInt(jQuery(this).text()) - 1;

						}

					});



					jQuery('.vid-thumb-single').addClass('hide');

					if(jQuery('li a.all').hasClass('active')){

						if(jQuery('.vid-thumb-single.all-'+prevtoshow).length){ 

							jQuery('.vid-thumb-single.all-'+prevtoshow).removeClass('hide');

						}else{

							jQuery('.vid-thumb-single').addClass('hide');

						}

					}

				}

			});

			//Next

			jQuery('.fl-next').click( function() {

				var nexttoshow = 0;

				var next = parseInt(jQuery('.vid-page-num a.active').text());

					var toactive = parseInt(jQuery('.vid-page-num a.active').text());

					toactive = toactive + 1;

					jQuery('.vid-page-num a').removeClass('active');

					jQuery('.vid-page-num a').each( function() {

						if(jQuery(this).text() == toactive){

							jQuery(this).addClass('active');

							nexttoshow = parseInt(jQuery(this).text() - 1);

						}

					});

					jQuery('.vid-thumb-single').addClass('hide');

					if(jQuery('li a.all').hasClass('active')){

						if(jQuery('.vid-thumb-single.all-'+nexttoshow).length){ 

							jQuery('.vid-thumb-single.all-'+nexttoshow).removeClass('hide');

						}else{

							jQuery('.vid-thumb-single').addClass('hide');

						}

					}

			});

		}

	}

	jQuery(document).ready( function() {

		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

		app.initToggleButton();

		app.initPickThumbnail();
		jQuery('.ytp-pause-overlay.ytp-scroll-min').hide();
		// app.initAllPagination();

		// app.initAllPaginationPrevNext();

		



	});

	jQuery(window).on('load', function(){



	})

})(jQuery);

