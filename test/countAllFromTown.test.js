let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe ('countAllFromTown', function(){
it('counts number of registration for stellenboch', function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
});
it('counts number of registration for bellville', function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345,','CY'), 1);
});
});
