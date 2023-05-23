const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      let keyValue = key;
      return keyValue;
    } else {
      continue;
    }
  }
  
  return undefined;
  
};
  
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That Avengers"), undefined));

module.expots = findKeyByValue;

