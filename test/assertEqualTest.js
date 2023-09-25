const assertEqual = require('../assertEqual');

//Test Code
//false
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