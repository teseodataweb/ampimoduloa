/***Global Connections***/

jQuery(document).ready(function(){
	jQuery('.custom-breadcrumbs').appendTo('.ip-banner');
	
    jQuery('.team-wrapper ul').slick({
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]
    });
    jQuery('.team-prev').click(function(){
        jQuery('.team-wrapper ul').slick('slickPrev');
    });
    jQuery('.team-next').click(function(){
        jQuery('.team-wrapper ul').slick('slickNext');
    });

    jQuery('p#breadcrumbs span:nth-child(2) a').attr('href', '/list-with-us/');
});