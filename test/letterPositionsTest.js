const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {

  //setup data
  const word = "hello";
  const results = letterPositions(word);
  const correctCount = [[0], [1], [2, 3], [4]];
  //get array of characters
  const charArray = ["h", "e", "l", "o"];

  it("should return correct positions when inputting \"hello\"", () => {
    charArray.forEach((element, index) => {
      assert.deepEqual(results[element], correctCount[index]);
    });
  });

  it("should return undefined when attempting to use z as key", () => {
    assert.strictEqual(results["z"], undefined);
  });
});