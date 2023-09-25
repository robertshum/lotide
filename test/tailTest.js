const assertEqual = require("../assertEqual");
const tail = require("../tail");

//test length
assertEqual(tail([1, 2, 3]).length, 2);

//test the first object after tail
assertEqual(tail([1, 2, 3])[0], 2);

//test 2nd object
assertEqual(tail([1, 2, 3])[1], 3);

//test if original array is not modified
const words = ["Yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//test for single item arrays, should be 0
assertEqual(tail([99]).length, 0);