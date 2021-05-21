'use strict';

// assignment
try {
    let a = 0;
    let b = 0;

    // a = Number( prompt('Please input number', 0) );
    // b = Number( prompt('Please input number', 0) );
    // console.log(a + b);
} catch (error) {
    console.error(error);
}

// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));
// console.log((Math.round(6.35 * 10) / 10).toFixed(1));

function readNumber() {
    let flag = true;
    let a = 0;

    while (flag) {
        console.log(a);
        try {
            let b = prompt('Please input number', '0');
            a = Number(b);
            flag = false;
        } catch (error) {
            console.error(error);
            flag = true;
        }
    }

    console.log(a);
};

readNumber();
