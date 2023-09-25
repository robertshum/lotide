//given an array, it will return the middle element(s) of the provided array
//2 elements, no middle, return empty array
//odd #, return 1 middle (as an array)
//even #, return the two midle (as an array)
const middle = function(array) {
  //have empty new array
  let res = [];
  //if length <=2, return empty array
  if (array.length <= 2) {
    return res;
  } else if (array.length % 2 === 0) {
    //if even, length/2, and the next one
    const index = (array.length / 2) - 1;
    res.push(array[index]);
    res.push(array[index + 1]);
  } else {
    //if odd, get the floor of length/2?
    res.push(array[Math.floor(array.length / 2)]);
  }

  return res;
  //return the new array
};

module.exports = middle;