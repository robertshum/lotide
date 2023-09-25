const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("should return 1", () => {
    assert.strictEqual(countLetters("Hi")["H"], 1);
  });

  it("should return 1", () => {
    assert.strictEqual(countLetters("Hi")["i"], 1);
  });

  it("should return 2", () => {
    assert.strictEqual(countLetters("Hello")["l"], 2);
  });

  it("should return 1", () => {
    assert.strictEqual(countLetters("Hello")["o"], 1);
  });

  it("should return undefined", () => {
    assert.isUndefined(countLetters("Hello")["z"]);
  });
});