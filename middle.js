//given an array, it will return the middle element(s) of the provided array
//2 elements, no middle, return empty array
//odd #, return 1 middle (as an array)
//even #, return the two midle (as an array)
const middle = function(array) {
  //have empty new array
  let res = [];
  //if length <=2, return empty array
  if (array.length <= 2) {
    return res;
  } else if (array.length % 2 === 0) {
    //if even, length/2, and the next one
    const index = (array.length / 2) - 1;
    res.push(array[index]);
    res.push(array[index + 1]);
  } else {
    //if odd, get the floor of length/2?
    res.push(array[Math.floor(array.length / 2)]);
  }

  return res;
  //return the new array
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

//[1]
assertArraysEqual(middle([1]), []);

//[1, 2]
assertArraysEqual(middle([1, 2]), []);

//[2]
assertArraysEqual(middle([1, 2, 3]), [2]);

//[3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

//[2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

//[3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);