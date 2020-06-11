var grid_controller = require('../../src/controllers/grid_controller.js');
var Grid = require('../../src/classes/Grid.js');

describe("The grid_controller tests", () => {
    var result;

    describe("The mapGridGrid function", () => {
        it("should return Grid object from raw grid data", () => {
            var rawGridData = '5 3';
            result = grid_controller.mapGrid(rawGridData);
            expect(result).toEqual(new Grid(5, 3));
        });
    });

    describe("Errors testing", () => {
        describe("greaterThanFifty function", () => {
            it("should throw an error if the grid data yCoor is greater than 50", () => {
                expect(() => {grid_controller.mapGrid('5 51')}).toThrow(new Error("Grid size cannot be greater than 50"));
            });

            it("should throw an error if the grid data xCoor is greater than 50", () => {
                expect(() => {grid_controller.mapGrid('51 5')}).toThrow(new Error("Grid size cannot be greater than 50"));
            });
        });

        describe("isLessThanZero function", () => {
            it("should throw an error if the grid data xCoor is less than 0", () => {
                expect(() => {grid_controller.mapGrid('-1 5')}).toThrow(new Error("X coordinate or Y coordinate must be greater than 0"));
            });

            it("should throw an error if the grid data yCoor is less than 0", () => {
                expect(() => { grid_controller.mapGrid('5 -1')}).toThrow(new Error("X coordinate or Y coordinate must be greater than 0"));
            });
        });

        describe("isNotANumber function", () => {
            it("should throw an error if the grid data xCoor is not a number", () => {
                expect(() => {grid_controller.mapGrid('k 5')}).toThrow(new Error("X coordinate and Y coordinate must be numbers"));
            });

            it("should throw an error if grid data yCoor is not a number", () => {
                expect(() => {grid_controller.mapGrid('5 k')}).toThrow(new Error("X coordinate and Y coordinate must be numbers"));
            });
        });
    });
});
