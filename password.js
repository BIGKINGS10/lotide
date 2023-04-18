let arg = process.argv[2];

const obfuscate = arg => {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === "a") {
      arg = arg.replace(arg[i], 4);
    }
    if (arg[i] === "e") {
      arg = arg.replace(arg[i], 3);
    }
    if (arg[i] === "o") {
      arg = arg.replace(arg[i], 0);
    }
    if (arg[i] === "l") {
      arg = arg.replace(arg[i], 1);
    }
  }
  return arg;
};

const abc = obfuscate(arg);
console.log(abc);
