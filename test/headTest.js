const assertEqual = require('../assertEqual');
const head = require ('../head');
  // TEST CODE
  assertEqual(head([5,6,7]), 5);
  assertEqual(head([5,6,7]), 4);
  assertEqual(head([]), 4);
  assertEqual(head([4]), 4);
  assertEqual(head([5]), 4);
  assertEqual(head(["Hello", "lighthouse", "Labs"]), "Hello");
  assertEqual(head(["Hello", "lighthouse", "Labs"]), "hello");