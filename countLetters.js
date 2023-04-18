const assertEqual = function(actual, expected) {
    actual === expected ? console.log(`✅ ✅ ✅ Assertion Passed : ${actual} === ${expected}`) :  console.log(`⛔ ⛔ ⛔ Assertion Failed: ${actual} !== ${expected}`);
  };


const countLetters = function(string) {
    let result = {};
  
    // remove all the spaces within the string
    let spaceRemovedString = string.split(' ').join('');
    for (let letter of spaceRemovedString) {
      if (letter in result) {
        continue;
      } else {
        let count = countAppearance(spaceRemovedString, letter);
        result[letter] = count;
      }
    }
    console.log(result);
    return result;
  
  };

  const countAppearance =  function(string, key) {
    let count = 0;
    for (let letter of string) {
      if (letter === key) {
        count++;
      }
    }
    return count;
  };

  countLetters('LHL');
  countLetters('OMORUYI');