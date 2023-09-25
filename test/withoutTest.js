const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {

  //setup data
  const numbers = [1, 2, 3, 4, 5];
  const food = ["egg", "pizza", "chicken"];
  const words = ["hello", "world", "lighthouse"];

  it("should return 1 4 5", () => {
    const newNumbers = without(numbers, [2, 3]);
    assert.deepEqual(newNumbers, [1, 4, 5]);
  });

  it("should return egg and pizza", () => {
    const newFood = without(food, ["chicken"]);
    assert.deepEqual(newFood, ["egg", "pizza"]);
  });

  it("should return original array", () => {
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});