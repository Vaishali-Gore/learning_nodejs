const obj = {
    name: "Vaishali",
    greet: function(age, rollno){
        console.log(`Hello ${this.name} and age is ${age} and roll no is ${rollno}`)
    }
}


obj.greet(29);
obj.greet.call({name: 'Ganesh'}, 35, 20);
obj.greet.apply({name: 'Vishwas'}, [58, 21]);
const greeting = obj.greet.bind({name:"Prerna"});
greeting(35, 56);