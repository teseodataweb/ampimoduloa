/***About Us***/



( function($) {



	var app = {



		initHover: function(){

			jQuery('.team-item').each(function(){

	          jQuery(this).mouseenter(function () {

	                jQuery('.agent-hover', this).addClass('hovered');

					jQuery('.agent-desc', this).addClass('active');

	            }).mouseleave(function () {

	                jQuery('.agent-hover', this).removeClass('hovered');

					jQuery('.agent-desc', this).removeClass('active');

	            });

	        });

		},

		initAgentSlider: function(){

			jQuery('.family-bottom').slick({

				dots: false,

				infinite: true,

				speed: 300,

				slidesToShow: 5,

				slidesToScroll: 1,

				arrows: false,

				autoplay:true,

				responsive: [

				{

				  breakpoint: 992,

				  settings: {

				    slidesToShow: 2,

				    slidesToScroll: 1,

				    infinite: true

				  }

				},

				{

				  breakpoint: 768,

				  settings: {

				    slidesToShow: 1,

				    slidesToScroll: 1,

				    arrows:false

				  }

				}

				// You can unslick at a given breakpoint now by adding:

				// settings: "unslick"

				// instead of a settings object

				]

				});

		}



	}



	jQuery(document).ready( function() {

		jQuery('.custom-breadcrumbs').appendTo('.ip-banner');

		

		app.initHover();

		//app.initAgentSlider();

		

	});



})(jQuery);