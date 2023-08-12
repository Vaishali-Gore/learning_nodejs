const Emitter = require('events');
const util = require('util');

function Greetr(){
    this.greeting ='hello world'
}

util.inherits(Greetr, Emitter);

console.log("Hello")

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ':'+ data);
    this.emit('greet', data)
}

const greeter1 = new Greetr;

greeter1.on('greet', function(){
    console.log("Greetr object inherits properties of event emitter")
})

greeter1.emit('tony')

