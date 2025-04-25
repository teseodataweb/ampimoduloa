/*

 * Template Name: Blog

 */

( function($) {


	var app = {
		modBlogPagination: function(){
			jQuery('<div class="blog-page-num"></div>').appendTo('.blog-pagination');
			jQuery('.blog-page-num').insertBefore('.next.page-numbers');
			jQuery('.page-numbers').each(function(){
				if(jQuery(this).hasClass('prev') || jQuery(this).hasClass('next')) {
				} else {
					jQuery(this).appendTo('.blog-page-num');
				}
			});
			jQuery('.blog-pagination .prev.page-numbers').addClass('blog-nav blog-prev');
			jQuery('.blog-pagination .next.page-numbers').addClass('blog-nav blog-next');
		},
	}

	jQuery(document).ready( function() {
		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

		app.modBlogPagination();
	});

	jQuery(window).on('load', function(){});

})(jQuery);

