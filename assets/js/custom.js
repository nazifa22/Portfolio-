document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false); 

$(document).ready(function(){

    //typed JS
    var typed = new Typed('.typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 25,
        backSpeed: 15,
        loop: true
      });

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(); 
});

$(document).ready(function(){
  
  $(".logo").draggable(function(){
    $("#return-to-top").css({
      'position': 'absolute'
    });
  });

  $(".scroll-to-top").draggable();

  $("#cancel").hide();
  $("#bar").click(function(){
    $(".nav-items").fadeIn("300");
    $(this).hide();
    $("#cancel").show();
  });

  $("#cancel").click(function(){
    $(".nav-items").fadeOut("300");
    $(this).hide();
    $("#bar").show();
  });

  
  $(".item").click(function(){
    $(".nav-items").fadeOut("300");
    $("#cancel").hide();
    $("#bar").show();
  });

  

  $(".html").animate({
    'width': '95%'
  });

  $(".css").animate({
    'width': '97%'
  });

  $(".bootstrap").animate({
    'width': '95%'
  });

  $(".jquery").animate({
    'width': '60%'
  });

  $(".js").animate({
    'width': '60%'
  });

  $(".sass").animate({
    'width': '90%'
  });

  $(".php").animate({
    'width': '50%'
  });

  $(".db").animate({
    'width': '60%'
  });

  $(".c").animate({
    'width': '50%'
  });
  
  $(".wp").animate({
    'width': '70%'
  });

  $(".shopify").animate({
    'width': '50%'
  });

  $(".git").animate({
    'width': '80%'
  });

  document.getElementById("return-to-top").style.display = "none";

	$(window).scroll(function(){
		if($(this).scrollTop() >= 150)
			{
				document.getElementById("return-to-top").style.display = "";
			}
			else 
			{
				document.getElementById("return-to-top").style.display = "none";
			}
	});

	$("#return-to-top").click(function(){
		$("body,html").animate({
			scrollTop: 0
		}, 500);
  });
  
  $(".icon").click( function(){

    event.preventDefault();

    if ( $(this).hasClass("inout") ) {
      $(".demo_pannel_box").stop().animate({left:"0px"}, 500);
    } 
    else {
      $(".demo_pannel_box").stop().animate({left:"-200px"}, 500);
    }

    $(this).toggleClass("inout");
     return false;
    });

    $(".icon").draggable();

});

$(document).ready(function(){

  $("span.color-1").click(function(){
      $("body").removeClass().addClass("color-1-bar") ;
  });

  $("span.color-2").click(function(){
      $("body").removeClass().addClass("color-2-bar");
  });

  $("span.color-3").click(function(){
      $("body").removeClass().addClass("color-3-bar");
  });

  $("span.color-4").click(function(){
      $("body").removeClass().addClass("color-4-bar");
  });

  $("span.color-5").click(function(){
      $("body").removeClass().addClass("color-5-bar");
  });

  $("span.color-6").click(function(){
      $("body").removeClass().addClass("color-6-bar");
  });

  $("span.color-7").click(function(){
      $("body").removeClass().addClass("color-7-bar");
  });

  $("span.color-8").click(function(){
      $("body").removeClass().addClass("color-8-bar");
  });

  $("span.color-9").click(function(){
      $("body").removeClass().addClass("color-9-bar");
  });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

