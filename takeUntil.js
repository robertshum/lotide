// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  //results array
  const results = [];

  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      //take until we find the matching value, then just return what we have!
      return results;
    }
  }

  return results;
};

module.exports = takeUntil;
