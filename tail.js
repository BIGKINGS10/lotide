// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (equalArrays(actual, expected) === true) {
    console.log(`✅ ✅ ✅ Assertion Passed : ${actual} === ${expected}`);
  }
    
  if (equalArrays(actual, expected) === false) {
    console.log(`⛔ ⛔ ⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const tail = function(inputArray) {
  if (inputArray.length === 0) {
    return "undefined";
  }
    
  return inputArray.slice(1);
};

const equalArrays =  function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
    
  return true;
};


assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail([5,6,7]), [6,8]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouses", "Labs"]);