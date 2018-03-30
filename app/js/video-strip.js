var yt_videos = [
  ["https://www.youtube.com/watch?v=M7L363Eqe5c", "Peptalk"],
  ["https://www.youtube.com/watch?v=cff8MTFW6mA", "Promo"],
  ["https://www.youtube.com/watch?v=sjvo2ItgYcE&t  1996 olympics"],
  ["https://www.youtube.com/watch?v=7U49TvdAOrc", "1981"],
  ["https://www.youtube.com/watch?v=a7Sisy_9Wj8", "1980-1989"],
  ["https://www.youtube.com/watch?v=e9rjUMrW6D8&t  on letterman"],
  ["https://www.youtube.com/watch?v=39BOk-tvPlY", "Hopkins interview 1984"],
  ["https://www.youtube.com/watch?v=Si2vS0kMU_Q", "1983 champions homecoming Hopkins gets keys"],
  ["https://www.youtube.com/watch?v=c7sN3PiRGlQ", "2013 interview"],
  ["https://www.youtube.com/watch?v=kCJpDZJadVk", "1984 Garfield Cadets — Debra Gozdek Interview"]
]

console.log(yt_videos[0][1])

// <iframe id="ytplayer" type="text/html" width="640" height="360"
//   src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
//   frameborder="0"></iframe>

var i = 0;
for (i = 0; i < yt_videos.length; i++) {
  var video = '<iframe class="card" id="ytplayer" type="text/html" width="640" height="360"' +
    'src="https://www.youtube.com/embed/' + yt_videos[i][0].replace('https://www.youtube.com/watch?v=', '') + '"' +
    'frameborder="0"></iframe>';
  $("#video-strip").append(video);
}

$(".but-con").click(function() {
  var card = $(".card").width(),
    cur = $("#video-strip").scrollLeft();
  if ($(this).attr("id") == "next-vid") {
    $("#video-strip").animate({
      scrollLeft: (cur + card) + "px"
    }, 1000);
  } else {
    $("#video-strip").animate({
      scrollLeft: (cur - card) + "px"
    }, 1000);
  }
});

// var interval = false;
// $('#next-vid').mouseover(function(){
//     var s = 0;
//    interval = setInterval(function(){
//      s = s + 10;
//      $("#video-strip").animate({ scrollLeft: s + "px" }, 1);
//    }, 100);
// });
//
// $('#next-vid').mouseout(function(){
//    clearInterval(interval);
//    interval = false;
// });

// $('#next-vid').hover(function () {
//     $('#video-strip').each(function () {
//         console.log("test")
//         var item = $(this)[0];
//         $(this).animate({ scrollLeft: item.scrollWidth }, 500);
//     });
// });
