//ECMA 6.1 +
'use strict';

function printMessage(message) {
    console.log(`response message : ${message}`);
}
printMessage('Hello');

//default parameters ES6
function defaultParameter(message ='Billie Jean is not My lover', from = 'Joe Biden') {
    //message = message || 'Billie Jean is not My lover';
    //from = from || 'Joe Biden';
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

//Early return/exit
function bad(User) {
    if (User.length > 10)  {
        //code
    }
}

function better(User) {
    if (User.length <= 10) {
        return;
    }
}

//Function Expression
const print = function () {
    console.log('wow');
}
print();
//anonymous function must called after declaration.

print2();
function print2 () {
    console.log('wow2');
}
//declaration function : DO YOU HAVE TO?

//Callback. just Callback
function hell(message) {
    if (message === 'hell') {
        hell1();
    }else{
        hell2();
    }
}
const hell1 = function () {console.log('Hell Yeah');};
const hell2 = function () {console.log('Fuck off');};

//Arrow function ES6
//always anonymous.
//for Array
const arrow = () => console.log('arrow');
const add = (a,b) => a + b;
console.log(add(2,4));
arrow();