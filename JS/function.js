//ECMA 6.1 +
'use strict';

function printMessage(message) {
    console.log(`response message : ${message}`);
}
printMessage('Hello');

//default parameters ES6
function defaultParameter(message ='Billie Jean is not My lover', from = 'Joe Biden') {
    console.log(`${from} send message ${message}`);
}
defaultParameter();


//Rest Parameters ES6
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('Billie Jean', 'is not' ,'my lover', 'she just girl');

