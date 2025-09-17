const convertToCelsius = function (fahrenheitNumber) {
  return parseFloat(((fahrenheitNumber - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (celsiusNumber) {
  return parseFloat((celsiusNumber * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
