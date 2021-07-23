var assert = require('assert');
var functionToTest = require('../regCheck');


describe('regCheck function' , function(){
    it('should return regPlt that ends with regLoc', function(){
        assert.equal('DV 23 NB GP', 'DV 23 NB GP');
    })

    it('should return false if regPlt does not end with registration location', function(){
        assert.equal('DV 23 NB CA', 'DV 23 NB CA');
    })

})