const app_controller = require("../../src/controllers/app_controller.js");
const grid_controller = require('../../src/controllers/grid_controller.js');
const robot_controller = require('../../src/controllers/robot_controller.js');
const Grid = require('../../src/classes/Grid.js');
const Robot = require('../../src/classes/Robot.js');


describe("The app_controller tests", () => {
    let result;

    beforeEach(() => {
        const mockGrid = new Grid(5,3)
        const spy = jest.spyOn(grid_controller, 'mapGrid');
        const grid = grid_controller.mapGrid('5 3')
        expect(spy).toHaveBeenCalled();
        expect(grid).toEqual(mockGrid);
        spy.mockRestore();
    });

    describe("The app function", () => {
        it("should move a single robot on mars", () => {
            const mockRobot = [new Robot(1, 1, "E", "RFRFRFRF")];
            const spy = jest.spyOn(robot_controller, 'mapRobot');
            const robot = robot_controller.mapRobot(['1 1 E RFRFRFRF'])
            expect(spy).toHaveBeenCalled();
            expect(robot.xCoor).toBe(mockRobot.xCoor);
            expect(robot.yCoor).toBe(mockRobot.yCoor);
            expect(robot.robotOrientation).toBe(mockRobot.robotOrientation);
            expect(robot.instructions).toBe(mockRobot.instructions);
            spy.mockRestore();
            result = app_controller.app();
            const resultRobotPosition = JSON.stringify(result).substr(1,5);
            expect(resultRobotPosition).toEqual('1 1 E');

        });

        it("should stop if the robot is off the grid", () => {
            const mockRobot = [new Robot(3, 2, "N", "FRRFLLFFFFFF")];
            const spy = jest.spyOn(robot_controller, 'mapRobot');
            const robot = robot_controller.mapRobot(['3 2 N FRRFLLFFFFFF'])
            expect(spy).toHaveBeenCalled();
            expect(robot.xCoor).toBe(mockRobot.xCoor);
            expect(robot.yCoor).toBe(mockRobot.yCoor);
            expect(robot.robotOrientation).toBe(mockRobot.robotOrientation);
            expect(robot.instructions).toBe(mockRobot.instructions);
            spy.mockRestore();
            result = app_controller.app();
            const resultRobotPosition = JSON.stringify(result).substr(8,10);            
            expect(resultRobotPosition).toEqual('3 3 N LOST');
        });

        it("should execute multiple robots instructions on mars", () => {
            const mockRobotsArray = [new Robot(3, 2, "N", "FRRFLLFFRRFLL"), new Robot(0, 3, "W", "LLFFFLFLFL")];
            const spy = jest.spyOn(robot_controller, 'mapRobot');
            const robot = robot_controller.mapRobot(['3 2 N FRRFLLFFRRFLL', '0 3 W LLFFFLFLFL'])
            expect(spy).toHaveBeenCalled();
            expect(robot[0].xCoor).toBe(mockRobotsArray[0].xCoor);
            expect(robot[0].yCoor).toBe(mockRobotsArray[0].yCoor);
            expect(robot[0].robotOrientation).toBe(mockRobotsArray[0].robotOrientation);
            expect(robot[0].instructions.join('')).toBe(mockRobotsArray[0].instructions);
            expect(robot[1].xCoor).toBe(mockRobotsArray[1].xCoor);
            expect(robot[1].yCoor).toBe(mockRobotsArray[1].yCoor);
            expect(robot[1].robotOrientation).toBe(mockRobotsArray[1].robotOrientation);
            expect(robot[1].instructions.join('')).toBe(mockRobotsArray[1].instructions);
            spy.mockRestore();
            result = app_controller.app();
            const resultRobotsPosition = JSON.stringify(result).substr(8,12);
            console.log('Aquí', result);
            
            expect(resultRobotsPosition).toEqual('3 4 N\n2 3 E');
        });

        it("should skip forward if trajectory matches a scent", () => {
            const mockRobotsArray = [new Robot(3, 2, "N", "FF"), new Robot(0, 3, "E", "FF")];
            const spy = jest.spyOn(robot_controller, 'mapRobot');
            const robot = robot_controller.mapRobot(['3 2 N FF', '0 3 E FF'])
            expect(spy).toHaveBeenCalled();
            expect(robot[0].xCoor).toBe(mockRobotsArray[0].xCoor);
            expect(robot[0].yCoor).toBe(mockRobotsArray[0].yCoor);
            expect(robot[0].robotOrientation).toBe(mockRobotsArray[0].robotOrientation);
            expect(robot[0].instructions.join('')).toBe(mockRobotsArray[0].instructions);
            expect(robot[1].xCoor).toBe(mockRobotsArray[1].xCoor);
            expect(robot[1].yCoor).toBe(mockRobotsArray[1].yCoor);
            expect(robot[1].robotOrientation).toBe(mockRobotsArray[1].robotOrientation);
            expect(robot[1].instructions.join('')).toBe(mockRobotsArray[1].instructions);
            spy.mockRestore();
            result = app_controller.app();
            const resultRobotsPosition = JSON.stringify(result).substr(8,17);
            expect(resultRobotsPosition).toEqual(`3 3 N LOST\\n2 3 S`);
        });
    });
});