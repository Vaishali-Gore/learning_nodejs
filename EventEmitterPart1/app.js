var Emitter = require('./eventEmitter') ;

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log("sometime, somewhere said Hello!")
})

emtr.on('greet', function(){
    console.log('Sometime, someone said Hello again')
})

console.log("Hello World");
emtr.emit('greet');