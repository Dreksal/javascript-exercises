const findTheOldest = function (peoples) {
  let ageOld = 0;
  let oldestPerson;

  peoples.forEach((person) => {
    let yearToCalculate = 0;
    if (person.yearOfDeath === undefined) {
      yearToCalculate = 2026;
    } else {
      yearToCalculate = person.yearOfDeath;
    }

    let age = yearToCalculate - person.yearOfBirth;
    if (age > ageOld) {
        ageOld = age;
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
