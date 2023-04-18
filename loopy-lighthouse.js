const loopyLighthouse = function(range, multiples, words) {
    
  let start = range[0];
  let end = range[1];
  let firstDivisor = multiples[0];
  let secondDivisor = multiples[1];
  let word1 = words[0];
  let word2 = words[1];

  for (let i = start; i <= end; i++) {
    if (i % firstDivisor === 0 && i % secondDivisor === 0) {
      console.log(word1 + word2);
    } else if (i % firstDivisor === 0) {
      console.log(word1);
    } else if (i % secondDivisor === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }


};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

