//Object oriented programming

//Constrctor function and the "new" operator

//We can not use arrow function as constructor

//Call "constructor" function using "new" keyword

//1 new {object} created empty initially
//2 "this" = {object}
//3 object linked to prototype
//4 functional automatically return {object}

//ES6 classes(They still implement prototypal inheritance)

//Class declaration

//Parent class
class Car{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    //Method
    startEngine = () => {
        console.log("This is start engine method of class");
    }
    //getter and setter methods in js
    get _startEngine(){
        console.log("this is using get method");
    }

    set changeColor(color){ 
        //Both console.log are right
        console.log(this.color = color)
        console.log(color)
    }
}

let honda = new Car("red", "2009");
console.log(honda)
honda.startEngine()
honda._startEngine;         //access get method
honda.changeColor = "blue"; //access set method


//child Class

class Bike extends Car {
    constructor(color, model, engineCapacity){
        super(color, model)
        this.engineCapacity = engineCapacity
    }
    
}
let newBike = new Bike("triumph", 2022, "125CC")
console.log(honda)
console.log(newBike)


//Bank transaction

class bank{
    constructor(owner, pin){
        this.owner = owner;
        this.pin = pin;
        this.movement = [];
    }

    getMovement(){
        return this.movement;
    }

    deposit(val){
        this.movement.push(val)
        return this;
    }

    withdraw(val){
        return this.deposit(-val)
        return this;
    }
}

let transactions = new bank("Ayaan", 2203)
transactions.deposit(100).withdraw(50).deposit(20);
console.log(transactions.getMovement())