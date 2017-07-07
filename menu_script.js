$(document).ready(function() {

  /* Force To Top on Refresh */
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    $("#logo").hide();
  }

  /* Get View Height */
  var height = document.getElementById('header_height').clientHeight;

  /* Fade In Header Animations */
  $("#tagline h3").addClass("load");
  $("#title h1").addClass("load");
  $("#scroll_down img").addClass("load");
  $("#social_links img").addClass("load");

  /* Scroll Down */
  $("#scroll_down").on("click", function() {
    $('html, body').animate({scrollTop: height + 1}, 'slow');
  });

  /* Sticky Menu */
  $(window).scroll(function () {
    console.log($(window).scrollTop())

    if ($(window).scrollTop() > height) {
      $('#menu').addClass('menu_sticky');
      $('#logo').fadeIn(500);
    } else if ($(window).scrollTop() < height + 1) {
      $('#menu').removeClass('menu_sticky');
      $('#logo').fadeOut(500);
    }

  });

});