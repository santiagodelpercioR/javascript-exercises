const sumAll = function (num1, num2) {
  let start, end;
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }
  if (num1 < num2) {
    start = num1;
    end = num2;
  } else {
    start = num2;
    end = num1;
  }
  let i = start;
  let sum = 0;
  while (i <= end) {
    sum += i;
    i++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
