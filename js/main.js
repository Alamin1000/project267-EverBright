(function ($) {
  "use strict";

  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header_in").outerHeight());
    $("body").css("--header-height", $(".header_in").outerHeight() + "px");
  });

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-close").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".testimonial-slider-active").owlCarousel({
    loop: true,
    margin: 16,
    items: 2,
    dotsEach: 1,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: { items: 1 },
      576: {},
      1000: {},
    },
  });

  // owl-carousel
  var designSlider = $(".design-slider-active");
  designSlider.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dotsEach: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
    navText: [
      '<span class="far fa-chevron-left fa-2x"></span>',
      '<span class="far fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
  designSlider.on("changed.owl.carousel", function (event) {
    let dsSlNv = document.querySelectorAll("#design-slider__nav li a");
    dsSlNv.forEach((item) => {
      item.classList.remove("active");
    });

    setTimeout(function () {
      let active = designSlider[0]
        .querySelector(".owl-item.active")
        .children[0].getAttribute("data-hash");
      document.querySelector(`[href="#${active}"]`).classList.add("active");
    }, 1);
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});
