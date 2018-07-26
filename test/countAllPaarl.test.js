let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe ('countAllPaarl', function(){
it('counts number of registration for Paarl', function(){
assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CJ 123, CAS 565, CY 75757'),3);
});

it('counts number of registration for Paarl', function(){
assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CY 855'),2);
});
});
