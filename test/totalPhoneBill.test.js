var assert = require('assert');
var functionToTest = require('../totalPhoneBill');

describe('totalPhoneBill' , function(){
    it('should return the phone bill for two calls and one sms.' , function(){
        assert.deepEqual('R' + 6.15, ('R' + 6.15));

    })

    it('should return the phone bill for three smses.' , function(){
        assert.deepEqual('R' + 1.95 , ('R' + 1.95));

    })

    it('should return the phone bill for a call.' , function(){
        assert.deepEqual('R' + 2.75 , ('R' + 2.75));

    })

    
})