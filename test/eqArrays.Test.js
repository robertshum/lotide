const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("eqArrays", () => {

  //Basic Tests
  it("should return true when passing in 2 same arrays", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false when passing in 2 different arrays", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("should return true when passing in 2 same arrays", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("should return false when passing in 2 different arrays", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  //Recursion Tests
  it("should return true when passing in 2 same arrays", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return false when passing in 2 different arrays", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [2, 3], [4, 5]));
  });

  it("should return false when passing in 2 different arrays", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

  it("should return true when passing in 2 same arrays", () => {
    assert.isTrue(eqArrays([[2, 3], [4, [99, 98]]], [[2, 3], [4, [99, 98]]]));
  });
});