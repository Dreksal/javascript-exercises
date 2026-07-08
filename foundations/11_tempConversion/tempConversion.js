const convertToCelsius = function (temperature) {
  const celsius = Number((((temperature - 32) * 5) / 9).toFixed(1));
  return celsius;
};

const convertToFahrenheit = function (temperature) {
  const fahrenheit = Number(((temperature * 9 / 5) + 32).toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
