var assert = require('assert');
var functionToTest = require('../findItemsOver20');

describe('findItemsOver20 function' , function(){
    it('should return items that have the quantity of over 20' , function(){
        assert.deepEqual([{name : 'pears', qty : 21},
        {name : 'bananas', qty : 23}], 
            ([{name : 'pears', qty : 21},
            {name : 'bananas', qty : 23}]))

    })

    it('should return items that have the quantity of over 25' , function(){
        assert.deepEqual([{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 30}
    ], 
        
        ([
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 30}]))

    })

})