$(document).ready(function () {
	$('.show-left-nav').click(function () {
		if ($('.content').css('margin-left') == '0px') {
			$('.content').animate({
		    	marginLeft:'300px'
		    });
		    $('.left-nav').css('display', 'block').animate({
		    	width:'300px'
		    });
		} else {
			$('.content').animate({
		    	marginLeft:'0px'
		    });
		    $('.left-nav').animate({
		    	width:'0px'
		    }, 500);
		    setTimeout(function () {
		    	$('.left-nav').css('display', 'none');	
		    }, 490);
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