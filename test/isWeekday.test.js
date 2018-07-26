let assert =require("assert");
let isWeekday = require("../isWeekday");

describe(' isWeekday', function(){
    it('find out if it is a weekday', function(){
      assert.equal(isWeekday('Monday'), true);
    });
    it('find out if it is a weekday', function(){
      assert.equal(isWeekday('Saturday'), false);

    });
    });
