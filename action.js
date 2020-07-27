function startup() {
  var video = document.getElementById("watchMe");
  var overlay = document.getElementById("overlay");
  var video_icon = document.getElementById("virt_button");
  var video1 = document.getElementById("video1");
  var video1_button = document.getElementById("play_img");
  var bg = document.getElementById("video_background");
  var bg2 = document.getElementById("video_background_2");

  video.addEventListener(
    "ended",
    function() {
      console.log("ended");
      video.style.display = "none";
    },
    false
  );

  video_icon.addEventListener("click", function() {
    bg.style.display = "block";
    video.style.display = "block";
    video.play();
    $("body").css("overflow-y", "hidden");
  });

  // video.addEventListener("click", function() {
  //   video.pause();
  //   video.currentTime = 0;
  //   bg.style.display = "none";
  //   video.style.display = "none";
  //   $("body").css("overflow-y", "scroll");
  // });

  bg.addEventListener("click", function() {
    video1.pause();
    video1.currentTime = 0;
    bg.style.display = "none";
    video1.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });

  bg2.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
    bg2.style.display = "none";
    video.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });

  video1_button.addEventListener("click", function() {
    bg.style.display = "block";
    video1.style.display = "block";
    $("body").css("overflow-y", "hidden");
  });
}

window.addEventListener("load", startup, false);
