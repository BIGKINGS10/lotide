const takeUntil = function(array, callback) {
  const results = []; 
  for (let arr of array) { 
    
    if (callback(arr) !== true) { 
      results.push(arr); 
    } else { 
      break;
    }
  }
  return results;
   
};
  
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

  
  
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
  
//[ 1, 2, 5, 7, 2 ]
  
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
  
