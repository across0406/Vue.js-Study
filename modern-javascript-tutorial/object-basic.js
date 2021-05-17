'use strict';

// There are two ways to create object.
let usingNew = new Object();
let usingLiteral = {};

// Declaration through using {...} is called object literal.

// The object of JavaScript is similar to dictionary of Python and C#.
// There is an example for using property.
// "name", "age" are called key, and "John", age are called value.
// "name: "John"" is first property in the object.
// "age: 30" is second property in the object.
let userWithProperty = {
    name: "John",
    job: 'artist',
};
// console.log(userWithProperty);

// When add a property, just use dot notation.
userWithProperty.gender = true;
// console.log(userWithProperty);

// When remove a property, use "delete" keyword.
delete userWithProperty.age;
// console.log(userWithProperty);

// Be careful. the object declared "const" is availble to be modified its properties.
const constUserWidthProperty = {
    name: "LiSA",
};
// console.log(constUserWidthProperty);

constUserWidthProperty.job = "singer";
// console.log(constUserWidthProperty);

// There is another way to add or access property. It is using square bracket notation "[]".
constUserWidthProperty['songs'] = [ 'Gurenge', '炎' ];
// console.log(constUserWidthProperty['songs']);

// Example
// Cannot use a key variable on dot notation.
// let constUserKey = prompt('Please input key what you want to know (name, job, songs)', '');
// alert(constUserWidthProperty[constUserKey]);

// Property Value Shorthand
function makeUser(name, job){
    return {
        name,
        job,
    };
}

let funcPvsUser = makeUser('wagakki-band', 'artist');
// console.log(funcPvsUser['name'], funcPvsUser['job']);
// console.log('name' in funcPvsUser);

// assignment
let helloObject = {};
helloObject['name'] = 'John';
helloObject['surname'] = 'Smith';
helloObject['name'] = 'Pete';
delete helloObject['name'];
// console.log(helloObject);

function isEmpty(obj){
    let retEmptyResult = false;
    let count = 0;

    for (let key in obj){
        count++;
    }

    if (count === 0){
        retEmptyResult = true;
    } else {
        retEmptyResult = false;
    }

    return retEmptyResult;
}

let schedule = {};
// console.log( isEmpty(schedule) );
schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) );

const constDeclaredUser = {
    name: 'John',
};
// console.log( constDeclaredUser );
constDeclaredUser['name'] = 'LiSA';
// console.log( constDeclaredUser );

function salarySummation(salaries){
    let sum = 0;

    if (typeof salaries !== 'object'){
        sum = 0;
    } else {
        for (let key in salaries){
            if ( typeof salaries[key] !== 'number'){
                continue;
            } else {
                sum += salaries[key];
            }
        }
    }

    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let salarySum = salarySummation(salaries);
// console.log(salarySum);

function numberEntityAmplify(obj){
    let result = 0;

    if (typeof obj !== 'object'){
        result = 1;
    } else {
        for (let key in obj){
            if ( typeof obj[key] !== 'number'){
                continue;
            } else {
                obj[key] *= 2;
            }
        }

        result = 0;
    }

    return result;
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

numberEntityAmplify(menu);
// console.log(menu);

// assignment
function makeUserWithThis(){
    return {
        name: "John",
        ref: this,
    };
};

let userWithThis = makeUserWithThis();
// console.log(userWithThis.ref.name);

let calculator = {
    operand1: 0,
    operand2: 0,
    read(){
        try {
            this.operand1 = Number(prompt('Please input first operand.', 0));
            this.operand2 = Number(prompt('Please input second operand.', 0));
        } catch (error) {
            // console.log(error);
        }
    },
    sum(){
        return this.operand1 + this.operand2;
    },
    mul(){
        return this.operand1 * this.operand2;
    },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
    step: 0,
    init() {
        this.step = 0;
        return this;
    },
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        // console.log(this.step);
    },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.init();
ladder.up().up().down().showStep();