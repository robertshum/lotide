const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
describe("#assertArraysEqual - IGNORE THE EMOJIS.  Look at the test cases", () => {

  it("should return true for similar arrays", () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for different arrays", () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2, "3"]));
  });
});