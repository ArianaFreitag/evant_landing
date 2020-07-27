function startup() {
  var video2 = document.getElementById("video2");
  var video2_button = document.getElementById("virt_button");
  var video1 = document.getElementById("video1");
  var video1_button = document.getElementById("play_img");
  var bg = document.getElementById("video_background");
  var bg2 = document.getElementById("video_background_2");

  video2.addEventListener(
    "ended",
    function() {
      console.log("ended");
      video2.style.display = "none";
    },
    false
  );

  video1.addEventListener(
    "ended",
    function() {
      console.log("ended");
      video1.style.display = "none";
    },
    false
  );

  video1_button.addEventListener("click", function() {
    bg.style.display = "block";
    video1.style.display = "block";
    video1.play();
    $("body").css("overflow-y", "hidden");
  });

  video2_button.addEventListener("click", function() {
    bg.style.display = "block";
    video2.style.display = "block";
    video2.play();
    $("body").css("overflow-y", "hidden");
    console.log("off");
  });

  bg.addEventListener("click", function() {
    video1.pause();
    bg.style.display = "none";
    video1.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });

  bg2.addEventListener("click", function() {
    video2.pause();
    video2.style.display = "none";
    bg2.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });
}

window.addEventListener("load", startup, false);
