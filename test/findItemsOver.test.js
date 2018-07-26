let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe ('findItemsOver', function(){
  it('should finds the ItemsOver', function(){
  assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}], 20), [{'name' : 'bananas', 'qty' : 27}])
});

it('should finds the items less', function(){
assert.deepEqual(findItemsOver ([{name : 'apples', qty : 10},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3}], 20), [{'name' : 'bananas', 'qty' : 27}])
});
});
