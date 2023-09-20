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

const eqArrays = function(array1, array2) {

  //check if array sizes match
  if (array1.length !== array2.length) {
    return false;
  }

  //loop and check each element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //if any fail, just return false;
      return false;
    }
  }

  //end of the loop, just return true
  return true;
};

const assertArraysEqual = function(array1, array2) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};



let arr = flatten([1, 2, [3, 4], 5, [6, 7], 8, 9]); // => [1, 2, 3, 4, 5, 6,7,8,9]
console.log("flattened:", arr);

assertArraysEqual(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9]);