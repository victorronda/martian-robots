const fs = require('fs');

const input = fs.readFileSync('input.txt','utf8').split("\n").filter(elem=>elem);

const [gridData, ...rawRobotsData] = input;

let allRobotsData = rawRobotsData.map((data, index) => index % 2 === 0 && data + ' ' + rawRobotsData[index + 1]).filter(elem=>elem);

module.exports = {
    gridData,
    allRobotsData
}
