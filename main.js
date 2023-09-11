// sự kiện scroll navbar fixed
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 120) {
    $("header").css({
      "background-color": "#fff",
      position: "fixed",
    });
    $("header nav.navbar a").css("color", "#000");
  } else {
    $("header").css({
      background: "none",
      position: "relative",
    });
    $("header nav.navbar a").css("color", "#fff");
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
