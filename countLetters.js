const assertEqual = function(actual, expected) {
  //use string literals ` for performance gains! (ie: don't use '+').
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//edge case: do we care if it has caps?
//return a count of each of the letters in the sentence. {a: 5, z: 5, etc}.
const countLetters = function(sentence) {

  //dictionary count object
  let count = {};

  //go through the sentence
  for (let char of sentence) {
    //edge case: if it's a space, we ignore it
    if (char !== " " && count[char]) {
      //if it exists in dict, then we add the count
      count[char] += 1;
    } else {
      //if it doesnt exist in dict, then we set it to one
      count[char] = 1;
    }
  }

  //return the dictionary
  return count;
};

//Tests
assertEqual(countLetters("Hi")["H"], 1);
assertEqual(countLetters("Hi")["i"], 1);

assertEqual(countLetters("Hello")["l"], 2);
assertEqual(countLetters("Hello")["o"], 1);
assertEqual(countLetters("Hello")["z"], undefined);