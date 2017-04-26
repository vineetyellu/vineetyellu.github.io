$(document).ready(function() {
  var AddressPosition = $(".level2").offset().top - 140;
  //add number for right position

  $(window).scroll(function() {

    var currentScroll = $(window).scrollTop();
    if (currentScroll < AddressPosition) {
      $(".level2").removeClass("address-fixed");
    } else {
      $(".level2").addClass("address-fixed");
    }
  });
});
