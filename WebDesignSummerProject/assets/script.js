$(document).ready(function(){


	// $(".desk3").hasClass("desk3-dim")

	$('#text').click(function() {
		$('html,body').animate({
			scrollTop: $('.whitebackground2').offset().top
		}, 300);
	});

	$('#text2').click(function() {
		$('html,body').animate({
			scrollTop: $('.whitebackground3').offset().top
		}, 300);
	});



	$(".desk2").click(function(){
		if ($(".desk2").hasClass("desk2-dim")){
			$(".desk2").removeClass("desk2-dim");
			$(".desk2").addClass("desk2-active");
			$(".desk3").css({"display": "none"});
			$(".desk4").css({"display": "none"});
			$(".desk5").css({"display": "none"});
		}
		else {
			$(".desk2").removeClass("desk2-active");
			$(".desk2").addClass("desk2-dim");
			$(".desk3").css({"display": "show"});
			$(".desk4").css({"display": "show"});
			$(".desk5").css({"display": "show"});
		}

	})


	$(".desk3").click(function(){
		if ($(".desk3").hasClass("desk3-dim")){
			$(".desk3").removeClass("desk3-dim");
			$(".desk3").addClass("desk2-active");
			$(".desk2").css({"display": "none"});
			$(".desk4").css({"display": "none"});
			$(".desk5").css({"display": "none"});
		}
		else {
			$(".desk3").removeClass("desk3-active");
			$(".desk3").addClass("desk3-dim");
			$(".desk2").css({"display": "show"});
			$(".desk4").css({"display": "show"});
			$(".desk5").css({"display": "show"});

		}

	})




		$(".desk4").click(function(){
		if ($(".desk4").hasClass("desk4-dim")){
			$(".desk4").removeClass("desk4-dim");
			$(".desk4").addClass("desk4-active");
			$(".desk2").css({"display": "none"});
			$(".desk3").css({"display": "none"});
			$(".desk5").css({"display": "none"});

		}
		else {
			$(".desk4").removeClass("desk4-active");
			$(".desk4").addClass("desk4-dim");
			$(".desk2").css({"display": "show"});
			$(".desk3").css({"display": "show"});
			$(".desk5").css({"display": "show"});
		}

	})



	$(".desk5").click(function(){
		if ($(".desk5").hasClass("desk5-dim")){
			$(".desk5").removeClass("desk5-dim");
			$(".desk5").addClass("desk5-active");
			$(".desk2").css({"display": "none"});
			$(".desk3").css({"display": "none"});
			$(".desk4").css({"display": "none"});
		}
		else {
			$(".desk5").removeClass("desk5-active");
			$(".desk5").addClass("desk5-dim");
			$(".desk2").css({"display": "show"});
			$(".desk3").css({"display": "show"});
			$(".desk4").css({"display": "show"});

		}

	})



	$(".office3").click(function(){
		if ($(".office3").hasClass("office3-dim")){
			$(".office3").removeClass("office3-dim");
			$(".office3").addClass("office3-active");
			$(".office2").css({"display": "none"});
			$(".office4").css({"display": "none"});
			$(".office5").css({"display": "none"});
		}
		else {
			$(".office3").removeClass("office3-active");
			$(".office3").addClass("office3-dim");
			$(".office2").css({"display": "show"});
			$(".office5").css({"display": "show"});
			$(".office4").css({"display": "show"});
		}
	})

	$(".office4").click(function(){
		if ($(".office4").hasClass("office4-dim")){
			$(".office4").removeClass("office4-dim");
			$(".office4").addClass("office4-active");
			$(".office2").css({"display": "none"});
			$(".office3").css({"display": "none"});
			$(".office5").css({"display": "none"});
		}
		else {
			$(".office4").removeClass("office4-active");
			$(".office4").addClass("office4-dim");
			$(".office2").css({"display": "show"});
			$(".office5").css({"display": "show"});
			$(".office3").css({"display": "show"});
		}
	})



	$(".office5").click(function(){
		if ($(".office5").hasClass("office5-dim")){
			$(".office5").removeClass("office5-dim");
			$(".office5").addClass("office5-active");
			$(".office2").css({"display": "none"});
			$(".office3").css({"display": "none"});
			$(".office4").css({"display": "none"});
		}
		else {
			$(".office5").removeClass("office5-active");
			$(".office5").addClass("office5-dim");
			$(".office2").css({"display": "show"});
			$(".office4").css({"display": "show"});
			$(".office3").css({"display": "show"});
		}
	})


	$(".office2").click(function(){
		if ($(".office2").hasClass("office2-dim")){
			$(".office2").removeClass("office2-dim");
			$(".office2").addClass("office2-active");
			$(".office5").css({"display": "none"});
			$(".office3").css({"display": "none"});
			$(".office4").css({"display": "none"});
		}
		else {
			$(".office2").removeClass("office2-active");
			$(".office2").addClass("office2-dim");
			$(".office5").css({"display": "show"});
			$(".office4").css({"display": "show"});
			$(".office3").css({"display": "show"});
		}
	})








});