const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // 

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
const eqObjects = function(objOne, objTwo) {

  let result = true;

  //if one of the values is undefined
  if(objOne === undefined || objTwo === undefined) {
    return false;
  }



  //check if they have the same amount of keys.  If not, just return false
  //...probably should check the value too lol but i got lazy
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);
  if (keys1.length !== keys2.length) {
    result = false;
  }

  //navigate objOne with for ... in loop

  //they are equal if:
  //1 They have the same number of keys
  //2 The value for each key in one object is the same as the value for that same key in the other object
  for (let key in objOne) {
    const value1 = objOne[key];
    const value2 = objTwo[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      const arrayMatches = eqArrays(value1, value2);
      if (!arrayMatches) {
        result = false;
      }
      //both objects are not arrays BUT still objects
    } else if (!Array.isArray(value1) && !Array.isArray(value2)) {
      result = eqObjects(value1, value2);
    }
  }
  
  if (objOne !== objTwo) {
    result =  false;
  }

  //if at this point we just return true;
  return result;
};

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
const eqObjectsNonRecursive = function(objOne, objTwo) {

  //check if they have the same amount of keys.  If not, just return false
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);
  if (keys1.length !== keys2.length) {
    return false;
  }

  //navigate objOne with for ... in loop

  //they are equal if:
  //1 They have the same number of keys
  //2 The value for each key in one object is the same as the value for that same key in the other object
  for (let key in objOne) {
    const value1 = objOne[key];
    const value2 = objTwo[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      const arrayMatches = eqArrays(value1, value2);
      if (!arrayMatches) {
        return false;
      }
    } 
    else if (value1 !== value2) {
      return false;
    }
  }

  //if at this point we just return true;
  return true;
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

//Tests for Recursive Objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

// assertEqual(eqObjects({ a: { y: 0, z: 1, x : {mom: 1, dad: 1}}, b: 2 }, { a: { y: 0, z: 1, x : {mom: 1, dad: 1}}, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1, x : {mom: 1, dad: 1}}, b: 2 }, { a: { y: 0, z: 1, x : {mom: 1}}, b: 2 }), false); // => false

return;

//Tests
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false


//Tests for Arrays
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

