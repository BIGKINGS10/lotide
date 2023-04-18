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

const included = function(arr1, arr2) {
  // input : two arrays
  // output : an array of booleans indicating if an element in arr1 is included in arr2
  let outputArray = [];

  //For each element in arr1, check to see if they are in arr2
  // If the element in arr1 is in arr2, do not added that element into the output array
  for (let i = 0; i < arr1.length; i++) {
    let includes = false;
    if (arr2.includes(arr1[i])) {
      includes = true;
    }
    outputArray.push(includes);
  }

  return outputArray;
};

const without = function(arr1, arr2) {
  // input :  two arrays
  // output:  an altered array that removes all elements that are in arr2 from arr1

  let includedArray = included(arr1, arr2);
  let outputArray = [];

  for (let i = 0; i < includedArray.length; i++) {
    if (includedArray[i] === false) {
      outputArray.push(arr1[i]);
    }
  }
  
  return outputArray;
};

console.log(without([1,2,3], [1]));
console.log(without(["1","2","3"],[1,2,"3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
