class Robot {
    constructor (xCoor, yCoor, robotOrentation, instructions){
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.robotOrentation = robotOrentation;
        this.instructions = instructions;
    }
    
    moveForward () {
        var toDirection = {
            'N': {xCoor: this.xCoor, yCoor: this.yCoor + 1},
            'S': {xCoor: this.xCoor, yCoor: this.yCoor - 1},
            'E': {xCoor: this.xCoor + 1, yCoor: this.yCoor},
            'W': {xCoor: this.xCoor - 1, yCoor: this.yCoor}
        };
        this.xCoor = toDirection[this.robotOrentation].xCoor;
        this.yCoor = toDirection[this.robotOrentation].yCoor;
    }

    turns ( direction) {
        const turningDirections = {
            "L": {"N": "W", "W": "S", "S": "E", "E": "N"},
            "R": {"N": "E", "E": "S", "S": "W", "W": "N"}
        } 
        this.robotOrentation = turningDirections.direction[this.robotOrentation]
    }
};

module.exports = Robot;