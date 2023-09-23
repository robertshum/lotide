const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// { a: { y: 0, z: 1, x : {mom: 1, dad: 1}}, b: 2 }, 
// { a: { y: 0, z: 1, x : {mom: 1}}, b: 2 } // TRUE 

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
const eqObjects = function(objOne, objTwo) {

  //check if both object matches in type?
  if (typeof objOne !== typeof objTwo) {
    return false;
  }

  //base case - if both values are arrays
  if (Array.isArray(objOne) && Array.isArray(objTwo)) {
    return eqArrays(objOne, objTwo);
  }

  //--here and below - are the same, and not arrays--

  //check if they have the same amount of keys.  If not, just return false
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);
  if (keys1.length !== keys2.length) {
    return false;
  }

  if (typeof objOne === "object") {
    //safely assume objTwo is also object because they would fail up above
    for (let key in objOne) {
      //we only care for a single instance of false
      //thats why we don't care for TRUTH values here:
      if (!eqObjects(objOne[key], objTwo[key])) {
        return false;
      }
    }
  }

  //make sure they are not objects
  if (typeof objOne !== "object" && typeof obj2 !== "object") {
    return objOne === objTwo; //if this returns false, the callstack will close and return false.  if it's true then the loop from above continues (from the previous stack).
  }

  //it's true - run until list exhausts
  return true;
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

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 20 }), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 }, { a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 }, { a: { y: 0, z: 1, x: { mom: 1 } }, b: 2 }), false); // => false


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

