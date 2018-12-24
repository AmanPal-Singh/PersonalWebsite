$(document).ready(function() {
  
  $(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var welcomeHeight = $('#welcomesection').height();
      console.log(welcomeHeight);
    if ($(window).scrollTop() > bannerHeight) {
      $('#navbar').addClass('navbar-fixed');
      $('#about-section').addClass('about-height');
    }
    if ($(window).scrollTop() < bannerHeight) {
      $('#navbar').removeClass('navbar-fixed');
      $('#about-section').removeClass('about-height');
    }
  });
});