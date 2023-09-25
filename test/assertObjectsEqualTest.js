const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require("chai").assert;

describe("#assertObjectsEqual - IGNORE THE EMOJIS.  Look at the test cases", () => {

  //setup data
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

  it("should return true", () => {
    assert.isTrue(assertObjectsEqual(shirtObject, anotherShirtObject));
  });

  it("should return false", () => {
    assert.isFalse(assertObjectsEqual(shirtObject, longSleeveShirtObject));
  });
});