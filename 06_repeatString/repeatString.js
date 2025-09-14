const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let i = 0;
  let myString = "";
  while (i < num) {
    myString += string;
    i++;
  }
  return myString;
};

// Do not edit below this line
module.exports = repeatString;
