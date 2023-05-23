const eqArrays = function(arr1, arr2) {
    let equal = true;
    
    if (arr1.length === arr2.length) {
      
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
  let equal = eqArrays(arr1, arr2);
  let result = "";
  
  if (equal) {
    result += `✅ Assertion Passed: [${arr1}] === [${arr2}]`;
  } else {
    result += `⛔ Assertion Failed: [${arr1}] !== [${arr2}]`;
  }

  console.log(result);
};

const included = function(arr1, arr2) {
  let outputArray = [];

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
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
