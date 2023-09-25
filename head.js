const head = function(array) {
  if (array === undefined) {
    return undefined;
  }
  return array[0];
};

module.exports = head;