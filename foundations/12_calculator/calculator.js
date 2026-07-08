const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array = []) {
  let suma = 0;
  array.forEach((item) => (suma += item));
  return suma;
};

const multiply = function (array = []) {
  let wynik = 1;
  array.forEach((item) => (wynik *= item));
  return wynik;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (numb) {
  let result = 1;
  for (let x = numb; x >= 1; x--) {
    result *= x;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
