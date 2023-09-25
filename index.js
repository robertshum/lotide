const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const flatten = require("./flatten");
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");
const findKeyByValue = require("./findKeyByValue");
const takeUntil = require("./takeUntil");
const without = require("./without");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const assertEqual = require("./assertEqual");

//Missing some methods that we did not refactor such as flatten, without, countLetters etc.

//we can use the shorthand for obj. literals.  Values don't need to be explicit if the keys match the variable names.  Ex:
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
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  takeUntil,
  without,
  eqArrays,
  eqObjects,
  assertEqual
};