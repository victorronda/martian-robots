const Robot = require('../classes/Robot');

const robotController = (allRobotsData) => {
    return allRobotsData.map(oneRobotData =>{
        const [ xCoor, yCoor, robotOrientation, instructions ] = oneRobotData.split(" ");
        checkingErrors(Number(xCoor),Number(yCoor),robotOrientation,[...instructions])
        return new Robot(Number(xCoor),Number(yCoor),robotOrientation,[...instructions])
    })
}

const moreThanOneHundredInstructions = instructions => {
    if (instructions.length > 100) throw new Error("Robot instructions must be less than 100");
}

const notValidDirection = robotOrientation => {
    if( !(robotOrientation === 'N'|| robotOrientation === 'E' || robotOrientation ==='S' || robotOrientation === 'W') ){ 
        throw new Error("The robot orientation must be N, E, S or W");
    }
}

const notANumber = ( xCoor, yCoor ) => {
	if (isNaN(xCoor) || isNaN(yCoor)) throw new Error("Robot coordinates must be a numbers");
};

const invalidInstructions = instructions => {
    instructions.forEach(instruction => {        
        if( !(instruction === "F" || instruction === "L" || instruction === "R") ){
            throw new Error("Robot instructions must be F, L or R")
        }
    })
}

const checkingErrors = ( xCoor, yCoor, robotOrientation, instructions ) => {
    moreThanOneHundredInstructions(instructions);
    notValidDirection(robotOrientation);
    notANumber(xCoor,yCoor);
    invalidInstructions(instructions);
}

module.exports = robotController;

