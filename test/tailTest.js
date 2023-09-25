const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return 2 when result length [1,2,3]", () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });

  it("should return 2 when first object of [1,2,3] after tail", () => {
    assert.strictEqual(tail([1, 2, 3])[0], 2);
  });

  it("should return 3 when 2nd object of [1,2,3] after tail", () => {
    assert.strictEqual(tail([1, 2, 3])[1], 3);
  });

  it("should not alter original array after tail", () => {
    const words = ["Yo yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("should return length == 0 when array is [99] single item", () => {
    assert.strictEqual(tail([99]).length, 0);
  });
});