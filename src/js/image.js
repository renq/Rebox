"use strict";

/**
 * @author Michał Lipek (michal@lipek.net)
 * 
 */
(function($) {
	// private
	var $document = $(document),
		createHtml = function(image) {
			var uri = image.settings.uri;
			var $container = image.container.getElement();
			var $content = image.container.getContent(); 
			var img = new Image();
			img.src = uri;
			var borderWidth = $container.outerWidth() - $container.width();
			var borderHeight = $container.outerHeight() - $container.height();
			img.onload = function() {
				$container.animate({
					width: img.width,
					height: img.height,
					left: ($document.width()-img.width-borderWidth) / 2,
					top: ($document.height()-img.height-borderHeight) / 2
				}, 300);
				$container.promise().done(function() {
					image.container.disableLoading();
					var $img = $('<img>')
						.attr('src', img.src)
						.hide();
					$content.append($img);
					$img.fadeIn();
				});
			};
		};

	// public
	Rebox.Image = function(settings, container) {
		this.settings = settings;
		this.container = container;
	};
	
	Rebox.Image.prototype.show = function() {
		this.container.empty();
		this.container.enableLoading();
		createHtml(this);
	};
	
})(Rebox.defaults.library);

