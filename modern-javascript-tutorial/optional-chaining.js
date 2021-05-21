'use strict';

// When use '?' keyword, it is available to judge whether the object is null or not.
// It is similar to null checking with '?' in C#.
function UserWithOptionalChaining() {
    this['name'] = 'anonymous';
    this['job'] = 'nothing';

    this.sayHi = function() {
        alert('Hi, my name is ' + this.name);
    };
};

let userWithOptionalChaining = new UserWithOptionalChaining();
// console.log(userWithOptionalChaining?.address?.street);

let otherUserWithOptionalChaining = {};
// userWithOptionalChaining.sayHi?.();
// otherUserWithOptionalChaining.sayHi?.();

// It is not available to use optional chaining when adding property on an object.
// Just being available to use it when delete property on an object.
// console.log(userWithOptionalChaining);
delete userWithOptionalChaining?.job;
// console.log(userWithOptionalChaining);