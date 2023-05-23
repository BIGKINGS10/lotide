const args = process.argv;

const reversedString = function(args) {
  for (let str = 2; str < args.length; str++) {
    let result = "";
    for (let j = args[str].length - 1; j >= 0; j--) {
      result += args[str][j];
    }
    console.log(result);
  }
};

reversedString(args);