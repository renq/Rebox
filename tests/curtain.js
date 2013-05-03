"use strict";

test( "getElement returns jquery", function() {
	var curtain = new Rebox.Curtain();
	ok( !!curtain.getElement().jquery , "Passed!" );
});

test( "hide and show", function() {
	var curtain = new Rebox.Curtain();
	ok( curtain.getElement().is(':hidden') );
	curtain.show();
	ok( curtain.getElement().is(':visible') );
	curtain.hide();
	ok( curtain.getElement().is(':hidden') );
});