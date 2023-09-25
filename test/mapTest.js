const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {

  //setup data
  const words = ["ground", "control", "to", "major", "tom"];
  const words2 = ["h", "ello", "world"];
  const words3 = [" "];

  it("should return first letter of each word from words array", () => {
    const result = map(words, function(word) { return word[0]; });
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });

  it("should return first letter of each word from words2 array", () => {
    const result = map(words2, function(words2) { return words2[0]; });
    assert.deepEqual(result, ['h', 'e', 'w']);
  });

  it("should return first letter of each word from words3 array", () => {
    const result = map(words3, function(words3) { return words3[0]; });
    assert.deepEqual(result, [' ']);
  });
});