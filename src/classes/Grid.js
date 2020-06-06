class Grid {
    constructor (xCoor, yCoor){
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.scents = [];
    }

    isOutOfTheGrid (xCoor, yCoor) {
        return (xCoor > this.xCoor || yCoor > this.yCoor || xCoor < 0 || yCoor < 0);
    }

    setScents (scent) {
        this.scents = [...this.scents, scent];
    }

    isScented (input){
        return this.scents.map(scent=>JSON.stringify(scent)).includes(JSON.stringify(input));
    }
}

module.exports = Grid;