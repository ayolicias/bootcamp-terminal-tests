let assert = require("assert");
let fromWhere = require("../fromWhere");

describe ('fromWhere', function(){
  it('should count the transportFee for Cape Town', function(){
  assert.equal(fromWhere('CA'),'Cape Town');
  });

  // it('check type', function(){
  //   assert.typeOf(fromWhere('morning' ), 'string');
  // });

  it('should count the transportFee for Paarl', function(){
  assert.equal(fromWhere('CJ'),'Paarl');
  });
});
