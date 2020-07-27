function startup() {
  var video = document.getElementById("watchMe");
  var overlay = document.getElementById("overlay");
  var video_icon = document.getElementById("virt_button");
  var video1 = document.getElementById("video1");
  var video1_button = document.getElementById("play_img");

  video.addEventListener(
    "ended",
    function() {
      console.log("ended");
      video.style.display = "none";
    },
    false
  );

  video_icon.addEventListener("click", function() {
    if (video.display == "block") {
      video.pause();
      video.currentTime = 0;
      video.style.display = "none";
      $("body").css("overflow-y", "scroll");
    } else {
      video.style.display = "block";
      video.play();
      $("body").css("overflow-y", "hidden");
    }
  });

  video.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });

  video1_button.addEventListener("click", function() {
    if (video1.style.display == "block") {
      video1.style.display = "none";
      video1.stopVideo();
      $("body").css("overflow-y", "scroll");
    } else {
      video1.style.display = "block";
      $("body").css("overflow-y", "hidden");
    }
  });
}

window.addEventListener("load", startup, false);
