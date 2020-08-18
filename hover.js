$(document).ready(function() {
  $("networking_text").hover(
    function() {
      image = document.getElementById("networking_box");
      image.src = "atributes/networking_yellow.png";
      console.log("on");
    },
    function() {
      image = document.getElementById("networking_box");
      image.src = "atributes/networking_purple.png";
      console.log("off");
    }
  );
});
