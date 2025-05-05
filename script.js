$(document).ready(function() {
  $(".filter").click(function() {
    const filter = $(this).data("filter");
    if (filter === "all") {
      $(".menu-item").show();
    } else {
      $(".menu-item").hide();
      $("." + filter).show();
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $("#scrollTop").fadeIn();
    } else {
      $("#scrollTop").fadeOut();
    }
  });

  $("#scrollTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
