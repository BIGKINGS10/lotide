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


const letterPosition = function(sentence) {
    let result = {};
  
    for (let letter of sentence) {
      if (letter in result) {
        continue;
      } else if (letter === " ") {
        continue;
      } else {
        let indices = storeIndex(sentence, letter);
        result[letter] = indices;
      }
    }
  
    return result;
  };
  
  const storeIndex = function(string, key) {
    let indices = [];
    let count = 0;
  
    for (let letter of string) {
      if (letter === key) {
        indices.push(count);
      }
      count++;
    }
  
    return indices;
  };
  
  console.log(letterPosition("lighthouse in the house"));