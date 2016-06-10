$(document).ready(function() {
  $(".logo").fadeIn(1800).delay(1000).fadeOut(800, function() {
    $(".instructions").fadeIn(800);
  });
  $(".ryu-still").on("mouseenter", function() {
    $(this).hide();
    $(".ryu-ready").show();
  });
  $(".ryu-ready").on("mouseleave", function() {
    $(this).hide();
    $(".ryu-still").show();
  });
  $(".ryu-ready").on("mousedown", function() {
    $(this).hide();
    $(".ryu-throwing").show();
    $(".hadouken").show().animate({marginLeft: 1000}, 1000, function() {
      $(".hadouken").css("margin-left", 0).hide();
    });
    var sound = document.getElementById("sound");
    sound.play();
  });
  $(document).on("keydown", function(e) {
    if(e.which === 88) {
      $(".ryu-still, .ryu-ready, .ryu-throwing").hide();
      $(".ryu-cool").show();
    }
  });
  $(document).on("keyup", function() {
    $(".ryu-still").show();
    $(".ryu-cool").hide();
  });
});
