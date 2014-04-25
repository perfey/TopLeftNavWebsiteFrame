$(document).ready(function () {
	$('.show-left-nav').click(function () {
		if ($('.content').css('margin-left') == '0px') {
			$('.content').animate({
		    	marginLeft:'300px'
		    });
			setTimeout(function () {
				$('.left-nav').addClass('nomal-index');
			}, 300);
		} else {
			$('.left-nav').removeClass('nomal-index');
			$('.content').animate({
		    	marginLeft:'0px'
		    });
		}
	});

	$('.nav-home a').click(function (event) {
		if ($(event.target).next().hasClass('nav-open')) {
			$(event.target).next().slideUp().removeClass('nav-open');
			return false;
		}
		$('.nav-home .nav-open') && $('.nav-home .nav-open').slideUp().removeClass('nav-open');
		$(event.target).next().slideToggle().toggleClass('nav-open');
		return false;
	}); 
});