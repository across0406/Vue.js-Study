'use strict';

// It is equal to the following:
// let func = function(){ console.log('this is lambda.');};
let func = () => console.log('This is lambda.');

// func();

let sum = (a, b) => a + b;
// console.log(sum(1, 2));

// Example
// let urAge = prompt('Please let me know your age', 10);
// let welcome = (urAge < 18) ? 
//     () => {
//         alert('Hi');
//     } :
//     () => {
//         alert('Hello');
//     };
// welcome();

// Assignment porting normal function to lambda expression
function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
}

// ask('Do you agree?', function(){alert('You agreed.')}, function(){alert('Canceled.')});

let askLambda = (question, yes, no) => {
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
}

// askLambda('Do you agree?', 
//     () => {alert('You agreed.')}, 
//     () => {alert('Canceled.')}
// );