const Grid = require('../classes/Grid');

const gridController = (gridData) => {
	let [ xCoor, yCoor ] = gridData.split(' ');
    checkingErrors(Number(xCoor) , Number(yCoor) );
    return new Grid( Number(xCoor), Number(yCoor) );
};

const greaterThanFifty = (xCoor, yCoor) => {
	if (xCoor > 50 || yCoor > 50) throw new Error('Grid size cannot be greater than 50');
};

const greaterThanZero = (xCoor, yCoor) => {
	if (xCoor < 0 || yCoor < 0 || ( xCoor === 0 && yCoor  === 0)) {
	    throw new Error('X coordinate or Y coordinate must be greater than 0');
	}
};

const notANumber = (xCoor, yCoor) => {
	if (isNaN(xCoor) || isNaN(yCoor)) throw new Error('X coordinate and Y coordinate must be numbers');
};

const checkingErrors = (xCoor, yCoor) => {
	greaterThanFifty(xCoor, yCoor);
	greaterThanZero(xCoor, yCoor);
	notANumber(xCoor, yCoor);
};

module.exports = gridController;
