$(function () {

  // meun-btn
  $(".menu-btn").click(function () {
    $(".menu-btn, .meun-bar").toggleClass("active");
  });

  // sec02 slider
  $(".space-slider").slick({
    dots: true,
    arrows: true,
    prevArrow: $('.space-prev'),
    nextArrow: $('.space-next'),
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1300,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
  });

  function slickActive(){
    if ($(".A-item01").hasClass("slick-active")) {
      $(".space-active-img .active-img.d1").addClass("active");
    } else if ($(".A-item02").hasClass("slick-active")) {
      $(".space-active-img .active-img.d2").addClass("active");
    } else if ($(".A-item03").hasClass("slick-active")) {
      $(".space-active-img .active-img.d3").addClass("active");
    } else if ($(".A-item04").hasClass("slick-active")) {
      $(".space-active-img .active-img.d4").addClass("active");
    }
  }

  $('.space-slider').on({
    init: function (event, slick) {
    },
    beforeChange: function (event, slick, currentSlide, nextSlide) {
        $('.active-img').removeClass('active');
    },
    afterChange: function (event, slick, currentSlide, nextSlide) {
        slickActive();
    }
  });

  $(".location-slider").slick({
    dots: false,
    arrows: true,
    prevArrow: $('.location-prev'),
    nextArrow: $('.location-next'),
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1800,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
  });
});