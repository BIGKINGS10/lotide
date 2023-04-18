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

const middle = function(arr1) {
    let outputArray = [];
    let middleIndex = 0;
  
    if (arr1.length <= 2) {
      return outputArray;
    } else {
      // see if the input array is even or odd
      if (arr1.length % 2 === 0) {
        middleIndex = (arr1.length / 2) - 1;
        outputArray.push(arr1[middleIndex]);
        middleIndex = (arr1.length / 2);
        outputArray.push(arr1[middleIndex]);
        return outputArray;
      } else {
        middleIndex = Math.ceil((arr1.length / 2) - 1);
        outputArray.push(arr1[middleIndex]);
        return outputArray;
      }
    }
  };

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

