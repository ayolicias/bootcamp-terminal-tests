let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe(' countRegNumber', function(){
    it('counts regCount 5 regNumbers', function(){
      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CJ 812328,CJ 812328'), 5);
    });

    it('check regNumbers', function(){
      assert.equal(countRegNumber('CY 523519,CJ 812328,CJ 812328,CJ 812328'), 4);
    });
    });
