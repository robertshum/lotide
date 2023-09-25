const findKey = require("../findKey");
const assert = require("chai").assert;

describe("#findKey", () => {

  it("should return noma after inputting key as noma", () => {

    const result1 = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2); // => "noma"

    assert.strictEqual(result1, "noma");
  });
});