const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");

//Missing some methods that we did not refactor such as flatten, without, countLetters etc.
module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual : assertEqual
};