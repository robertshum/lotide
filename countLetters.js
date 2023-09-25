//edge case: do we care if it has caps?
//return a count of each of the letters in the sentence. {a: 5, z: 5, etc}.
const countLetters = function(sentence) {

  //dictionary count object
  let count = {};

  //go through the sentence
  for (let char of sentence) {
    //edge case: if it's a space, we ignore it
    if (char !== " ") {
      if (count[char]) {
        //if it exists in dict, then we add the count
        count[char] += 1;
      } else {
        //if it doesnt exist in dict, then we set it to one
        count[char] = 1;
      }
    }
  }

  //return the dictionary
  return count;
};

module.exports = countLetters;