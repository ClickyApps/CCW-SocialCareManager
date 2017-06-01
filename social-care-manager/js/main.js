$(function() {

	var menuOpen = false;
	var menuButton = $('.open_menu');

	function showMenu() {
		$('nav').addClass('open').attr('aria-hidden', 'false').find('a').eq(0).focus();
		$('.container').addClass('open');
		menuButton.text('Close the menu');
		menuOpen = true;
	}

	function hideMenu() {
		$('nav').removeClass('open').attr('aria-hidden', 'true');
		$('.container').removeClass('open');
		menuButton.text('Open the menu').focus();
		menuOpen = false;
	}

	menuButton.click(function(e) {
		e.preventDefault();
		if (menuOpen) {
			hideMenu();
		} else {
			showMenu();
		}
	});

	$('body').on('swipeleft', function() {
		if ($('body').find('.landing').length === 0) {
			if (!menuOpen) {
				showMenu();
			}
		}
	});

	$('body').on('swiperight', function() {
		if ($('body').find('.landing').length === 0) {
			if (menuOpen) {
				hideMenu();
			}
		}
	});

});