const assert = require('chai').assert;
const middle   = require('../middle');

describe("#tail", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [6,7] for [5, 6, 7, 8]", () => {
    assert.deepEqual(middle([5, 6, 7,8]), [6,7]);
  });

 
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse','Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse','Labs']), ['Lighthouse']);
  });

});
