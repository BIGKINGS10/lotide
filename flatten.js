const eqArrays = function(arr1, arr2) {
    let equal = true;
    //Test to see if arr1 has the same length as arr2
    if (arr1.length === arr2.length) {
      // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
      for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
          equal =  eqArrays(arr1[i], arr2[i]);
        } else if (arr1[i] === arr2[i]) {
          equal = true;
        } else {
          equal = false;
          return equal;
        }
      }
    } else {
      equal = false;
      return equal;
    }
  
    return equal;
  };
  
  
 const assertArraysEqual = function(arr1, arr2) {
  // input: two arrays
  // output: a message reminding user if the two arguements are equal or unequal
  
  let equal = eqArrays(arr1, arr2);
  let result = "";
  //Test to see if arr1 has the same length as arr2
  if (equal) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    result += `✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `⛔ Assertion Failed: [${arr1}] !== [${arr2}]`;
  }

  console.log(result);
};

let returnedArr = [];

// const flattenArr = item => {
//   item.forEach(element => {
//     returnedArr = [...returnedArr, element];
//   });
//   return returnedArr;
// };

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