let assert = require("assert");
let regCheck = require("../regCheck");

describe(' regCheck', function(){
    it('check if a regNO is for MP is false ', function(){
      assert.equal(regCheck('CY189-012','CY'), false);

    });

    it('check if a regNO is for MP is true ', function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });
  });
