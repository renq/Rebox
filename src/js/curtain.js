"use strict";

/**
 * @author Michał Lipek (michal@lipek.net)
 * 
 */
(function($) {
	// private
	var $document = $(document),
		attachEvents = function(curtain) {
			curtain.getElement().click(function(e) {
				e.preventDefault();
				Rebox.close();
			});
			$(window).resize(function() {
				curtain.getElement().css({
					height: $document.height(),
					width: $document.width(),
				});
			});
		};

	// public
	Rebox.Curtain = function() {
		this.$element = $('<div>')
			.addClass(Rebox.defaults.prefix + 'curtain')
			.css({
				height: $document.height(),
				width: $document.width(),
			});
		attachEvents(this);
		$('body').append(this.$element);
		// Fix for CSS animations that runs immediately after creation of element. 
		this.$element.outerWidth();
	};
	
	Rebox.Curtain.prototype.getElement = function() {
		return this.$element;
	};
	
	Rebox.Curtain.prototype.show = function() {
		this.getElement().addClass(Rebox.defaults.prefix + 'show');
	};
	
	Rebox.Curtain.prototype.hide = function() {
		this.getElement().removeClass(Rebox.defaults.prefix + 'show');
	};
	
})(Rebox.defaults.library);

