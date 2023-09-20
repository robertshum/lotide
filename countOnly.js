
//takes in a collection of items, return count of specific subsets of items
//object contains true or false for a particular key
//array contains values to be added (or not)
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {

    //only add IF it is true in itemsToCount
    if (itemsToCount[item] !== undefined && itemsToCount[item]) {
      //add the items
      if (results[item] === undefined) {
        results[item] = 1;
      } else {
        results[item] += 1;
      }
    }
  }

  //return an object containing counts of everything object listed {a:3, d:1, etc}
  return results;
};

const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "ROB": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//Below is confusing but just going to remember this edge case:
// const test = {};

// if ('test["new"]') {
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log("test new is:", test["new"]);
// console.log("does undefined === false?", undefined === false);
// console.log("does undefined == false?", undefined == false);

