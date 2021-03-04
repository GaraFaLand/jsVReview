//ECMA 6.1 +
'use strict';

//Synchronous Callback
function printImmediately(print) {
    print();
}
console.log('1'); //1
printImmediately(() => console.log('hello')); //2
setTimeout(() => console.log(2)); //4
console.log('3'); //3


//Asynchronous Callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async'),2000);