$("#cards-fade-in-btn").click(function () {
    $("#cards-fade-in").animateChildrenOneByOne("fadeIn");
});
$("#cards-fade-out-btn").click(function () {
    $("#cards-fade-out").animateChildrenOneByOne("fadeOut");
});
$("#cards-slide-down-btn").click(function () {
    $("#cards-slide-down").animateChildrenOneByOne("slideDown");
});
$("#cards-slide-up-btn").click(function () {
    $("#cards-slide-up").animateChildrenOneByOne("slideUp");
});
$("#ul-fade-out-btn").click(function () {
    $("#ul-fade-out > ul").animateChildrenOneByOne("fadeOut");
});
$("#cards-fade-in-btn-delay").click(function () {
    $("#cards-fade-in-delay").animateChildrenOneByOne("fadeIn", 400);
});
$("#cards-fade-out-duration-btn").click(function () {
    $("#cards-fade-out-duration").animateChildrenOneByOne("fadeOut", 2000, 200);
});
$("#cards-slide-down-delay-duration-btn").click(function () {
    $("#cards-slide-down-delay-duration").animateChildrenOneByOne("slideDown", 1000, 800);
});

$(".btn-hide").click(function(){
    $(".hidden").hide();
});

$(".btn-show").click(function(){
    $(".show").show();
});
