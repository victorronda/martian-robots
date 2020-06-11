const Robot = require('../../src/classes/Robot.js');

describe("The Robot tests", () => {
    let robot, result;

    beforeEach(() => {
        robot = new Robot(5, 3, "N", ["L","L"]);
    });

    describe("When we have a new Robot", () => {
        it("should initialize with xCoor, yCoor, facing direction, and instructions", () => {
            expect(robot.xCoor).toEqual(5);
            expect(robot.yCoor).toEqual(3);
            expect(robot.robotOrientation).toEqual("N");
            expect(robot.instructions).toEqual(["L","L"]);
            expect(robot.isLost).toBeFalsy();
        });
    });

    describe("When the robot tries to turns", () => {
        it("should be able to turns left", () => {
            robot.robotOrientation = "N";
            robot.turns("L");
            expect(robot.robotOrientation).toEqual("W");
        });

        it("should be able to turns right", () => {
            robot.robotOrientation = "E";
            robot.turns("R");
            expect(robot.robotOrientation).toEqual("S");
        });
    });

    describe("When the robot tries to moveForward", () => {
        beforeEach(() => {
            robot.xCoor = 5;
            robot.yCoor = 3;
        });

        it("should be able to moveForward towards the north", () => {
            robot.robotOrientation = "N";
            robot.moveForward();
            expect(robot.xCoor).toEqual(5);
            expect(robot.yCoor).toEqual(4);
        });

        it("should be able to moveForward towards the south", () => {
            robot.robotOrientation = "S";
            robot.moveForward();
            expect(robot.xCoor).toEqual(5);
            expect(robot.yCoor).toEqual(2);
        });

        it("should be able to moveForward towards the east", () => {
            robot.robotOrientation = "E";
            robot.moveForward();
            expect(robot.xCoor).toEqual(6);
            expect(robot.yCoor).toEqual(3);
        });

        it("should be able to moveForward towards the north", () => {
            robot.robotOrientation = "W";
            robot.moveForward();
            expect(robot.xCoor).toEqual(4);
            expect(robot.yCoor).toEqual(3);
        });
    });
});