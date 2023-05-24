//My own module
const app = require('./app.js');
console.log(app.adresa);
console.log(app);
var message = ' ';
console.log(global.message);
app.sprava(message);
app.sprava(app.adresa);

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


//File module
const fs = require('fs');

//Sync slower, one thread
/*const files = fs.readdirSync('./');
console.log(files);*/

fs.readdir('./',function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});





//Event and logger module
const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

//listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called ', arg);
});
logger.log('Real message');



//HTTP module
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/praxe') {
        res.write('Praxe')
        res.end();
    }
    if (req.url === '/array') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


/*server.on('connection', (socket) => {
    console.log('New connection...');
});*/

server.listen(3000);
console.log('Listening on port 3000...');




