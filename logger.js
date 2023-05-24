const EventEmitter = require('events');
var url = 'hhtp///mylogger';

class Logger extends EventEmitter{
    log(message){
    
    console.log(message);
    //raise an event
    this.emit('messageLogged', {id: 1 , ulr: url});
}
}

module.exports = Logger;