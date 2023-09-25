const assertEqual = require('../assertEqual');
const assert = require("chai").assert;

describe("#assertEqual - IGNORE THE EMOJIS.  Look at the test cases", () => {
  it("return false for different strings", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("return true for same strings", () => {
    assert.isTrue(assertEqual(1, 1));
  });

  it("return true for same strings", () => {
    assert.isTrue(assertEqual("Identical Strings", "Identical Strings"));
  });

  it("return false for different strings", () => {
    assert.isFalse(assertEqual("Identical Strings", "identical Strings"));
  });

  it("return true for same strings", () => {
    assert.isTrue(assertEqual(3, 3));
  });

  it("return false for different strings", () => {
    assert.isFalse(assertEqual("3", 3));
  });
});