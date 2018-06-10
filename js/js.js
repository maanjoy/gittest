$(function() {

	$('.tab').tab({
		event: 'click',
		auto: false,
		before: function() {

		},
		after: function() {
			if ($('.tab .nav li:last').is('.current')) {
				$('body').addClass('on');
			} else {
				$('body').removeClass('on');
			}
		}
	});

	    function smallScreen() {
        var w = $(window).width();
        if (w < 1090) {
            $('body').addClass('small1090');
        } else {
            $('body').removeClass('small1090');
        };
    };
    smallScreen();
    $(window).resize(function() {
        smallScreen();
    });


});