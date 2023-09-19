const without = function(array, withoutArray) {
  //create a new array
  let copiedArray = Array.from(array);

  //go through each without array.  If it is inside, we remove it from the new array
  for (let elem of withoutArray) {
    if (copiedArray.includes(elem)) {
      const indexToRemove = copiedArray.indexOf(elem);
      copiedArray.splice(indexToRemove, 1);
    }
  }

  //return the array
  console.log("modified array", copiedArray);
  return copiedArray;
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

//Create some tests
const numbers = [1, 2, 3, 4, 5];
const newNumbers = without(numbers, [2, 3]);
assertArraysEqual(newNumbers, [1, 4, 5]);

const food = ["egg", "pizza", "chicken"];
const newFood = without(food, ["chicken"]);
assertArraysEqual(newFood, ["egg", "pizza"]);

const words = ["hello", "world", "lighthouse"];
//Test that it does not change the original array
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);