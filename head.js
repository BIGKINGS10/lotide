const assertEqual = require('./assertEqual')
const head = function(inputArray){
    if(inputArray.length === 0){
        return "undefined";
    }
    
    return inputArray[0];
}
  

module.exports = head;
  
  