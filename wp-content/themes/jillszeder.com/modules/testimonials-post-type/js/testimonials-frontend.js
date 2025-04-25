(function ($) {

    var app = {

        mobile_width: 991,

        init: function () {

            this.testimonials_show();
            this.testimonials_popup();
        },

        testimonials_popup: function () {

            $data = '';
            $dataName = '';
            $dataStar = '';
            $('.aix-testimonials-poup').on('click', function () {

                $data = $(this).data('content');
                $dataName = $(this).data('name');
                $dataStar = $(this).data('start');
            });

            $('.aix-testimonials-poup').aiosPopup({
                type: 'inline',
                preloader: false,
                focus: '#username',
                modal: true,
                callbacks: {
                    open: function () {

                        var aiosContent = $('.aiosp-content');
                        aiosContent.addClass('aios-popup-body');
                        aiosContent.addClass('aix-testimonial-wrap');
                        $('.aios-popup-body').append('<button title="%title%" type="button" class="aiosp-close">&#215;</button>')
                        aiosContent.parent().append('<div class="outside-content"></div>');
                        $('.outside-content').on('click', function () {
                            $(this).aiosPopup('close');
                        });

                        $('.aios-popup-body div').html('<div class="star_rating_display" data-rating="' + $dataStar + '"></div><p class="aix-testimonial-full">' + $data + '</p><h2>' + $dataName + '</h2>');

                        $('.star_rating_display').raty({
                            readOnly: true,
                            score: function () {
                                return $(this).attr('data-rating');
                            },
                            half: true,
                            starOff: testimonial_object.current_url + '/images/star-off.png',
                            starOn: testimonial_object.current_url + '/images/star-on.png',
                            starHalf: testimonial_object.current_url + '/images/star-half.png',
                        });

                    }
                }
            });

        },
        testimonials_show: function () {

            $(".aios-testimonials-lists:lt(7)").show();

            $('.show-more-testimonials').on('click', function () {

                $('.aios-testimonials-lists').fadeIn();
                $(this).hide();
            });
            
            $(".aios-testimonials-lists > div").chainHeight({
                breakpoints: [
                    {
                        min: 992,
                        max: 1980
                    }
                ]
            });
        }

    }


    $(document).ready(function () {

        app.init();

    });

    $(window).on('resize', function () {



    });


})(jQuery);
