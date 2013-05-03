"use strict";

/**
 * @author Michał Lipek (michal@lipek.net)
 * 
 */
var Rebox = Rebox || {};

(function($) {
	// private
	var closeButton = null,
		content = null,
		$document = $(document),
		createHtml = function(container) {
			var prefix = Rebox.defaults.prefix + 'container-';
			closeButton = $('<span>').addClass(prefix + 'close-button');
			content = $('<div>').addClass(prefix + 'content');
			container.getElement()
				.append(
					$('<div>').addClass(prefix + 'close')
						.append(closeButton)
				)
				.append(content);
		},
		attachEvents = function(container) {
			closeButton.click(function(e) {
				e.preventDefault();
				container.empty();
				Rebox.close();
			});
			$(window).resize(function() {
				container.getElement().css({
					left: '' + (($document.width()-container.getElement().outerWidth()) / 2) + 'px',
					top: '' + (($document.height()-container.getElement().outerWidth()) / 2) + 'px'
				});
			});
		};

	// public
	Rebox.Container = function() {
		this.$element = $('<div>')
			.addClass(Rebox.defaults.prefix + 'container')
			.hide()
			.appendTo($('body'));
		createHtml(this);
		attachEvents(this);
	};
	
	Rebox.Container.prototype.show = function() {
		this.getElement().fadeIn();
		this.getElement().css({
			left: '' + (($document.width()-this.getElement().outerWidth()) / 2) + 'px',
			top: '' + (($document.height()-this.getElement().outerHeight()) / 2) + 'px'
		});
	};
	
	Rebox.Container.prototype.hide = function() {
		this.getElement().fadeOut();
		this.empty();
	};
	
	Rebox.Container.prototype.getElement = function() {
		return this.$element;
	};
	
	Rebox.Container.prototype.getContent = function() {
		return content;
	};
	
	Rebox.Container.prototype.enableLoading = function() {
		this.getElement().addClass(Rebox.defaults.prefix + 'loading');
	};
	
	Rebox.Container.prototype.disableLoading = function() {
		this.getElement().removeClass(Rebox.defaults.prefix + 'loading');
	};
	
	Rebox.Container.prototype.empty = function() {
		content.empty();
	};

	
})(Rebox.defaults.library);

