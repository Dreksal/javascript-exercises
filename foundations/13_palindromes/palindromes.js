const palindromes = function (string) {
  let oczyszczony = string.replace(/[\s,.\!?]/g, "").toLowerCase();
  let odwrocony = "";
  for (let x = oczyszczony.length - 1; x >= 0; x--) {
    odwrocony += oczyszczony[x];
  }
  if (odwrocony == oczyszczony) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
