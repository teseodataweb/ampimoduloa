/***Schedule A Showing***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

	jQuery('#IDX-scheduleshowingHeader').html(function (i, t) {
	  var words = t.split(/\s+/)
		return "<span>" + words.slice(0,2).join(" ") + "</span> " + words.slice(2).join(" ")
	});
});