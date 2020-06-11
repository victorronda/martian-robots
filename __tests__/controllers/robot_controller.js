const robot_controller = require('../../src/controllers/robot_controller.js');
const Robot = require('../../src/classes/Robot.js');

describe("The robot_controller tests", () => {
    let result;

    describe("The mapRobot function", () => {
        it("should return Robot objects from raw robots data", () => {
            const rawRobotsData = ["1 1 W LF", "1 3 N LF"];
            result = robot_controller.mapRobot(rawRobotsData);
            expect(result).toEqual([new Robot(1, 1, "W", ["L", "F"]), new Robot(1, 3, "N", ["L", "F"])]);
        });
    });

    describe("Errors checking", () => {
        describe("The notANumber function", () => {
            it("should throw an error if the robot data xCoor is not a number", () => {
                expect(() => {robot_controller.mapRobot(["k 1 E F"])}).toThrow(new Error("Robot coordinates must be a numbers"));
            });

            it("should throw an error if the robot data yCoor is not a number", () => {
                expect(() => {robot_controller.mapRobot(["1 k E O"])}).toThrow(new Error("Robot coordinates must be a numbers"));
            });
        });

        describe("The notValidDirection function", () => {
            it("should throw an error if the robot facing direction is not N, E, S, or W", () => {
                expect(() => {robot_controller.mapRobot(["1 1 K MM"])}).toThrow(new Error("The robot orientation must be N, E, S or W"));
            });
        });

        describe("The invalidInstructions function", () => {
            it("should throw an error if the robot instruction is not F, L, or R", () => {
                expect(() => {robot_controller.mapRobot(["1 1 N SA"])}).toThrow(new Error("Robot instructions must be F, L or R"));
            });
        });

        describe("The moreThanOneHundredInstructions function", () => {
            it("should throw an error if the robot instruction has more than 100 characters", () => {
                expect(() => {robot_controller.mapRobot(["1 1 N LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"])}).toThrow(new Error("Robot instructions must be less than 100"));
            });
        });
    });
});