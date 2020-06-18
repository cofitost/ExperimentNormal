function trans() {
  const input = document.getElementById("temperatureInputNum").value;
  const output = document.getElementById("temperatureOutputNum");
  const dot = document.getElementById("dot");
  const unit = document.getElementById("outputUnit");
  const errorMsg = document.getElementById("errorMsg");

  if (document.getElementById("toCelsius").checked === true && input != '') {
    output.innerHTML = (input - 32) / 9 * 5;
    unit.innerHTML = 'C';
    errorMsg.innerHTML = '';
  } else if(document.getElementById("toFahrenheit").checked === true && input != '') {
    output.innerHTML = (input / 5 * 9) + 32;
    unit.innerHTML = 'F';
    errorMsg.innerHTML = '';
  } else {
    output.innerHTML = '';
    dot.innerHTML = '';
    unit.innerHTML = '';
    errorMsg.innerHTML = 'Error!'
  }
}