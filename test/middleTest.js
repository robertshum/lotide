const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//[1]
assertArraysEqual(middle([1]), []);

//[1, 2]
assertArraysEqual(middle([1, 2]), []);

//[2]
assertArraysEqual(middle([1, 2, 3]), [2]);

//[3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

//[2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

//[3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);