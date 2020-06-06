const input_service = require('../service/input_service');
const grid_controller = require('./grid_controller');
const robot_controller = require('./robot_controller');

const robotOffTheGrid = ( robot, grid ) => grid.isOutOfTheGrid(robot.xCoor, robot.yCoor);

const robotGoingForward = ( robot, grid ) => {
    let currentOrientation ={xCoor: robot.xCoor, yCoor: robot.yCoor, robotOrientation: robot.robotOrientation};
    !grid.isScented(currentOrientation) && robot.moveForward();
}

const robotTurning = ( robot, instruction ) => robot.turns(instruction);

const executeInstructions = ( robot, instruction, grid ) => {
    (instruction == "F") ? robotGoingForward(robot, grid) : robotTurning(robot, instruction);
}

const movingRobotsOnMars = ( robot, grid ) => {
    robot.instructions.forEach(instruction => {  
        if(!robotOffTheGrid(robot,grid)){
            robot.previousXCoor = robot.xCoor;
            robot.previousYCoor = robot.yCoor;
            executeInstructions(robot,instruction,grid);
        } else {
            
            grid.setScents({
                xCoor: robot.previousXCoor,
                yCoor: robot.previousYCoor,
                robotOrientation: robot.robotOrientation
            });
            robot.isLost = true;
        }
    });
}

const app = () => {
    const grid = grid_controller.mapGrid(input_service.gridData);
    const robots = robot_controller.mapRobot(input_service.allRobotsData);
    let result = []
    robots.forEach((robot) => {        
        movingRobotsOnMars(robot, grid);
         if (robot.isLost) {
            result.push([robot.previousXCoor, robot.previousYCoor, robot.robotOrientation, "LOST"]);
        } else {
            result.push([robot.xCoor, robot.yCoor, robot.robotOrientation]);
        }    
    })
    result = result.join("\n").replace(/,/g, " ");
    return result;
}

module.exports = {app};

