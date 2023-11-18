// script.js

$(document).ready(function () {
    $(window).scroll(function () {
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var elementPosition = $("#animated-button").offset().top;
  
      if (scrollPosition + windowHeight > elementPosition) {
        $("#animated-button").addClass("animate__animated animate__fadeInRight");
        $("#animated-button").css("opacity", "1");
      }
    });
  });
  
  
  $(document).ready(function () {
    $(window).scroll(function () {
      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();
      var elementPosition = $(".blue-box").offset().top;

      if (scrollPosition + windowHeight > elementPosition) {
        $(".blue-box").addClass("animate__animated animate__fadeIn");
      }
    });
  });