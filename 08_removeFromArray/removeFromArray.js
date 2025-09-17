const removeFromArray = function (array, ...argsToRemove) {
  let newArray = array.slice();
  for (const toRemove of argsToRemove) {
    let removeIndex = newArray.indexOf(toRemove);
    while (newArray.includes(toRemove)) {
      newArray = newArray.toSpliced(removeIndex, 1);
    }
    console.log(newArray);
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
