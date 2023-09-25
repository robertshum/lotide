// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  //container to hold results
  const results = {};

  //go through each letter.  we need access to the index

  //if it exists in results
  //get that array, and then push the index
  //if it doesnt exist, create new array then push that index
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //edge cases: skip spaces
    if (letter !== " ") {
      if (results[letter]) {
        //exist
        results[letter].push(i);
      } else {
        //doesn't exist
        results[letter] = [i];
      }
    }
  }

  // return answer here
  return results;
};

module.exports = letterPositions;