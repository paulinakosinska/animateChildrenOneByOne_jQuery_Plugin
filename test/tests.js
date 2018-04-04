QUnit.test("li fadeIn test", function(assert) {
  var done = assert.async();

  $('#test1Ul').animateChildrenOneByOne('fadeIn', 1, 1);
  setTimeout (function() {
    var isVisible = $('#test1Ul > li').is(":visible");
    assert.ok( isVisible , "passed");
    done();
 }, 15 );
});


QUnit.test("li fadeOut test", function(assert) {
  var done = assert.async();
  $('#test2Ul').animateChildrenOneByOne('fadeOut', 1, 1);
  setTimeout (function() {
    var isVisible = $('#test2Ul > li').is(":visible");
    var isNotVisible = !isVisible;
    assert.ok( isNotVisible , "passed");
    done();
  }, 30 );
});