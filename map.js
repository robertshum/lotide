//map fn takes in an array to map, and a callback function.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["h", "ello", "world"];
const words3 = [" "];

//another way to write cb fn
//const result1 = map(words, function(word)  {return word[0]});
const result1 = map(words, word => word[0]);
const result2 = map(words2, word => word[0]);
const result3 = map(words3, word => word[0]);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, ['h', 'e', 'w']);
assertArraysEqual(result3, [' ']);