//My own module
const logger = require('./logger');
//console.log(ulr);
console.log(logger);
var message = ' ';
console.log(global.message);
logger.log(message);
logger.log(logger.ulr);
//jshint <file>
//Path module
const path = require('path');

var pathObj = path.parse(__filename);
var pathDir = path.parse(__dirname);
console.log(pathObj);
console.log(pathDir);
//Operating system module
const os = require('os');

var totalMemory = os.totalmem;
var freeMemory = os.freemem;
console.log('Total Memory' + totalMemory);
console.log('Free Memory ' + freeMemory);

const fs = require('fs');
//Sync slower, one thread
/*const files = fs.readdirSync('./');
console.log(files);*/

fs.readdir('./',function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});