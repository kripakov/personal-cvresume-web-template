$(document).ready(function() {
	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$(".menu-author").slideToggle();
		return false;
	});
});