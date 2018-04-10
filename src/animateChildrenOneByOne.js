$.fn.animateChildrenOneByOne = function (animate, delay, duration) {
	delay = (delay !== undefined) ? delay : 2000;
	duration = (duration !== undefined) ? duration : 500;
	animate = (animate !== undefined) ? animate : "fadeIn";
	
	this.each(function () {
		var i = 0;
		$(this).children().each(function () {
			var currentElement = $(this);
			i++;
			setTimeout(function () {
				try {
					currentElement[animate](duration);
				} catch (err) {
					console.error(`Invalid animation name: ${animate} [${err}]`);
				}
			}, i * delay);
		});
	})

};