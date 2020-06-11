const input_service = require("../../src/service/input_service.js");
const fs = require('fs');

describe("The input_service tests", () => {
    let instructions, result;

    beforeEach(() => {
        instructions = '5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL';
        const spy = jest.spyOn(fs, 'readFileSync');
        const readingText = fs.readFileSync('input.txt','utf8');
        expect(spy).toHaveBeenCalled();
        expect(readingText).toEqual(instructions);
        spy.mockRestore();

        
    });

    describe("The gridData array", () => {
        it("should return grid information", () => {
            result = input_service.gridData;            
            expect(result).toEqual('5 3');
        });
    });

    describe("The allRobotsData array", () => {
        it("should return all robots information", () => {
            result = input_service.allRobotsData;
            expect(result).toEqual(["1 1 E RFRFRFRF", "3 2 N FRRFLLFFRRFLL", "0 3 W LLFFFLFLFL"]);
        });
    });
});

