$.fn.animateChildrenOneByOne = function (animate, delay, duration) {
	delay = (delay !== undefined) ? delay : 2000;
	duration = (duration !== undefined) ? duration : 500;

	this.each(function() {
		var i = 0;
		$(this).children().each(function () {
			var currentElement = $(this);
			i++;
			setTimeout(function() {
				switch (animate) {
				case 'fadeIn':
					currentElement.fadeIn(duration);
					break;
				case 'fadeOut':
					currentElement.fadeOut(duration);
					break;
				case 'slideDown':
					currentElement.slideDown(duration);
					break;
				case 'slideUp':
					currentElement.slideUp(duration);
					break;
				case 'hide':
					currentElement.hide(duration);
					break;
				default:
					currentElement.show(duration);
					break;
				}
			}, i * delay);
		});
	})
	
};
