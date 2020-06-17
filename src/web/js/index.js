function trans() {
  const inputC = document.getElementById("temperatureInputC").value;
  const inputF = document.getElementById("temperatureInputF").value;
  const output = document.getElementById("temperatureOutputNum");
  const unit = document.getElementById("outputUnit");
  const errorMsg = document.getElementById("errorMsg");

  if (inputC != '' && inputF === '') {
    output.innerHTML = (inputC / 5 * 9) + 32;
    unit.innerHTML = '℉';
    errorMsg.innerHTML = '';
  } else if(inputF != '' && inputC === '') {
    output.innerHTML = (inputF - 32) * 5 / 9;
    unit.innerHTML = '℃';
    errorMsg.innerHTML = '';
  } else {
    output.innerHTML = '';
    unit.innerHTML = '';
    errorMsg.innerHTML = 'Error!'
  }
}