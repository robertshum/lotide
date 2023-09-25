const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

//Missing some methods that we did not refactor such as flatten, without, countLetters etc.

//we can use the shorthand for obj. literals.  Values don't need to be explicit if the keys match the variable names.
// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   eqArrays: eqArrays,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual : assertEqual
// };

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual
};