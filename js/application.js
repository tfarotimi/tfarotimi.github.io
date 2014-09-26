
$(document).ready(function() {
  $("section").css({height:$(window).height()});
  $("#map").hide();
});

$(".maptitle").on("click",function() {
  $("#map").slideToggle('100');
  $(".details").css({"background-color": rgba(10,10,10,.9)});
});

$(".about button").on("click", function() {
  $("body").animate({scrollTop:$(".details").offset().top});
});
