const tail = function(inputArray) {
  if (inputArray.length === 0) {
    return "undefined";
  }
    
  return inputArray.slice(1);
};

module.exports = tail;