const eqObjects = require("./eqObjects");

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  //util for inspection
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

module.exports = assertObjectsEqual;