let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Lihle correctly', function(){
        assert.equal('Hello, Lihle', greet('Lihle'));
    });
    it('should greet Ziya correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Ziya', greet('Ziya'));
    });
});
