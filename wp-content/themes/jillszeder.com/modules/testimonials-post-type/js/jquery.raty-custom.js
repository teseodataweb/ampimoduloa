jQuery(document).ready(function ($) {
    

    $("#star_rate").raty({
        half: true,
        precision: true,
        starOff: testimonial_object.current_url + '/images/star-off.png',
        starOn: testimonial_object.current_url + '/images/star-on.png',
        starHalf: testimonial_object.current_url + '/images/star-half.png',
        score: function () {
            return $(this).attr('data-rating');
        },
        click: function (score, evt) {
            $("#star_val").val(score);
        }
    });
});

    var ctrRate = 0;
    jQuery(window).one('scroll mousemove touchmove', function(){
        ctrRate++;
        if ( ctrRate == 1 ) {
            $('.star_rating_display').raty({
                readOnly: true,
                score: function () {
                    return $(this).attr('data-rating');
                },
                half: true,
                precision: true,
                starOff: testimonial_object.current_url + '/images/star-off.png',
                starOn: testimonial_object.current_url + '/images/star-on.png',
                starHalf: testimonial_object.current_url + '/images/star-half.png',
            });
        }
    });
