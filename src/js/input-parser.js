"use strict";

/**
 * @author Michał Lipek (michal@lipek.net)
 * 
 */
(function() {
	// private
	var parseString = function(input) {
		var result = {
			uri: input,
			type: undefined
		};
		var fileExtension = input.split('.').pop().toLowerCase();
		
		switch (fileExtension) {
			case 'gif':
			case 'jpg':
			case 'jpeg':
			case 'png':
			case 'apng':
			case 'webp': {
				result.type = 'image';
				break;
			}
		}
		return result;
	};

	// public
	Rebox.inputParser = function(input) {
		// var output = $.extend(true, {}, input);
		if (typeof input == 'string') {
			return parseString(input);
		}
		return input;
	};
	
	
})();

