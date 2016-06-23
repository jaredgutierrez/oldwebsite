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

	$(".contactTab").hover(function(){
		if ($(".contactTab").hasClass("contactTab-hover")){
			$(".contactTab").removeClass("contactTab-hover");
			$(".contactTab").addClass("contactTab-nonhover");	
		}
		else {
			$(".contactTab").removeClass("contactTab-nonhover");
			$(".contactTab").addClass("contactTab-hover");
		}
	})

	$(".orgsTab").hover(function(){
		if ($(".orgsTab").hasClass("orgsTab-hover")){
			$(".orgsTab").removeClass("orgsTab-hover");
			$(".orgsTab").addClass("orgsTab-nonhover");	
		}
		else {
			$(".orgsTab").removeClass("orgsTab-nonhover");
			$(".orgsTab").addClass("orgsTab-hover");
		}
	})

	$('.aboutMe').click(function() {
		$('html,body').animate({
			scrollTop: $('.Myself').offset().top
		}, 500);
	});

	$('.professionalExperience').click(function() {
		$('html,body').animate({
			scrollTop: $('.experiencePic').offset().top
		}, 500);
	});

	$('.projectsTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Projects').offset().top
		}, 500);
	});

	$('.courseworkTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Skills').offset().top
		}, 500);
	});

	$('.skillsTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Skills').offset().top
		}, 500);
	});

	$('.orgsTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.Organizations').offset().top
		}, 500);
	});

	$('.contactTab').click(function() {
		$('html,body').animate({
			scrollTop: $('.ContactMe').offset().top
		}, 500);
	});












	$(".linked").hover(function(){
		if ($(".linked").hasClass("linked-hover")){
			$(".linked").removeClass("linked-hover");
			$(".linked").addClass("linked-nonhover");	
		}
		else {
			$(".linked").removeClass("linked-nonhover");
			$(".linked").addClass("linked-hover");
		}
	})



	$(".Myemail").hover(function(){
		if ($(".Myemail").hasClass("Myemail-hover")){
			$(".Myemail").removeClass("Myemail-hover");
			$(".Myemail").addClass("Myemail-nonhover");	
		}
		else {
			$(".Myemail").removeClass("Myemail-nonhover");
			$(".Myemail").addClass("Myemail-hover");
		}
	})


	$(".facebook").hover(function(){
		if ($(".facebook").hasClass("facebook-hover")){
			$(".facebook").removeClass("facebook-hover");
			$(".facebook").addClass("facebook-nonhover");	
		}
		else {
			$(".facebook").removeClass("facebook-nonhover");
			$(".facebook").addClass("facebook-hover");
		}
	})






});