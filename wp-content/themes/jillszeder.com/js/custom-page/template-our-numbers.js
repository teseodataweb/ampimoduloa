/***Our Numbers***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

    jQuery('p#breadcrumbs span:nth-child(2) a').attr('href', '/list-with-us/');

	jQuery('.stats-single').chainHeight({
        breakpoints: [
            {
                min: 768,
                max: 'none'
            }
        ]
	});
	
});
