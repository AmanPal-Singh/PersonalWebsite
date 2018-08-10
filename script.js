$(document).ready(function() {
  
  $(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var bannerHeight = $('#banner').height();
      console.log(bannerHeight);
    if ($(window).scrollTop() > bannerHeight) {
      $('#navbar').addClass('navbar-fixed');
      $('#about').addClass('about-height');
    }
    if ($(window).scrollTop() < bannerHeight) {
      $('#navbar').removeClass('navbar-fixed');
      $('#about').removeClass('about-height');
    }
  });
});