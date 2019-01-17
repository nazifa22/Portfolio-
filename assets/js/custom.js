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
  
});