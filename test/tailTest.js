const assertEqual = require('../assertEqual');
const tail = require('../tail');
assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail([5,6,7]), [6,8]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouses", "Labs"]);