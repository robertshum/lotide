const tail = function(array) {
  if (array.length === 1) {
    return [];
  } else {
    return array.slice(1); //shallow copy of from slice
  }
};

module.exports = tail;