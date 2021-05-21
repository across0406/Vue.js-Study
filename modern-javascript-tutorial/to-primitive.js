'use strict';

function WithToPrimitive() {
    this['name'] = '';
    this['money'] = 1000;

    this[Symbol.toPrimitive] = function(hint) {
        // console.log(`hint: ${hint}`);
        return hint == 'string' ? `{name: "${this.name}"}` : this.money;
    };
};

let userWithToPrimitive = new WithToPrimitive();
// console.log(userWithToPrimitive);
// console.log(+userWithToPrimitive);
// console.log(userWithToPrimitive + 500);