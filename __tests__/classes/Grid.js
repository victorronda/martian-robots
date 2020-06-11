const Grid = require('../../src/classes/Grid.js');

describe("The Grid tests", () => {
    let grid, result;

    beforeEach(() => {
        grid = new Grid(5, 3);
    });

    describe("When we initialize the Grid", () => {
        it("should create new grid with xCoor and yCoor", () => {
            expect(grid.xCoor).toEqual(5);
            expect(grid.yCoor).toEqual(3);
        });

        it("should have no scents", () => {
            expect(grid.scents).toEqual([]);
        });
    });

    describe("When the robot is out of the grid", () => {
        it("should know xCoor lower border", () => {
            result = grid.isOutOfTheGrid(-1, 0);
            expect(result).toBeTruthy();
        });

        it("should know xCoor upper border", () => {
            result = grid.isOutOfTheGrid(6, 0);
            expect(result).toBeTruthy();
        });

        it("should know yCoor lower border", () => {
            result = grid.isOutOfTheGrid(1, -1);
            expect(result).toBeTruthy();
        });

        it("should know yCoor upper border", () => {
            result = grid.isOutOfTheGrid(5, 4);
            expect(result).toBeTruthy();
        });

        it("should pass corrects xCoor and yCoor" , () => {
            result = grid.isOutOfTheGrid(2, 2);
            expect(result).toBeFalsy();
        });
    });

    describe("When we need to set a scent", () => {

        it("should add new scents to Grid's scents' array", () => {
            grid.setScents('scent 1');
            grid.setScents('scent 2');
            expect(grid.scents).toEqual(['scent 1', 'scent 2']);
        });
    });

    describe("When we check if it's scented", () => {
        it("should be return true if is in Grid scents", () => {
            grid.scents = ['scent 1', 'scent 2'];
            result = grid.isScented('scent 1');
            expect(result).toBeTruthy();
        });

        it("should be return false if is not in Grid scents", () => {
            grid.scents = ['scent 1', 'scent 2'];
            result = grid.isScented('scent 3');
            expect(result).toBeFalsy();
        });
    });
});