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
    age: 30,
};
console.log(userWithProperty);

// When add a property, just use dot notation.
userWithProperty.gender = true;
console.log(userWithProperty);

// When remove a property, use "delete" keyword.
delete userWithProperty.age;
console.log(userWithProperty);

// Be careful. the object declared "const" is availble to be modified its properties.
const constUserWidthProperty = {
    name: "LiSA",
};
console.log(constUserWidthProperty);

constUserWidthProperty.job = "singer";
console.log(constUserWidthProperty);

// There is another way to add or access property. It is using square bracket notation "[]".
constUserWidthProperty['songs'] = [ 'Gurenge', '炎' ];
console.log(constUserWidthProperty['songs']);

// Example
// Cannot use a key variable on dot notation.
let constUserKey = prompt('Please input key what you want to know (name, job, songs)', '');
alert(constUserWidthProperty[constUserKey]);