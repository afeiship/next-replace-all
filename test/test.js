var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-replace-all');

describe('next/replaceAll', function () {

  it('replace all', function () {
    var rs1 = nx.replaceAll("foo", "o", "a")

    assert.equal(rs1, 'faa');
  });

});
