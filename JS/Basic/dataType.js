//ECMA 6.1 +
'use strict';

//let and var, hoisting
// {
    //block scope
// let name = 'GFL';
// console.log(name);
// name = 'hell';
// console.log(name);
//console.log(global); possible.
// }

// let global = 'global Boyyyyyyyy';
//console.log(name); impossible.
// console.log(global);

//var hoisting is mk global variable. and ignore the scope.
//{
    //var idiot = 6974;
//} block
//console.log(idiot); POSSIBLE
//Internet Explorer can't use ECMA 6 +. but don't mind that. who using IE?

//Variable Types
/*
    Primitive : number, String, boolean, null, undefined, symbol
    Object : object, array ... etc
    function : first-class function

    NUMBER
    Infinity and -Infinity and NaN(Not a Number)
    number : -2**53 ~ 2**53
    + bigInt : bigger then number.
 */

//js el

const test = 'testing';
const hello = `hi ${test}`;
console.log(`hello ${hello}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1===symbol2);

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 +2}`);

console.log(2**4);