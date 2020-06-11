class Robot {
    constructor (xCoor, yCoor, robotOrientation, instructions){
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.robotOrientation = robotOrientation;
        this.instructions = instructions;
        this.isLost = false;

    }
    
    moveForward () {
        let toDirection = {
            'N': {xCoor: this.xCoor, yCoor: this.yCoor + 1},
            'S': {xCoor: this.xCoor, yCoor: this.yCoor - 1},
            'E': {xCoor: this.xCoor + 1, yCoor: this.yCoor},
            'W': {xCoor: this.xCoor - 1, yCoor: this.yCoor}
        };
        this.xCoor = toDirection[this.robotOrientation].xCoor;
        this.yCoor = toDirection[this.robotOrientation].yCoor;
    }

    turns ( direction) {
        const turningDirections = {
            "L": {"N": "W", "W": "S", "S": "E", "E": "N"},
            "R": {"N": "E", "E": "S", "S": "W", "W": "N"}
        }
        this.robotOrientation = turningDirections[direction][this.robotOrientation];
    }
}

module.exports = Robot;