 //event emitter function comstructor which will take event object 
// Emitter{
//     this.events = {
//         prop : []
//     }
// }
function Emitter() {
    this.events={}
}

//if event does not have property the [] will assign and [] will hold functions
Emitter.prototype.on = function(type,listner){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listner)
};
 //foreach on array calling all event functions present in an array
Emitter.prototype.emit= function(type){
    if(this.events[type]){
        this.events[type].forEach(listner => {
            listner();
        });
    }
}

module.exports = Emitter;