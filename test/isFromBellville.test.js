let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function',function(){

  it('returns true if a reg number is from Bellville', function(){
        assert.equal(isFromBellville('CY123'), true);
});
  it('returns false if a reg number is not from Bellville', function(){
        assert.equal(isFromBellville('CA645'), false);
});
});
