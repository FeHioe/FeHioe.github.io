$(document).ready(function() {

  /* Force To Top on Refresh */
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  /* Get View Height */
  var height = document.getElementById('header_height').clientHeight;

  /* Fade In Header Animations */
  $("#tagline h3").addClass("load");
  $("#title h1").addClass("load");
  $("#scroll_down img").addClass("load");

  /* Sticky Menu */
  $(window).scroll(function () {
    console.log($(window).scrollTop())

    if ($(window).scrollTop() > height) {
      $('#menu').addClass('menu_sticky');
      $('#logo').fadeIn(500);
    } else {
      $('#menu').removeClass('menu_sticky');
      $('#logo').fadeOut(500);
    }

  });

});