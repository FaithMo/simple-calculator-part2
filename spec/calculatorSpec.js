let newCalculator = require('../src/calculator');

describe("Calculate", function () {

    it("should add zeros", function () {
        let answer1 = newCalculator.add(0,0);
        expect(answer1).toBe(0);
    });

    it("should add negative numbers", function () {
        let answer2 = newCalculator.add(-1,-1);
        expect(answer2).toBe(-2);
    });

    it("should add two numbers", function () {
        let answer3 = newCalculator.add(4,5);
        expect(answer3).toBe(9);
    });

    it("should add multiple numbers", function () {
        let answer4 = newCalculator.add(1,2,3,4);
        expect(answer4).toBe(10);
    });

    it("should multiply numbers", function () {
        let answer5 = newCalculator.multiply(2,2);
        expect(answer5).toBe(4);
    });

    it("should multiply multiple numbers", function() {
        let answer6= newCalculator.multiply(1,2,3,4);
        expect(answer6).toBe(24);
    });

    it("should return the last result", function() {
        let answer7= newCalculator.last();
        expect(answer7).toBe(24); //from the multiply spec above.
    });

    it("should set slot", function() {
        let answer8= newCalculator.set_slot(1);
        expect(answer8).toBe(24); //last test being multiplication spec above.
    });

    it("should get slot", function() {
        let answer9= newCalculator.set_slot(1);
        expect(answer9).toBe(24);
    });

});




