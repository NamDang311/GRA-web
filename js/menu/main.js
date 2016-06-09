/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		
	}
 TweenMax.set($(".overlay"),{autoAlpha:0});
	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
            TweenMax.to($(".overlay"),1,{autoAlpha:0});
		}
		else {
			classie.add( bodyEl, 'show-menu' );
            TweenMax.to($(".overlay"),1,{autoAlpha:.8});
            
		}
		isOpen = !isOpen;
	}

	init();

})();