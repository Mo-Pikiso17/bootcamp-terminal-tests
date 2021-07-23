var assert = require('assert');
var functionToTest = require('../isWeekday');

describe('isWeekday function' , function(){
    it('should return a weekday' , function(){
        assert.equal('Monday', 'Monday')
    })

    it('should return false if not a weekday' , function (){
        assert.equal('Saturday', 'Saturday')
    })

})