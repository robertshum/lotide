const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");

//Test the assertion
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //fail