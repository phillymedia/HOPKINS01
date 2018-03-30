require("./video-strip.js")

$(document).ready(function() {

  var h = $(".header").height(),
    w = $(window).height(),
    wh = w - h;

    $("#intro-static").css({"height":wh, "top": h});
    $("#intro-images").css("height", wh);
  $(window).scroll(function() {
    var top = $(window).scrollTop();
    var height = $(window).height();

    $('#intro-blur').css({
      'opacity': ((height - top) / height)
    });
  });

$(".quote").each(function(){
  $(this).prepend("<span class='quote-large left-q'>&ldquo;</span>").append("<span class='quote-large right-q'>&rdquo;</span>");
})

});
