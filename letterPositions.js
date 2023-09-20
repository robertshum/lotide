// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  //container to hold results
  const results = {};

  //go through each letter.  we need access to the index

  //if it exists in results
  //get that array, and then push the index
  //if it doesnt exist, create new array then push that index
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //edge cases: skip spaces
    if (letter !== " ") {
      if (results[letter]) {
        //exist
        results[letter].push(i);
      } else {
        //doesn't exist
        results[letter] = [i];
      }
    }
  }

  // return answer here
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

//Tests
const results = letterPositions("hello");
assertArraysEqual(results["h"], [0]);
assertArraysEqual(results["e"], [1]);
assertArraysEqual(results["l"], [2, 3]);
assertArraysEqual(results["o"], [4]);