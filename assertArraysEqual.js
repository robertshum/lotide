const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

module.exports = assertArraysEqual;