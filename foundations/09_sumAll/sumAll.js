const sumAll = function (item1, item2) {
  if (item1 < 0 || item2 < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(item1) || !Number.isInteger(item2)) {
    return "ERROR";
  }
  let sum = 0;
  let wiekszaLiczba = 0;
  let mniejsza = 0;
  if (item2 > item1) {
    wiekszaLiczba = item2;
    mniejsza = item1;
  } else {
    wiekszaLiczba = item1;
    mniejsza = item2;
  }
  for (let x = mniejsza; x <= wiekszaLiczba; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
