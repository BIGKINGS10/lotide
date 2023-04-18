const eqObjects = function (object1, object2) {
  //if the length of the object keys is the same
  let one = Object.keys(object1);
  let two = Object.keys(object2);
  //if the length of the key is not the same
  if (one.length !== two.length) {
    return false;
  }
  for (let key of one) {
    // check if value of keys is not equal to the other
    //check if the keys is not the same
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

function eqArrays(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual !== expected) {

    console.log(`⛔ ⛔ ⛔ Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);   
   } else {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`); 
}
};

const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectEqual(eqObjects(ab,ba),false));


