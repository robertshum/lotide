const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array === undefined) {
    return undefined;
  }
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);