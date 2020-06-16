function trans() {
  const input = document.getElementById("temperatureInputNum").value;
  const output = document.getElementById("temperatureOutputNum");
  const unit = document.getElementById("outputUnit");

  if (document.getElementById("toCelsius").checked === true) {
    output.innerHTML = (input - 32) / 9 * 5;
    unit.innerHTML = '℃';
  } else if(document.getElementById("toFahrenheit").checked === true) {
    output.innerHTML = (input / 5 * 9) + 32;
    unit.innerHTML = '℉';
  }
}