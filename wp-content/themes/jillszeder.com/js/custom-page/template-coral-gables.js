/***Coral Gables***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

	jQuery('.corgab-map-pattern area').hover(function(){
		var areaalt = jQuery(this).attr('alt');
		jQuery('.corgab-map .corgab-map-hover').removeClass('active');
		jQuery('#' + areaalt).addClass('active');
	}, function(){
		var areaalt = jQuery(this).attr('alt');
		jQuery('#' + areaalt).removeClass('active');
	});


	jQuery('img[usemap]').rwdImageMaps();
});