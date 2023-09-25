const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {

  //recursion tests
  it("should return false when using two different objects", () => {
    const input1 = { a: { z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 20 };
    assert.isFalse(eqObjects(input1, input2));
  });

  it("should return true when using two same objects", () => {
    const input1 = { a: { z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(input1, input2));
  });

  it("should return false when using two different objects", () => {
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(input1, input2));
  });

  it("should return false when using two different objects", () => {
    const input1 = { a: { y: 0, z: 1 }, b: 2 };
    const input2 = { a: 1, b: 2 };
    assert.isFalse(eqObjects(input1, input2));
  });

  it("should return true when using two same objects", () => {
    const input1 = { a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 };
    const input2 = { a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 };
    assert.isTrue(eqObjects(input1, input2));
  });

  it("should return false when using two different objects", () => {
    const input1 = { a: { y: 0, z: 1, x: { mom: 1, dad: 1 } }, b: 2 };
    const input2 = { a: { y: 0, z: 1, x: { mom: 1 } }, b: 2 };
    assert.isFalse(eqObjects(input1, input2));
  });

  //basic tests
  //setup data
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

  it("should return true when using two same objects", () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it("should return false when using two different objects", () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });

  //arrays tests
  //setup data
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it("should return true when using two same objects that contains arrays", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("should return false when using two different objects that contains arrays", () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });
});