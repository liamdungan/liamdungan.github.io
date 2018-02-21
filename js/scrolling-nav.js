$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 700);
});



//show nav bar when scrolled 50px down
$(document).ready(function() {
	var dist = 50;
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > dist) {
			if (($("#nav").is(":visible") === false)) {
				$('#nav').fadeIn('slow');
			}
		} else {
			if ($("#nav").is(":visible")) {
				$('#nav').hide();
			}
		}
	});
});