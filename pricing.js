var switch_val = false;

function startup() {
  var switch_button = document.getElementById("switch");
  var starter_price = document.getElementById("starter_price");
  var business_price = document.getElementById("business_price");
  var enterprise_price = document.getElementById("enterprise_price");

  switch_button.addEventListener("click", function() {
    if (!switch_val) {
      switch_button.src = "atributes/annually.png";
      switch_val = true;
      starter_price.textContent = "$44";
      business_price.textContent = "$99";
      enterprise_price.textContent = "$209";
    } else {
      switch_button.src = "atributes/monthly.png";
      starter_price.textContent = "$4";
      business_price.textContent = "$9";
      enterprise_price.textContent = "$19";
      switch_val = false;
    }
  });
}

window.addEventListener("load", startup, false);
