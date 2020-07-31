var form = document.getElementById("email_form");
var email = document.getElementById("email_input");

function startup() {
  var video2 = document.getElementById("video2");
  var video2_button = document.getElementById("virt_button");
  var video1 = document.getElementById("video1");
  var video1_button = document.getElementById("play_img");
  var bg = document.getElementById("video_background");
  var bg2 = document.getElementById("video_background_2");
  var signUpButton = document.getElementById("req_access");
  var form = document.getElementById("email_form");
  var email = document.getElementById("email_input");

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
    bg2.style.display = "block";
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
    console.log("it should have turned off");
    bg2.style.display = "none";
    $("body").css("overflow-y", "scroll");
  });

  var httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  form.addEventListener("submit", function() {
    data = JSON.stringify({ email: email.value });

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        callback(xhr.responseText);
      }
    };

    if (ValidateEmail(email.value)) {
      httpRequest.open("post", "https://dev.evant.app/requestAccess");
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send(data);
    } else {
      console.log("invalid email");
    }
  });

  // form.dispatchEvent(new Event("submit"));
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  // alert("You have entered an invalid email address!");
  return false;
}

window.addEventListener("load", startup, false);
