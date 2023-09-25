const without = function(array, withoutArray) {
  //create a new array
  let copiedArray = Array.from(array);

  //go through each without array.  If it is inside, we remove it from the new array
  for (let elem of withoutArray) {
    if (copiedArray.includes(elem)) {
      const indexToRemove = copiedArray.indexOf(elem);
      copiedArray.splice(indexToRemove, 1);
    }
  }

  //return the array
  console.log("modified array", copiedArray);
  return copiedArray;
};

module.exports = without;