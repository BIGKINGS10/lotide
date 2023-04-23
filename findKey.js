const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed : ${actual} === ${expected}`) :  console.log(`⛔ ⛔ ⛔ Assertion Failed: ${actual} !== ${expected}`);
};



const findKey = function(object, callback) {
  //scan the object and return the first key that is a truthy
  // else return undefined
  //loop through the keys in the object using for of loop because the keys are an an array
  for (const key of Object.keys(object)) {
    if (callback(object[key])) { //if the callback arguement eqauls the object key
      //return key
      return key;
    }
  }
    
  // else return undefined
  return undefined;
};
    
    
    
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
    
assertEqual(result, "noma");