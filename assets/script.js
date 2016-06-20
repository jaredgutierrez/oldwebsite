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

	$(".email").hover(function(){
		if ($(".email").hasClass("email-hover")){
			$(".email").removeClass("email-hover");
			$(".email").addClass("email-nonhover");
	
		}
		else {
			$(".email").removeClass("email-nonhover");
			$(".email").addClass("email-hover");
		}
	

	})


	$(".resume").hover(function(){
		if ($(".resume").hasClass("resume-hover")){
			$(".resume").removeClass("resume-hover");
			$(".resume").addClass("resume-nonhover");
	
		}
		else {
			$(".resume").removeClass("resume-nonhover");
			$(".resume").addClass("resume-hover");
		}
	

	})


	$(".linkedin").hover(function(){
		if ($(".linkedin").hasClass("linkedin-hover")){
			$(".linkedin").removeClass("linkedin-hover");
			$(".linkedin").addClass("linkedin-nonhover");	
		}
		else {
			$(".linkedin").removeClass("linkedin-nonhover");
			$(".linkedin").addClass("linkedin-hover");
		}
	})

	$(".aboutMe").hover(function(){
		if ($(".aboutMe").hasClass("aboutMe-hover")){
			$(".aboutMe").removeClass("aboutMe-hover");
			$(".aboutMe").addClass("aboutMe-nonhover");	
		}
		else {
			$(".aboutMe").removeClass("aboutMe-nonhover");
			$(".aboutMe").addClass("aboutMe-hover");
		}
	})

	$(".professionalExperience").hover(function(){
		if ($(".professionalExperience").hasClass("professionalExperience-hover")){
			$(".professionalExperience").removeClass("professionalExperience-hover");
			$(".professionalExperience").addClass("professionalExperience-nonhover");	
		}
		else {
			$(".professionalExperience").removeClass("professionalExperience-nonhover");
			$(".professionalExperience").addClass("professionalExperience-hover");
		}
	})

	$(".projectsTab").hover(function(){
		if ($(".projectsTab").hasClass("projectsTab-hover")){
			$(".projectsTab").removeClass("projectsTab-hover");
			$(".projectsTab").addClass("projectsTab-nonhover");	
		}
		else {
			$(".projectsTab").removeClass("projectsTab-nonhover");
			$(".projectsTab").addClass("projectsTab-hover");
		}
	})

	$(".courseworkTab").hover(function(){
		if ($(".courseworkTab").hasClass("courseworkTab-hover")){
			$(".courseworkTab").removeClass("courseworkTab-hover");
			$(".courseworkTab").addClass("courseworkTab-nonhover");	
		}
		else {
			$(".courseworkTab").removeClass("courseworkTab-nonhover");
			$(".courseworkTab").addClass("courseworkTab-hover");
		}
	})

	$(".skillsTab").hover(function(){
		if ($(".skillsTab").hasClass("skillsTab-hover")){
			$(".skillsTab").removeClass("skillsTab-hover");
			$(".skillsTab").addClass("skillsTab-nonhover");	
		}
		else {
			$(".skillsTab").removeClass("skillsTab-nonhover");
			$(".skillsTab").addClass("skillsTab-hover");
		}
	})

	$('.aboutMe').click(function() {
		$('html,body').animate({
			scrollTop: $('.Myself').offset().top
		}, 500);
	});

	$('.professionalExperience').click(function() {
		$('html,body').animate({
			scrollTop: $('.Experience').offset().top
		}, 500);
	});

	$('.projectsTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Projects').offset().top
		}, 500);
	});

	$('.courseworkTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Coursework').offset().top
		}, 500);
	});

	$('.skillsTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Coursework').offset().top
		}, 500);
	});


});