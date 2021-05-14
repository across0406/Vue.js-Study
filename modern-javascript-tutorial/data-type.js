'use strict';

// Number
let n = 123;
let m = 12.34;
let inf = 1 / 0;
let nan = 'It is not number' / 2;
// alert(inf);
// alert(nan);

// FrieFox, Chomre, Edge support bigInt;
// But, Safari and IE don't support bigInt;
let bigInt = 123456789123456789123456789n;
// alert(bigInt);

// String
let str = "Hello";
let str2 = 'Single quotes are also ok!';
let phrase = `can embed another ${str}`;

// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
// alert(isGreater);

// null & undefined
// If there is null, the meaning is that the value is nothing, empty, or unknown.
let val = null;
// alert(val);
// The meaning is not assigned any value state when there is undefined.
val = undefined;
// alert(val);

// typeof
// typeof x == typeof(x)

// assignment string quotes
let assignmentName = 'Ilya';
// alert( `hello ${1}`);
// alert( `hello ${"assignmentName"}`);
// alert( `hello ${assignmentName}`);