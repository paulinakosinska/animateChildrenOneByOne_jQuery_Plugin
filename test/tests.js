QUnit.test('li fadeIn test', function (assert) {
	var done = assert.async();
	$('#test1Ul').animateChildrenOneByOne('fadeIn', 1, 1);
	setTimeout(function () {
		var isVisible = $('#test1Ul > li').is(':visible');
		assert.ok(isVisible, 'passed');
		done();
	}, 15);
});


QUnit.test('li fadeOut test', function (assert) {
	var done = assert.async();
	$('#test2Ul').animateChildrenOneByOne('fadeOut', 1, 1);
	setTimeout(function () {
		var isVisible = $('#test2Ul > li').is(':visible');
		var isNotVisible = !isVisible;
		assert.ok(isNotVisible, 'passed');
		done();
	}, 30);
});

QUnit.test('animate multiple elements', function (assert) {
	var done = assert.async();
	$('.multiple-list').animateChildrenOneByOne('fadeOut', 20, 1);
	setTimeout(function () {
		var isVisible = $('.multiple-list > li').is(':visible');
		var isNotVisible = !isVisible;
		assert.ok(isNotVisible, 'passed');
		done();
		// 100 = 4*20 + 20 (as backup time)
	}, 100);
});