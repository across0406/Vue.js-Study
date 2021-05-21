'use strict';

function UserWithNew(name) {
    // An empty object is created temporary as this.
    // this = {};

    // And add new properties on this object.
    this.name = name;
    this.isAdmin = false;

    // It is available to add method on constructor function.
    this.sayHi = function() {
        alert('My name is ' + this.name);
    };

    // 'return' keyword is not used almost, but sometimes it is used.
    // When it is used, there are two cases.
    // First, using 'return' with other object, it means returning to other object.
    // Second, using 'return' with primitive data or alone, 'return' keyword is ignored.
    // return { name: 'Godzilla' }; => returning the object in which name is 'Godzilla'.
    // return; or return 1; => 'return' keyword is ignored.
};

// Constructor function is available to be replaced to lambda expression.
// let userWithNew = new function(){
//     this.name = "Jack";
//     this.isAdmin = false;
// };
let userWithNew = new UserWithNew('Jack');
// console.log(userWithNew);
// userWithNew.sayHi();

// assignment
let retObj = {};
function A() {
    return retObj;
};

function B() {
    return retObj;
};

let objA = new A;
let objB = new B;

// console.log(objA === objB);

function Calculator() {
    this.firstOperand = 0;
    this.secondOperand = 0;

    this.read = function() {
        try {
            this.firstOperand = Number(prompt('Please input first operand.', 0));
            this.secondOperand = Number(prompt('Please input second operand.', 0));
        } catch (error) {
            console.log(error);
            this.firstOperand = 0;
            this.secondOperand = 0;
        }
    };
    this.sum = function() {
        return this.firstOperand + this.secondOperand;
    };
    this.mul = function() {
        return this.firstOperand * this.secondOperand;
    };
}

let calculatorWithNew = new Calculator();
// calculatorWithNew.read();
// console.log(calculatorWithNew.sum());
// console.log(calculatorWithNew.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        try {
            this.value += Number(prompt('Please input value.', 0));
        } catch (error) {
            console.log(error);
        }
    };
};

let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);