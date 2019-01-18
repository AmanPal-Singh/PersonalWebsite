$(document).ready(function() {
  
  $(window).scroll(function () {

      var welcomeHeight = $('#welcomesection').height();
      var scrollPos = $(window).scrollTop();
      console.log(welcomeHeight);
    if (scrollPos < welcomeHeight) {
      $('.mainNav li a').css('color', 'white');
    }
    if (scrollPos > welcomeHeight) {
      $('.mainNav li a').css('color', 'black');
    }
  });
});




