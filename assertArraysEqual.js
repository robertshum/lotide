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

//Test the assertion
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //fail