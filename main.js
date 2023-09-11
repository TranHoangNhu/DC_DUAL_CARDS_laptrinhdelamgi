// sự kiện scroll navbar fixed
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 120) {
    $("header").css({
      "background-color": "#fff",
      position: "fixed",
    });
    $(".menuResponsive").css({
      "background-color": "rgba(255, 255, 255, 0.8)",
    });
    $(".menuResponsive a").css({
      color: "#000",
    });
    $("header nav.navbar > a").css("color", "#000");
    $("header nav.navbar .toggle_navbar i").css("color", "#000");
    $(".menuResponsive").$(".btnDC_backToTop").css("bottom", "35px");
  } else {
    $("header").css({
      background: "none",
      position: "relative",
    });
    $(".menuResponsive").css({
      "background-color": "rgba(0, 0, 0, 0.8)",
    });
    $(".menuResponsive a").css({
      color: "#fff",
    });
    $("header nav.navbar > a").css("color", "#fff");
    $("header nav.navbar .toggle_navbar i").css("color", "#fff");
    $(".btnDC_backToTop").css("bottom", "-80px");
  }
});

//sự kiện autoplay video
$(window).on("load", function () {
  $("video")[0].autoplay = true;
  $("video")[0].play();
});

// sự kiện cho nút toggle navbar
$("nav.navbar .toggle_navbar a").on("click", function () {
  $("header nav.navbar .menuResponsive")[0].classList.toggle("active");
  if ($("nav.navbar .toggle_navbar a i")[0].className == "fa-solid fa-bars") {
    $("nav.navbar .toggle_navbar a i")
      .removeClass("fa-bars")
      .addClass("fa-xmark");
  } else {
    $("nav.navbar .toggle_navbar a i")
      .removeClass("fa-xmark")
      .addClass("fa-bars");
  }
});

// sự kiện click btn backtoptop
$(".btnDC_backToTop").on("click", function () {
  $(window).scrollTop(0);
});
