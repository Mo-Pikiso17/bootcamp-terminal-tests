var assert = require('assert');
var functionToTest = require('../transportFee');

describe('transportFee' , function(){
    it('should return the right price for the morning shift.' , function(){
        assert.deepEqual('R20', ('R20'));
    })
    it('should return the right price for the afternoon shift.' , function(){
        assert.deepEqual('R10', ('R10'));
    })

    it('should return the right price when there is no shift.' , function(){
        assert.deepEqual('free', ('free'));
    })
})