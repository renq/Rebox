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
				})
			});
		};

	// public
	Rebox.Curtain = function() {
		this.$element = $('<div>')
			.addClass(Rebox.defaults.prefix + 'curtain')
			.css({
				height: $document.height(),
				width: $document.width(),
			})
			.hide();
		attachEvents(this);
		$('body').append(this.$element);
	};
	
	Rebox.Curtain.prototype.getElement = function() {
		return this.$element;
	};
	
	Rebox.Curtain.prototype.show = function() {
		this.getElement().fadeIn();
	};
	
	Rebox.Curtain.prototype.hide = function() {
		this.getElement().fadeOut();
	};
	
})(Rebox.defaults.library);

