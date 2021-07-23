var assert = require('assert');
var functionToTest = require('../countAllFromTown');

describe('countAllFromTown function' , function(){
    it('should return the registration numbers in the string that town (CL).' , function(){
        
        var rCount = ('CL 124, CL 345, CL 341')
        assert.deepEqual(rCount.split(",").length, 3);
    })

    it('should return the registration numbers in the string that town (CY)' , function(){
        
        var rCount = ('CY 567')

        assert.deepEqual(rCount.split(",").length, 1);
    })

    it('should return the registration numbers in the string that town (CJ)' , function(){
        
        var rCount = ('CJ 456')

        assert.deepEqual(rCount.split(",").length, 1);
    })
})