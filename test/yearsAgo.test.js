let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe ('yearsAgo', function(){
it('returns how many yearsAgo that was', function(){
assert.equal(yearsAgo('2000'),'18');
});

it('check if is was last year', function(){
assert.equal(yearsAgo('2017'),'1');
});
});
