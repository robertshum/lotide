//Function Imp.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✔ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

//Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//true
assertEqual("Identical Strings", "Identical Strings");

//false
assertEqual("Identical Strings", "identical Strings");

//true
assertEqual(3, 3);

//false
assertEqual("3", 3);