const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let strToReturn = "";
  for (let i = 0; i < num; i++) {
    strToReturn += string;
  }
  return strToReturn;
};

// Do not edit below this line
module.exports = repeatString;
