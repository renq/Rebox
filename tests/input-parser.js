"use strict";

test( "parse string - image", function() {
	var input = "image.png";
	var parsed = Rebox.inputParser(input);
	
	ok( parsed.uri == 'image.png', 'ok!' );
	ok( parsed.type == 'image', 'ok!' );
});

test( "parse string - object", function() {
	var input = {
		uri: 'image.jpg',
		type: 'image'
	};
	var parsed = Rebox.inputParser(input);
	
	ok( parsed.uri == 'image.jpg', 'ok!' );
	ok( parsed.type == 'image', 'ok!' );
});

test( "parse string - wft?", function() {
	var input = 'file.data';
	var parsed = Rebox.inputParser(input);
	
	ok( parsed.uri == 'file.data', 'ok!' );
	ok( parsed.type == undefined, 'ok!' );
});
