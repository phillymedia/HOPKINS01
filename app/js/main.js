$(document).ready(function() {




  $(window).on("load resize", function(e) {

    var h = $(".header").height(),
      w = $(window).height(),
      ci = parseInt($(".content.is-subscriber").css("padding-top")),
      wh = w - h;
    $("#intro-container").css({
      "height": wh,
      "margin-top": (h - ci)
    });
    $("#intro-images").css("height", wh);

  });

  setTimeout(function() {
    $("#intro-clean").fadeIn(2000);
  }, 1000);

  // $(window).scroll(function() {
  //   var top = $(window).scrollTop();
  //   var height = $(window).height();
  //
  //   $('#intro-blur').css({
  //     'opacity': ((height - top) / height)
  //   });
  // });

  $(".quote").each(function() {
    $(this).prepend("<span class='quote-large left-q'>&ldquo;</span>")
    // .append("<span class='quote-large right-q'>&rdquo;</span>")
    ;
  })

});
