let assert = require("assert");
let transportFee = require("../transportFee");

describe ('transportFee', function(){
  it('check which shift for transportFee function', function(){
  assert.equal(transportFee('morning'),'R20');
  });

  // it('check type shift for transportFee function ', function(){
  //   assert.typeOf(transportFee('morning' ), 'string');
  // });
  it('check which shift for afternoon transportFee function ', function(){
    assert.equal(transportFee('afternoon' ), 'R10');
  });
});
