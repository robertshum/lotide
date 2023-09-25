const flatten = require("../flatten");
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should return [1,2,--,7,8,9] if we input [1, 2, [3, 4], 5, [6, 7], 8, 9]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6, 7], 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return [1,2,--,7,8,9] if we input [1,2,--,7,8,9]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should return []] if we input []", () => {
    assert.deepEqual(flatten([]), []);
  });
});