const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed : ${actual} === ${expected}`) :  console.log(`⛔ ⛔ ⛔ Assertion Failed: ${actual} !== ${expected}`);
  };

  // Create a function to count how many times a key appears in an array
const countAppearance =  function(array, key) {
    let count = 0;
    for (let string of array) {
      if (string === key) {
        count++;
      }
    }
    return count;
  };
  
  const countOnly = function(allItems, itemsToCount) {
    // input : array of items and an object containing which items to count
    // output: an object that contains the count of all items that need to be counted
  
    //get the keys from the input object
    let result = {};
  
    for (let key in itemsToCount) {
    
      if (itemsToCount[key] === true) {
        let count = countAppearance(allItems, key);
        result[key] = count;
      }
    }
  
    console.log(result);
    return result;
  };
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });