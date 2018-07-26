let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe ('totalPhoneBill', function(){
  it('should count the totalPhoneBill', function(){
  assert.equal(totalPhoneBill('call, sms, call, sms, sms' ),'R7.45');
  });

  it('should count the totalPhoneBill', function(){
    assert.equal(totalPhoneBill('sms, call, sms, call, sms, call'), 'R10.20');
  });
});
