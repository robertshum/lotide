const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {

  //setup data
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  const answers = {
    "The Expanse": "sciFi",
    "Brooklyn Nine-Nine": "comedy",
    "The Wire": "drama"
  };

  it("should return correct answers when given bestTVShowsByGenre", () => {

    //Tests all the entries
    for (const key in answers) {
      const correctValue = answers[key];
      assert.strictEqual(findKeyByValue(bestTVShowsByGenre, key), correctValue);
    }
  });

  it("should return undefined when given a non existent tv show in table", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That 70's show"));
  });
});