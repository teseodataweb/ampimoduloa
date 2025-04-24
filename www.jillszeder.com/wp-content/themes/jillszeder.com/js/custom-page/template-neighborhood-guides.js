/***Neighborhood Guides***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

    jQuery('.ng-map-main area').hover(function(){
        var areaalt = jQuery(this).attr('alt');
        jQuery('.ng-map-hovers .' + areaalt).addClass('active');
        jQuery('.ng-btns #' + areaalt).addClass('active');
    }, function(){
        var areaalt = jQuery(this).attr('alt');
        jQuery('.ng-map-hovers .' + areaalt).removeClass('active');
        jQuery('.ng-btns #' + areaalt).removeClass('active');
    });

    jQuery('.ng-btns a').hover(function(){
        var linkid = jQuery(this).attr('id');
        jQuery('.ng-btns #' + linkid).addClass('active');
        jQuery('.ng-map-hovers .' + linkid).addClass('active');
    }, function(){
        var linkid = jQuery(this).attr('id');
        jQuery('.ng-btns #' + linkid).removeClass('active');
        jQuery('.ng-map-hovers .' + linkid).removeClass('active');
    });

    jQuery('img[usemap]').rwdImageMaps();
});