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

// // Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
// const eqObjects = function(objOne, objTwo) {

//   //check if they have the same amount of keys.  If not, just return false
//   const keys1 = Object.keys(objOne);
//   const keys2 = Object.keys(objTwo);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   //navigate objOne with for ... in loop

//   //they are equal if:
//   //1 They have the same number of keys
//   //2 The value for each key in one object is the same as the value for that same key in the other object
//   for (let key in objOne) {
//     const value1 = objOne[key];
//     const value2 = objTwo[key];
//     if (Array.isArray(value1) && Array.isArray(value2)) {
//       const arrayMatches = eqArrays(value1, value2);
//       if (!arrayMatches) {
//         return false;
//       }
//     } else if (value1 !== value2) {
//       return false;
//     }
//   }

//   //if at this point we just return true;
//   return true;
// };

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