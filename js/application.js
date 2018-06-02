$.ajaxSetup({
  global: true,
});

function resizePostVideoPlayers() {
  $(".post iframe").
    attr("width", 775).
    attr("height", 432);
}

$(document).ready(resizePostVideoPlayers);
$(document).ajaxComplete(resizePostVideoPlayers);

$(document).ready(function() {
  if ($.fn.jcarousel) {
    $("[data-behavior*=carousel]").jcarousel({
      wrap: "circular",
    });
    $("[data-behavior*=previous]").jcarouselControl({
      target: "-=1",
    });
    $("[data-behavior*=next]").jcarouselControl({
      target: "+=1",
    });
    $("[data-behavior*=carousel]").
      on("jcarousel:scroll", function(event, carousel, target, animate) {
        var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);

        player.pause();
    });
  }
});
