/***Coral Gables***/

jQuery(document).ready(function(){


	var miamiContainer = jQuery('.miamibeach-map-wrap');
	var miamiMap = jQuery('.miamibeach-map');
	var miamiMapCanvas = miamiMap.find('.miamibeach-map-canvas');

	miamiMap.find('map area').on('hover', function() {
		var hover  = jQuery('.miamibeachmap-hover.' + jQuery(this).attr('id'));
		hover.toggleClass('active');		
	});

	mapresponsiveness();
	jQuery(window).resize(mapresponsiveness);

	function mapresponsiveness(){
	    var map = miamiMap;
	    var mapOrigWidth = 621;
	    var mapOrigHeight = 831;
	    var container = miamiContainer;
	    var containerWidth = container.width();
	    var scale = containerWidth/mapOrigWidth;
	    scale = scale > 1 ? 1 : scale;
	    
	    map.css({
	       transform:'scale('+scale+')',
	       transformOrigin:'0 0'
	    });
	    
	    container.css({
	      height: (mapOrigHeight * scale)
	    })
	}


});