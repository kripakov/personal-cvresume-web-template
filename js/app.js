$(document).ready(function() {
	$("#toggle").click(function() {
		$(this).toggleClass("on");
		//$(".menu-author").slideToggle();
		
		$(".menu-author").slideToggle(function(){
			$(".container.navigator .header a").animate({"margin-top":"85px", "margin-left":"25px"});
		});
		/*
		$('#toggle').toggle(function () {
		    $(".menu-author").css({"margin-top":"48px", "margin-left":"50px"});
		}, function () {
		    $(".menu-author").css({"margin-top":"5px", "margin-left":"25px"});
		});*/
		return false;
	});
});