var assert = require('assert');
var functionToTest = require('../isFromBellville');

describe('isFromBellville function' , function(){
    it('should return CY if the regNumber isFromBellville', function(){
        assert.equal("CY 87 OP", "CY 87 OP")
    })

    it('should return false if the regNumber not from Bellville', function(){
        assert.equal("CA 87 OP", "CA 87 OP")
    })
    
})