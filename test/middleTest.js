const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#middle", () => {
  it("should return [] when single element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] when 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return 2 when 3 elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return 3 when 5 elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2,3] when 4 elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("should return [3,4] when 6 element", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
});