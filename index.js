const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const findKey = require('./findKey');
const findKeyByValye = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const assertObjectsEqual = require('./assertObjectsEqual')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  findKey: findKey,
  findKeyByValye: findKeyByValye,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  eqObjects: this.eqObjects,
  countLetters: countLetters,
  countOnly: countOnly,
  assertObjectsEqual: assertObjectsEqual


};