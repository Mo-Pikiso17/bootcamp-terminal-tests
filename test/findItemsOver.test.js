var assert = require('assert');
var functionToTest = require('../findItemsOver');

describe('findItemsOver function' , function(){
    it('should return items that are over the threshold of 20' , function(){
        assert.deepEqual([{name:"apples",qty:40},{name:"bananas",qty:23},{name:"kiwi",qty:37}],
        
        ([{name:"apples",qty:40},{name:"bananas",qty:23},{name:"kiwi",qty:37}]))

    })

    it('should return items that are over the threshold of 25' , function(){
        assert.deepEqual([{name:"apples",qty:40},{name:"pears",qty:37}],
        
        ([{name:"apples",qty:40},{name:"pears",qty:37}]))

    })

})