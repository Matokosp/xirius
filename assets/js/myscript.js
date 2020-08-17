// SCROLL WINDOW TO ID

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

var md = window.matchMedia("(min-width: 1100px)");

if (md.matches) {
  $(document).ready(function () {
    // $("#cursorRound").show();
    $("#cursorRound").css({
      width: "24px",
      height: "24px",
    });
  });

  var i = null;

  $(document)
    .on("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;

      $("#cursor").css({
        left: e.clientX,
        top: e.clientY,
      });

      $("#cursorRound").css({
        opacity: "1",
        left: e.clientX - 8,
        top: e.clientY - 8,
      });
    })
    .mouseleave(function () {
      clearTimeout(i);
    });

  $(".category").on("mouseenter", function () {
    $("#cursorRound").css({
      transform: "scale(4)",
      border: "transparent",
      background: "rgba(255, 143, 148, 0.7)",
    });
  });
  $(".category").on("mouseleave", function () {
    $("#cursorRound").css({
      transform: "scale(1)",
      border: "solid 2px #ff8f94",
      background: "transparent",
    });
  });

  var projectMenu = $(".project_menu").offset();
  console.log(projectMenu.top);

  $(window).on("scroll", function () {
    if ($(window).scrollLeft() >= projectMenu.left - 100) {
      $(".project_menu").addClass("project_menu-fixed");
    } else {
      $(".project_menu").removeClass("project_menu-fixed");
    }
  });
}

// HOME ABOUT TITLES

$(document).ready(function () {
  $("#prismaText").hide();
});

$("#aboutButt").on("click", function () {
  $("#aboutText").show();
  $("#prismaText").hide();
  $("#aboutButt").addClass("home_about_title-active");
  $("#prismaButt").removeClass("home_about_title-active");
});

$("#prismaButt").on("click", function () {
  $("#prismaText").show();
  $("#aboutText").hide();
  $("#aboutButt").removeClass("home_about_title-active");
  $("#prismaButt").addClass("home_about_title-active");
});
