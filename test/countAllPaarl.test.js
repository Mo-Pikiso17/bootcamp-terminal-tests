var assert = require('assert');
var functionToTest = require('../countAllPaarl');


describe('countAllPaarl function' , function(){
    it('should return the number registration numbers in a string for Paarl', function(){
        assert.deepEqual(3 , ("CJ 345 123,  CJ 2345, CJ 123").split(",").length);

    });

    it('should return two registration numbers in a string for Paarl', function(){
        assert.deepEqual(2 , ("CJ 2345, CJ 123").split(",").length);
 
    });

})