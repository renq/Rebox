"use strict";

/**
 * @author Michał Lipek (michal@lipek.net)
 * 
 */

var Rebox = {};

Rebox.defaults = {
	library: jQuery,
	prefix: 'rebox-',
	plugins: {
		image: 'Image'
	}
};


(function() {
	// private
	var curtain,
		container,
		getCurtain = function() {
				return curtain || (curtain = new Rebox.Curtain());
			},
		getContainer = function() {
				return container || (container = new Rebox.Container());
			},
		getPlugin = function(inputObject) {
			var realName = Rebox.defaults.plugins[inputObject.type];
			return new Rebox[realName](inputObject, getContainer());
		};

	// public interface
	Rebox.open = function(input) {
		var inputObject = Rebox.inputParser(input);
		try {
			var plugin = getPlugin(inputObject);
			plugin.show();
		}
		catch (e) { 
			console.error('Rebox: plugin "' + inputObject.type + '" not found!');
			return;
		}
		getCurtain().show();
		getContainer().show();
	};
	
	Rebox.close = function() {
		getCurtain().hide();
		getContainer().hide();
	};
	
})(Rebox.defaults.library);

