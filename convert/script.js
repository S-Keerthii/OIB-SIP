document.getElementById('convertTemperature').onclick = convertTemperature;
document.getElementById('clear').onclick = clear;
function convertTemperature() 
{
  const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
  const unitSelect = document.getElementById("unitSelect").value;
  const unitSelect1 = document.getElementById("unitSelect1").value;
  const resultTemperatureElement = document.getElementById("resultTemperature");
  if (unitSelect === "celsius" && unitSelect1 === "fahrenheit1") {
    const fahrenheit = (inputTemperature * 9) / 5 + 32;
    resultTemperatureElement.textContent = `${fahrenheit.toFixed(2)}°F`;
  } else if (unitSelect === "celsius" && unitSelect1 === "kelvin1") {
    const kelvin = inputTemperature + 273.15;
    resultTemperatureElement.textContent = `${kelvin.toFixed(2)}°K`;
  } else if (unitSelect === "fahrenheit" && unitSelect1 === "celsius1") {
    const celsius = ((inputTemperature - 32) * 5) / 9;
    resultTemperatureElement.textContent = `${celsius.toFixed(2)}°C`;
  } else if (unitSelect === "fahrenheit" && unitSelect1 === "kelvin1") {
    const kelvin = ((inputTemperature - 32) * 5) / 9 + 273.15;
    resultTemperatureElement.textContent = `${kelvin.toFixed(2)}°K`;
  } else if (unitSelect === "kelvin" && unitSelect1 === "celsius1") {
    const celsius = inputTemperature - 273.15;
    resultTemperatureElement.textContent = `${celsius.toFixed(2)}°C`;
  } else if (unitSelect === "kelvin" && unitSelect1 === "fahrenheit1") {
    const fahrenheit = ((inputTemperature - 273.15) * 9) / 5 + 32;
    resultTemperatureElement.textContent = `${fahrenheit.toFixed(2)}°F`;
  } else {
    resultTemperatureElement.textContent = 'Invalid conversion';
  }
}
function clear() {
      document.getElementById("inputTemperature").value = '';
      document.getElementById("resultTemperature").textContent = '';
    }
  