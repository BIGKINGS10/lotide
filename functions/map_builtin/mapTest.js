const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

let numberArray = []
lighthouses.map(lighthouse => {
  numberArray.push(lighthouse.length)
})

console.log(numberArray)