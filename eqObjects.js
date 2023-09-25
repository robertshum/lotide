const eqArrays = require("./eqArrays");

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.  Works recursively as well
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

module.exports =  eqObjects;