const app_controller = require('./src/controllers/app_controller');
const fs = require('fs');

const output = app_controller.app();

console.log('Calculating instructions...');

fs.writeFileSync('output.txt', output);
console.log('Finished! Check results on output.txt');
