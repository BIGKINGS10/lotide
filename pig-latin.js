const pigLatin = function(input) {
  let result = "";
  for (let i = 1; i < input.length; i++) {
    result += input[i];
  }
  result += input[0];
  result += "ay";

  return result;
};


for (let i = 2; i < process.argv.length; i++) {
  let str = process.argv[i];
  console.log(pigLatin(str));
}