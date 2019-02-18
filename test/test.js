var expect = require('chai').expect;
var addTwoNumbers = require('../addTwoNumbers');

describe('addTwoNumbers()', function () {
    it('should add two numbers', function (){
        
        //ARRANGE
        var x = 8;
        var y = 2;
        var firstSum = x + y;    

        //ACT
        var secondSum = addTwoNumbers(x, y);

        //ASSERT
        expect(secondSum).to.be.equal(firstSum);

    });
});