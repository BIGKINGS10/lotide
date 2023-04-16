// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed : ${actual} === ${expected}`) :  console.log(`⛔ ⛔ ⛔ Assertion Failed: ${actual} !== ${expected}`);
  };

const head = function(inputArray){
    if(inputArray.length === 0){
        return "undefined";
    }
    
    return inputArray[0];
}
  
  // TEST CODE
  assertEqual(head([5,6,7]), 5);
  assertEqual(head([5,6,7]), 4);
  assertEqual(head([]), 4);
  assertEqual(head([4]), 4);
  assertEqual(head([5]), 4);
  assertEqual(head(["Hello", "lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Hello", "lighthouse", "Labs"]), "hello");
  
  