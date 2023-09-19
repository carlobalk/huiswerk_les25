$(document).ready(function() {
    $('.image').hide();
    $('.image-button').click(function() {
      var image = $(this).next('.image');
      image.slideToggle();
    });
  });
  