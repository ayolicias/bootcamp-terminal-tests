let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe ('findItemsOver20', function(){

  var items=[{name : 'apples', qty : 10},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}];

    var result=[{'name' : 'bananas', 'qty' : 27}];

  it('should count the itemListOver20', function(){
  assert.deepEqual(findItemsOver20(items), result);
});

var items2=[{name : 'apples', qty : 37},
  {name : 'bananas', qty : 10},
  {name : 'pears', qty : 12}];

  var result2= [{'name' : 'apples', 'qty' : 37}];

it('should count items less than20', function(){
assert.deepEqual(findItemsOver20(items2),result2);
});
});
