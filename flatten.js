let returnedArr = [];


const flatten = arr => {
  arr.forEach(item => {
    if (item instanceof Array) {
      // flattenArr(item);
      flatten(item); // this is recursion => a function that calls itself until it doesn't....
    } else {
      returnedArr = [...returnedArr, item];
    }
  });
  return returnedArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;