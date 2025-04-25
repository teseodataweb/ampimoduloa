/***Login***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

	var idxtitle = jQuery('.IDX-wrapper-standard .IDX-panel-default>.IDX-panel-heading h2').html();
    // doing the transformation (adding the span) with a regular expression
    idxtitle = idxtitle.replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2");
    // update your text
    jQuery('.IDX-wrapper-standard .IDX-panel-default>.IDX-panel-heading h2').html(idxtitle);

    // or in one line:
    jQuery('.IDX-wrapper-standard .IDX-panel-default>.IDX-panel-heading h2').html().replace(/^([^\s]*)(.*)/, "<span class=\"first-word\">$1</span>$2");
});