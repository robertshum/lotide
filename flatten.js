//takes in a nested array, and returns a flattened version of it
const flatten = function(nestedArr) {
  //we will try to use recursion
  //we have a final array to store
  let finalArr = [];

  finalArr = recursiveFlatten(nestedArr, finalArr);

  //return the new flattened array
  return finalArr;
};

// [1, 2, [3, 4], 5, [6, 7], 8, 9]
const recursiveFlatten = function(elem, finalArray) {
  //go through each elem, if it's NOT an array, copy that over to the new array.
  //if it is an array we recursive call
  if (Array.isArray(elem)) {
    for (let item of elem) {
      finalArray = recursiveFlatten(item, finalArray);
    }
  } else {
    finalArray.push(elem);
  }
  return finalArray;
};

module.exports = flatten;