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

module.exports =
{
  letterPosition,
  storeIndex
};