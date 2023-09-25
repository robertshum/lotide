// Instruction
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, inputValue) {
  //go through each property KEY with for ... in (object)
  for (let key in object) {
    const value = object[key];
    if (value === inputValue) {
      return key;
    }
  }
  //undefined
  return undefined;
};

module.exports = findKeyByValue;