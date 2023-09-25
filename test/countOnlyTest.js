const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "ROB": true });

  it("should return 1 when we search for Jason", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("should return undefined when we search for Karima", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("should return 2 when we search for Fang", () => {
    assert.equal(result1["Fang"], 2);
  });

  it("should return undefined when we search for Agouhanna", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });
});