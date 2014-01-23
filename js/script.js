/* HEPL RIA 2013 - Cours
 *
 * JS Document - /js/script.js
 *
 * coded by [YOUR NAME]
 * started at [DATE]
 */

/* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

// start your work here.


( function($) {
	"use strict";
	
	var iTrombiDelay = 8000,
		$trombiPhotos;
		
	var trombinext = function () {
		var $current, $next;
		( $current = $trombiPhotos.filter(":visible") ).delay(iTrombiDelay).fadeOut( function(){
			(($next = $current.next()).size() ? $next : $trombiPhotos.first()).fadeIn(trombinext);
		});
	};
	
	var clickFoto

	$( function(){
		
		( $trombiPhotos = $("#wrapper figure")).not(":first").hide();
		trombinext();
		
	});


}).call(this,jQuery);