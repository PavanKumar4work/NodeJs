var events = require('events');
var path = require('path');

var eventEmit = new events.EventEmitter();

eventEmit.on('Display_dir', function(){
    console.log('DirName: ' + __dirname);
    eventEmit.emit('Display_file');
});


eventEmit.on('Display_file', function(){
    console.log('FileName: ' + __filename);
});

eventEmit.on('Display_Process', function(){
    console.log('Processor Architecture: ' + process.arch);
    console.log('Processor Platform: ' +  process.platform);
    console.log('Process ID: ' +  process.pid.toString());
    
});

eventEmit.emit('Display_Process');
eventEmit.emit('Display_dir');

