$(document).ready(function() {
	function handler1() {
		$(this).toggleClass("on");
		$(".menu-author").show("slow");
	    $(this).animate({"margin-top":"38px", "margin-left":"25px", "width": "33px"});
	    $(this).one("click", handler2);
	}
	function handler2() {
	    $(this).animate({"margin-top":"48px", "margin-left":"85px", "width": "45px"});
	    $(".menu-author").hide("slow");
	    $(this).toggleClass("on");
	    $(this).one("click", handler1);
	}
	$("#toggle").one("click", handler1);
});