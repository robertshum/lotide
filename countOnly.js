//takes in a collection of items, return count of specific subsets of items
//object contains true or false for a particular key
//array contains values to be added (or not)
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {

    //only add IF it is true in itemsToCount
    if (itemsToCount[item] !== undefined && itemsToCount[item]) {
      //add the items
      if (results[item] === undefined) {
        results[item] = 1;
      } else {
        results[item] += 1;
      }
    }
  }

  //return an object containing counts of everything object listed {a:3, d:1, etc}
  return results;
};

module.exports = countOnly;
