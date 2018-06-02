$(document).ready(function() {
  $(".post iframe").
    attr("width", 775).
    attr("height", 432);

  $("[data-behavior*=carousel]").jcarousel({
    wrap: "circular",
  });
  $("[data-behavior*=previous]").jcarouselControl({
    target: "-=1",
  });
  $("[data-behavior*=next]").jcarouselControl({
    target: "+=1",
  });
});
