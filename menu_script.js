$(document).ready(function() {

  /* Force To Top on Refresh */
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  /* Get Heights */
  var height = document.getElementById('header_height').clientHeight - 75;
  var about_height = document.getElementById("quarter").clientHeight;

  /* Fade In Header Animations */
  $("#tagline h3").addClass("load");
  $("#title h1").addClass("load");
  $("#scroll_down img").addClass("load");
  $("#social_links img").addClass("load");

  /* Scroll Down */
  $("#scroll_down").on("click", function() {
    $('html, body').animate({scrollTop: height + 1}, 'slow');
  });

  $("#logo").on("click", function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  })

  $("#about_link").on("click", function() {
    $('html, body').animate({scrollTop: height + 1}, 'slow');
  });

  $("#portfolio_link").on("click", function() {
    $('html, body').animate({scrollTop: height + about_height}, 'slow');
  });

  $("#contact_link").on("click", function() {
    $('html, body').animate({scrollTop: document.body.scrollHeight}, 'slow');
  });

  /* Sticky Menu */
  $(window).scroll(function () {
    console.log($(window).scrollTop())

    if ($(window).scrollTop() > height) {
      $('#menu').fadeIn(500);
    } else if ($(window).scrollTop() < height + 1) {
      $('#menu').fadeOut(500);
    }

  });

});