$(document).ready(function() {

  if ($(window).width() < 800) {
    $("#item-0").appendTo("#item-0-target");
  }

  $(window).on("load resize", function(e) {
    $('.max-width-video-wrapper').each(function() {
      this.style.setProperty('max-width', '100%', 'important');
    });
    var h = $(".header").height(),
      w = $(window).height(),
      ci = parseInt($(".content.is-subscriber").css("padding-top")),
      wh = w - h;

    $("#intro-container").css({
      "height": wh,
      "margin-top": (h - ci)
    });
    $("#intro-images").css("height", wh);
    var iiw = $("#intro-images").width();
    $("#bkgimgc").css("width", iiw);
  });



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
