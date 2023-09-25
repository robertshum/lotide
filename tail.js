const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 1) {
    return [];
  } else {
    return array.slice(1); //shallow copy of from slice
  }
};

module.exports = tail;