const takeUntil = function(array, callback) {
  const results = []; //create an empty array for for the new array
  for (let arr of array) { //loop through every character in the array
    // for every character in the array we want to check if it meets the callback condition
    if (callback(arr) !== true) { //if it does meet the callback condition //which is one less than 0 or equals to a comma
      results.push(arr); //if condition is false push it to the new array
    } else { //if it does meet the callback arguement
      break; //stop looping and return the result
    }
  }
  return results;
   
};
  
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

  
  
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
  
//[ 1, 2, 5, 7, 2 ]
  
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
  
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]