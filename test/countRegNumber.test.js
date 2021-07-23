var assert = require('assert');
var functionToTest = require('../countRegNumber');


describe('countRegNumber function' , function(){
    it('should return the number of regNo in a string of three', function(){
        var regCount = ('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount.split(",").length, 3);
    });
        it('should return the number of regNo in a string of two', function(){
            var regCount = ('CA 42665, AA 12 RT GP')

            assert.equal(regCount.split(",").length, 2);   
    });

    
it('should return the number of regNo in a string of two', function(){
    var regCount = ('CA 182736, CA 123222')
    assert.equal(regCount.split(",").length, 2)
});
})