$(document).ready(function(){

    //typed JS
    var typed = new Typed('.typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 25,
        backSpeed: 15,
        loop: true
      });

    /*var typed = new Typed(".typed", {
      // Waits 1000ms after typing "First"
      strings: ["First ^1000 sentence.", "Second sentence."]
    });*/

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(); 
});

$(document).ready(function(){
  
  $(".logo").draggable();

  // $(".scroll-to-top").draggable();

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
    'width': '90%'
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

  document.getElementById("return-to-top").style.display = "none";

	$(window).scroll(function(){
		if($(this).scrollTop() >= 100)
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
		}, 700);
	});

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})